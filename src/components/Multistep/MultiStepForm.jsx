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

export const MultiStepForm = () => {
  const[formData , setFormData] = useState({ 
   name:"" ,
   ageGroup: "" ,
   gender:"",
   email:"",
   favoriteArtist:"",
   musicType:"",
   averageTime:""
  })

  const [currentStep , setCurrentStep ] = useState(1);
  const [showSummary, setShowSummary] = useState(false);


  const updateFormData = (field , value) => {
    setFormData ((values) => ({...values, [field]: value}));
  };

  const nextStep = () => {
    if (currentStep < 7 ) setCurrentStep (currentStep + 1);
 };

 const prevStep =  () => {
  if (currentStep > 1) setCurrentStep (currentStep - 1);
 };

 const submitForm = () => {
  setCurrentStep (8);
  console.log("in submitform", currentStep)
  setShowSummary(true);

  



 }

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
 }
 
    return (
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
        formData={formData} // Pasa el formData al componente Summary
      />
    )}
      <div className="buttons">
      {currentStep > 1 && !showSummary &&  <button onClick={prevStep}>Back</button>}
      {currentStep < 7 && !showSummary  ? ( <button onClick={nextStep}>Next</button>):(!showSummary && <button onClick={submitForm}>Submit</button>) }
      { showSummary && <button onClick={cleanForm}>clean</button>}
      </div>
    </div>
   
  )
    }

 