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

  const [currentStep , setCurrentStep ] = useState(1)
  return (
    <div className="body">
   <Header/>
      <Name/>
      <AgeGroup/>
      <Gender/>
      <Email/>
      <MusicType/>
      <FavoriteArtist/>
      <AverageTime/>
      <Submit/>


      
    </div>
  )
}
