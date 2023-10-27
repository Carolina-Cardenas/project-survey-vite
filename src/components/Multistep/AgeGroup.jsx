import { useState } from "react"

const ageGroups =["18-30" , "31-40" , "41+"];
export const AgeGroup = () => {
    const [ageGroup, setAgeGroup] = useState()
 
  return (
    <form>
       <div className=""> Can you tell me your age?</div>
       <div>
        {ageGroups.map(group => (
    <label key={group}>
       <input
         type="radio"
         value={group}
         onChange={event => setAgeGroup(event.target.value)}
         checked={ageGroup === group }
        />
          {group}
          </label>
          )) }
         </div> 
    </form>
   )
 }
 