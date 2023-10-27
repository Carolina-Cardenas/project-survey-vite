import { useState } from "react"

export const Email = () => {
    const [email,setEmail] = useState()
  return (
   <form>
    <div>Can you tell me your email?</div> 
    <div>    <input type="text"></input>
    </div>
     </form>
  )
}
