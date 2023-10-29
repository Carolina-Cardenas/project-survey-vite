import { useState } from "react";

const musicTypes = ["Rock", "Latin music", "Pop" , "Electronic/Dance" , "Blues/Jazz" , "Urban Music" , "Others"];
export const MusicType = ({updateFormData , value}) => {
  const [musicType, setMusicType] = useState("")
  const  musicTypeInput = (e) => {updateFormData("musicType" , e.target.value),
setMusicType(e.target.value)
}
    
 return (
      <form>
       <div className="container">
        <div className="spanText">
          <span className="spanText"> Which one is you favorite music genre?</span>
        </div>
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
  
 
 