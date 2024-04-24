export const Name = ({updateFormData , value}) => {

  const  nameInput = (e) => updateFormData("name" , e.target.value)
  return (
    <form>
       {/* container div for this component that gets the user name and saves it in name imput */}
      <div className="container">
           {/* div to show title  of component*/}
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
