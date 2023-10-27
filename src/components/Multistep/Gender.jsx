import { useState } from "react"

export const Gender = () => {
    const [gender, setGender] = useState()
  return (
    <form>
    <div className="question"> Can you tell me your gender?</div>
    <div className="dropdown">
          <select className="shadow" name="genre" id="genre" >{/*onChange="filterGenre()" */}
          <option value="select">Select</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="others">Others</option>
          </select>
    </div>
     </form>
  )
}
