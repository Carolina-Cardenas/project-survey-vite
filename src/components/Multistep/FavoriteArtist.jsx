
export const FavoriteArtist = ({updateFormData , value}) => {
  const  favoriteArtistInput = (e) => updateFormData("favoriteArtist" , e.target.value)
  return (
   <form>
    <div className="container">
      <span className="spanText"> Who is your favorite artist?</span> 
        <div  className="answer">  
          <input className="inputText"type="text" value={value} onChange={favoriteArtistInput}></input> 
        </div>
    </div>
  </form>
  )
}
