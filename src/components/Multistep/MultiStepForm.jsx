import { useState } from "react";
import { Name} from "./Name";
import { AgeGroup } from "./AgeGroup";
import {Gender } from "./Gender";
import {Email } from "./Email";
import {FavoriteArtist } from "./FavoriteArtist";
import {MusicType} from "./MusicType";
import {AverageTime } from "./AverageTime";
import { Header} from "./Header";

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
  console.log(formData);
  const formattedData = `
  name: ${formData.name}
  ageGroup:${formData.ageGroup}
  gender:${formData. gender}
  email:${formData.email}
  favoriteArtist:${formData. favoriteArtist}
  musicType:${formData.musicType}
  averageTime: ${formData.averageTime}
 ` ; 
 alert(formattedData)
 }
 
 
  console.log(currentStep)
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
  
   
      <div className="buttons">
      {currentStep > 1 && <button onClick={prevStep}>back</button>}
      {currentStep < 7 ? ( <button onClick={nextStep}>next</button>):(<button onClick={submitForm}>submit</button>) }
      </div>
    </div>
   
  )
    }

 