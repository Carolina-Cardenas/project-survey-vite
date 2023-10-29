import { useState } from 'react'
const ageGroups =["18-30" , "31-40" , "41+"];
export const AgeGroup = ({updateFormData , value}) => {
  const [ageGroup, setAgeGroup] = useState('')
  
  const  ageInput = (e) => {updateFormData("ageGroup" , e.target.value),
  setAgeGroup(e.target.value)
}
  
  return (
    <form>
       <div className="container">
       <span className="spanText"> In what age range are you?</span>
       <div className='radio-buttons'>
        {ageGroups.map(group => (
          <label  key={group} htmlFor="group" className='radio-button-label'>
           <input 
              type="radio"
              value={group}
              checked={ageGroup === group}
              onChange={ageInput}
        />
         
               {group}
            </label>
     
          )) }
         </div> 
         </div>
    </form>
   )
 }
 