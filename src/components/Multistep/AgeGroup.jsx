import { useState } from 'react'
const ageGroups =["18-30" , "31-40" , "41+"];
export const AgeGroup = ({updateFormData , value}) => {
  const [ageGroup, setAgeGroup] = useState(value)
  const  ageInput = (e) => {
    updateFormData("ageGroup" , e.target.value),
   setAgeGroup(e.target.value)
}
  
  return (
    <form>
       <div className="container">
         <div className="spanText">
          <span className="spanText"> In what age range are you?</span>
         </div>
         <div className='radio-buttons'>
            {ageGroups.map(group => (
          <label  key={group} htmlFor="group" className='radioText'>
              <input 
                type="radio"
                value={group}
                checked={ageGroup === group}
                onChange={ageInput}/>
               {group}
          </label>
     
          )) }
           </div> 
         </div>
    </form>
   )
 }
 