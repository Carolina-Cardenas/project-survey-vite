import { useState } from "react";

const musicTypes = ["Rock", "LatinMusic", "Pop" , "Electronic/Dans" , "Blues/Jass" , "Urban Music" , "Others"];
export const MusicType = () => {
  const [musicType, setMusicType] = useState(
    new Array(musicTypes.length).fill(false)
  );
  const handleOnChange = (position) => {
    const updatedMusicType = musicType.map((item, index) =>
      index === position ? !item : item
    );
    setMusicType(updatedMusicType);
  };
  return (
    <form>
     <div> What kind of music do you like to listen?</div>
     <div> {musicTypes.map(( type , index) => (
        <label key={index}>
          <input
            type="checkbox"
            value={type}
            onChange={() => handleOnChange(index)}
            checked={musicType[index]}
          />
          {type}
        </label>
      ))}
      </div>
    </form>
  );
};
