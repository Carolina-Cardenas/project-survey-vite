import { useState } from "react"

export const Name = () => {
    const [name, setName] = useState()
  return (
    <div>Name : 
        <input type="text"></input> 
         </div>
  )
}
