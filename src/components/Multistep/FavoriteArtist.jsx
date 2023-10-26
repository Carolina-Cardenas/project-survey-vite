import { useState } from "react"

export const FavoriteArtist = () => {
    const [name, setName] = useState()
  return (
    <div>
        Who is your favorite artist?  
        <input type="text"></input> 
         </div>
  )
}
