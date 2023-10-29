export const Name = ({updateFormData , value}) => {

  const  nameInput = (e) => updateFormData("name" , e.target.value)
  return (
    <form>
      <div className="container">
      <div className="spanText">
        <span className="spanText">Hi! What is your name? </span>
        </div>
        <div className="answer">
          <input className="inputText" type="text" value={value} onChange={nameInput}/>
        </div>
      </div>    
  </form>
  )
}
