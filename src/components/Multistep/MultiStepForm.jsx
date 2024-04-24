// Here I imports all components and libraries 
import { useState } from "react";
import { Name} from "./Name";
import { AgeGroup } from "./AgeGroup";
import {Gender } from "./Gender";
import {Email } from "./Email";
import {FavoriteArtist } from "./FavoriteArtist";
import {MusicType} from "./MusicType";
import {AverageTime } from "./AverageTime";
import { Header} from "./Header";
import { Summary } from "./Summary";
//This is a React functional component called MultiStepForm. In this component, the useState hook is used to manage the form state.
export const MultiStepForm = () => {
  //State to hold the formdata
  const[formData , setFormData] = useState({ 
   name:"" ,
   ageGroup: "" ,
   gender:"",
   email:"",
   favoriteArtist:"",
   musicType:"",
   averageTime:""
  })
//State that tracks current step
  const [currentStep , setCurrentStep ] = useState(1);
  //Booleans state to show summary
  const [showSummary, setShowSummary] = useState(false);


  const updateFormData = (field , value) => {
    setFormData ((values) => ({...values, [field]: value}));
  };
//Function that adds a step to currentStep state 
  const nextStep = () => {
    if (currentStep < 7 ) setCurrentStep (currentStep + 1);
 };
//function that substract step from currentStep state 
 const prevStep =  () => {
  if (currentStep > 1) setCurrentStep (currentStep - 1);
 };
//function that sets currenStep to 8 and show summary to true, this submits the form 
 const submitForm = () => {
  setCurrentStep (8);
  console.log("in submitform", currentStep)
  setShowSummary(true);

  



 }
//function that cleans the form,and restart the form 
 const cleanForm =()=> {
  setFormData({
    name: "",
    ageGroup: "",
    gender: "",
    email: "",
    favoriteArtist: "",
    musicType: "",
    averageTime: ""
  });
  setCurrentStep(1)
  setShowSummary(false)
 }
 
    return (
     // This is the main body of the form
     // according to the currentStep the right component is shown  
    <div className="body">
      <Header/>
      
      { currentStep === 1 && <Name value = {formData.name} updateFormData = { updateFormData}/>}
      { currentStep === 2 && <AgeGroup value = {formData.ageGroup} updateFormData = { updateFormData}/>}
      { currentStep === 3 && <Gender value = {formData.gender} updateFormData = { updateFormData}/>}
      { currentStep === 4 && <Email value = {formData.email} updateFormData = { updateFormData}/>}
      { currentStep === 5 && <FavoriteArtist value = {formData.favoriteArtist} updateFormData = { updateFormData}/>}
      { currentStep === 6 && <MusicType value = {formData.musicType} updateFormData = { updateFormData}/>}
      { currentStep === 7 && <AverageTime value = {formData.averageTime} updateFormData = { updateFormData}/>}
      {currentStep === 8 && showSummary && (
      <Summary
        formData={formData} // Passes the formData to component Summary
      />
    )}
    {/* buttons to step back and forth and a button that shows summary */}
      <div className="buttons">
      {currentStep > 1 && !showSummary &&  <button onClick={prevStep}>Back</button>}
      {currentStep < 7 && !showSummary  ? ( <button onClick={nextStep}>Next</button>):(!showSummary && <button onClick={submitForm}>Submit</button>) }
      { showSummary && <button onClick={cleanForm}>clean</button>}
      </div>
    </div>
   
  )
    }

 