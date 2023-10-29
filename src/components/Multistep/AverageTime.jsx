export const AverageTime = ({updateFormData , value}) => {
  const  averageTimeInput = (e) => updateFormData("averageTime" , e.target.value)
  return (
    <form>
    <div>
    <span className="spanText">On a typical day,how many hours a day do you listen to music?</span> 
          <select className="hours-container" name="hours" id="hours" value={value} onChange={averageTimeInput}>{/*onChange="filterGenre()" */}
          <option value="select">Select</option>
          <option value="option-1">1 hours</option>
          <option value="option-2">2-4 hours</option>
          <option value="option-3">More than 4 hours </option>
          </select>
    </div>
    </form>
  )
}
