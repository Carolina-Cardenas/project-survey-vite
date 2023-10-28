import { useState } from "react";
import { Name} from "./Name";
import { AgeGroup } from "./AgeGroup";
import {Gender } from "./Gender";
import {Email } from "./Email";
import {FavoriteArtist } from "./FavoriteArtist";
import {MusicType} from "./MusicType";
import {AverageTime } from "./AverageTime";
import {Submit } from "./Submit";
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

  const updateFromData = (field , value) => {
    setFormData ((values) => ({...value, [field]: value}));
  };

  const nextStep = () => {
    if (currentStep < 6 ) setCurrentStep (currentStep + 1);
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
 
 
  
    return (
    <div className="body">
      

    </div>
  )
    }

