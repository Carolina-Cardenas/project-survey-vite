import { useState } from "react";

const musicTypes = ["Rock", "LatinMusic", "Pop"];
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
      What kind of music do you like to listen?:
      {musicTypes.map(({ type }, index) => (
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
    </form>
  );
};
