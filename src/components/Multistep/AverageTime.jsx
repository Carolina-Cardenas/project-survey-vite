export const AverageTime = ({updateFormData , value}) => {
  const  averageTimeInput = (e) => updateFormData("averageTime" , e.target.value)
  return (
    <form>
    <div>
     <div className="spanText">
      <span className="spanText">On a typical day, how many hours do you listen to music?</span> 
     </div> 
          <select className="selectText" name="hours" id="hours" value={value} onChange={averageTimeInput}>{/*onChange="filterGenre()" */}
             <option value="select">Select</option>
             <option value="1 hours">1 hours</option>
             <option value="2-4 hours">2-4 hours</option>
             <option value="More than 4 hours">More than 4 hours </option>
          </select>
    </div>
    </form>
  )
}
