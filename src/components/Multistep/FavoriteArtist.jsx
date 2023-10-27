import { useState } from "react"

export const FavoriteArtist = () => {
    const [name, setName] = useState()
  return (
   <form>
    <div>
        <div> Who is your favorite artist?</div> 
        <div>  <input type="text"></input> </div>
         </div>
          </form>
  )
}
