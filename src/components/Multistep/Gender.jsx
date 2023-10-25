import { useState } from "react"

export const Gender = () => {
    const [gender, setGender] = useState()
  return (
    <div>Gender
          <select className="shadow" name="genre" id="genre" >{/*onChange="filterGenre()" */}
          <option value="select">Select</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="others">Others</option>
          </select>
    </div>
  )
}
