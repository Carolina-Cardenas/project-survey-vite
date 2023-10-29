export const Email = ({updateFormData , value}) => {
  const  emailInput = (e) => updateFormData("email" , e.target.value)
  return (
   <form>
     <div className="container">
      <span className="spanText">Can you tell me your email?</span> 
      <div>    
        <input className="inputText" type="text" value={value} onChange={emailInput}></input>
      </div>
     </div>
    </form>
  )
}
