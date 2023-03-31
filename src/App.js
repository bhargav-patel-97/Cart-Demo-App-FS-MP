import randomId from "./utils/randomId";

import { ChakraProvider } from "@chakra-ui/react";
import {
  FlagshipProvider,
  OS_NAME,
  FLAGSHIP_VISITOR,
} from "@flagship.io/react-sdk";
import mixpanel from 'mixpanel-browser';


import "./App.css";
import Cart from "./components/Cart";
import Loader from "./components/Loader";
import { apiKey, envId, tourCity } from "./config/Config";

mixpanel.init('2805c8ba10ee0d941f84e4b371165ca6', { debug: true });
function App() {
  const userId = randomId();
  console.log("User ID received at App.js level: " + userId);
  
  if (userId != null) {
    console.log("User ID at IF Block level: " + userId);
    return (
      <ChakraProvider>
        <FlagshipProvider
          envId={envId}
          apiKey={apiKey}
          onVisitorExposed={({ exposedVisitor, fromFlag }) => {
            mixpanel.track('User Exposed', {
              distinct_id: exposedVisitor.id,
              ...fromFlag.metadata
            }); mixpanel.people.set({
              $flagship_user_id: userId
            });
          }}
          visitorData={{
            id: userId,
            context: {
              tour_city: tourCity,
              unique_id: FLAGSHIP_VISITOR,
              os: OS_NAME
            }
          }}
        >
          <div className="App">
            <header className="App-header">
              <p>Welcome Sailor, let's see Flagship in action today.</p>
            </header>
            <Cart city={tourCity} visitorId={userId}/>
          </div>
        </FlagshipProvider>
      </ChakraProvider>
    );
  } else {
    return <Loader />;
  }
}

export default App;
