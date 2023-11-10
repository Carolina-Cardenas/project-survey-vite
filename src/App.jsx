import { useState } from "react";
import { MultiStepForm } from "./components/Multistep/MultiStepForm"
export const App = () => {

const [name, setName] = useState("");
  
  return(
     <div>
     
      <MultiStepForm/>
  </div>
)};
