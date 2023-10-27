import { useState } from "react"

export const AverageTime = () => {
    const [averageTime, setAverageTime] = useState()
  return (
    <form>
    <div>
       <div>On a typical day,how many hours a day do you listen to music?</div> 
          <select className="hours-container" name="hours" id="hours" >{/*onChange="filterGenre()" */}
          <option value="select">Select</option>
          <option value="option-1">1 hours</option>
          <option value="option-2">2-4 hours</option>
          <option value="option-3">More than 4 hours </option>
          </select>
    </div>
    </form>
  )
}
