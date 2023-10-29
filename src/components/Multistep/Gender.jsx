export const Gender = ({updateFormData , value}) => {
  const  genderInput = (e) => updateFormData("gender" , e.target.value)
  return (
    <form>
      <div className="container">
        <span className="spanText"> Can you tell me your gender?</span>
        <div className="dropdown">
          <select className="shadow" name="gender" id="gender"value={value} onChange={genderInput} >
          <option value="select">Select</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="others">Others</option>
          </select>
        </div>
      </div>
    </form>
  )
}
