import { useState } from "react"

export const Name = () => {
    const [name, setName] = useState()
  return (
    <form>
  <div className="container">
    <div className="question">Hi! What are your name? </div>
   
     <div className="answer">
          <input className="styleAnswer" type="text"></input>
      </div>
  </div>
  </form>
  )
}
