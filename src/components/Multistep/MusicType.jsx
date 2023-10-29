import { useState } from "react";

const musicTypes = ["Rock", "LatinMusic", "Pop" , "Electronic/Dans" , "Blues/Jass" , "Urban Music" , "Others"];
export const MusicType = ({updateFormData , value}) => {
  const [musicType, setMusicType] = useState("")
  const  musicTypeInput = (e) => {updateFormData("musicType" , e.target.value),
setMusicType(e.target.value)
}
    
 return (
      <form>
       <div className="container">
       <span className="spanText"> In what age range are you?</span>
       <div className='radio-buttons'>
        {musicTypes.map(group => (
          <label  key={group} htmlFor="group" className='radio-button-label'>
           <input 
              type="radio"
              value={group}
              checked={musicType === group}
              onChange={musicTypeInput}
        />
         
               {group}
            </label>
     
          )) }
         </div> 
         </div>
    </form>
   )
 }
  
 
 