import { Name} from "./Name";
import { AgeGroup } from "./AgeGroup";
import {Gender } from "./Gender";
import {Email } from "./Email";
import {FavoriteArtist } from "./FavoriteArtist";
import {MusicType} from "./MusicType";
import {AverageTime } from "./AverageTime";

export const MultiStepForm = () => {
  return (
    <div>MultiStepForm
      <Name/>
      <AgeGroup/>
      <Gender/>
      <Email/>
      <MusicType/>
      <FavoriteArtist/>
      <AverageTime/>

      
    </div>
  )
}
