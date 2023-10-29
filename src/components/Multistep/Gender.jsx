export const Gender = ({updateFormData , value}) => {
  const  genderInput = (e) => updateFormData("gender" , e.target.value)
  return (
    <form>
      <div className="container">
        <div className="spanText">
        <span > Can you tell me your gender?</span>
        </div>
        <div className="dropdown">
          <select className="selectText" name="gender" id="gender"value={value} onChange={genderInput} >
          <option value="select">Select your gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="others">Others</option>
          </select>
        </div>
      </div>
    </form>
  )
}
