import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import Styles from "./mediaplayer.module.css";

export default function VideoPlayer() {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  return (
    <div className={Styles.Msplayer}>
      <div className={Styles.player}>
        <h2>Surfing Moments Of The Year | Best Of 2020</h2>

        {hasWindow && (
          <ReactPlayer url="https://www.youtube.com/watch?v=ma67yOdMQfs" />
        )}
      </div>
      <div className={Styles.Mplayer}>
        <h4>
          {" "}
          From Justine Dupont, Kai Lenny, Lucas Chumbo, and Conor Maguires
          mind-blowing antics at Nazaré,
          <br />
          Jaws and Mullaghmore to Carissa Moore, Caroline Marks, Jamie OBrien,
          and Kanoa Igarashis footwork on the worlds most high-performance
          waves, we packed it all in here — and then some.
        </h4>
      </div>
    </div>
  );
}
