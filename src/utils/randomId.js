import { v4 as uuidv4 } from 'uuid';

export default function randomId() {
    let generatedVid = uuidv4();
    console.log("Random ID generated at randomId.js file: " +generatedVid);
    return generatedVid; 
}
