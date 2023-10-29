export const Name = ({updateFormData , value}) => {

  const  nameInput = (e) => updateFormData("name" , e.target.value)
  return (
    <form>
      <div className="container">
        <span className="spanText">Hi! What are your name? </span>
        <div className="answer">
          <input className="inputText" type="text" value={value} onChange={nameInput}/>
        </div>
      </div>    
  </form>
  )
}
