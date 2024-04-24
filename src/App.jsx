import { useState } from "react";
import { MultiStepForm } from "./components/Multistep/MultiStepForm"
export const App = () => {

const [name, setName] = useState("");
  //the app.jsx is the web main components container
  return(
     <div>
      <MultiStepForm/>
  </div>
)};
