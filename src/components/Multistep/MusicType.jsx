// Import libraries 
import { useState } from "react";
// Array that contain music types 
const musicTypes = ["Rock", "Latin music", "Pop" , "Electronic/Dance" , "Blues/Jazz" , "Urban Music" , "Others"];
export const MusicType = ({updateFormData , value}) => {
 // state for chosen music type 
  const [musicType, setMusicType] = useState(value)
  const  musicTypeInput = (e) => {updateFormData("musicType" , e.target.value),
setMusicType(e.target.value)
}
 return (
      <form>
        {/* container div for this component */}
       <div className="container">
         {/* div to show title  of component*/}
         <div className="spanText">
           <span className="spanText"> Which one is you favorite music genre?</span>
         </div>
        {/* div that contains radio buttons mapped from music type array */}
        <div className='radio-buttons'>
         {musicTypes.map(group => (
          <label  key={group} htmlFor="group" className='radioText'>
           <input 
              type="radio"
              value={group}
              checked={musicType === group}
              onChange={musicTypeInput}/>
            {group}
            </label>
     
          )) }
        </div> 
       </div>
    </form>
   )
 }
  
 
 