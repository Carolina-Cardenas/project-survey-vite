import { useState } from "react"

export const Email = () => {
    const [email,setEmail] = useState()
  return (
    <div>Email
        <input type="text"></input>
    </div>
  )
}
