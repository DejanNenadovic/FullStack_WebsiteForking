import { useState} from "react";
const VideoHome = () => {
  const [playState, SetPlayState] = useState(true);
  const [showButton, setShowButton] = useState(false);
  let hideButtonTimer = null
  const playVideo = () => {
    var x = document.getElementById("Video");
    x.play();
    SetPlayState(true)
  };
  const pauseVideo = () => {
    var x = document.getElementById("Video");
    x.pause();
    SetPlayState(false)
  };
  const handleTimer = () =>{
    setShowButton(true);
    if (hideButtonTimer)
        clearTimeout(hideButtonTimer)
    hideButtonTimer = setTimeout(() => {
        setShowButton(false)
    }, 3000)
  }
  return (
    <section className="aboutVideo_container__L0l1A">
      <div
        className="aboutVideo_content__PnTTU"
        onMouseEnter={() => setShowButton(true)}
        onMouseLeave={() => setShowButton(false)}
        onMouseMove={() =>  handleTimer()}
      >
        <div
          className={
            showButton && !playState
              ? "aboutVideo_videoIcon__RiFSD"
              : "aboutVideo_videoIcon__UiFSD"
          }
          id="playIcon"
          onClick={playVideo}
        >
          <span className="aboutVideo_videoSpan">
            <img
              alt="play-icon"
              draggable="false"
              src="https://ik.imagekit.io/2zlgs27bjo/public/icons/play-icon.svg?tr=w-120,q-100"
              decording="async"
              data-nimg="instrinsic"
              data-xblocker="passed"
            ></img>
          </span>
        </div>
        <div
          className={
            showButton && playState
              ? "aboutVideo_videoIcon__RiFSD"
              : "aboutVideo_videoIcon__UiFSD"
          }
          id="pauseIcon"
          onClick={pauseVideo}
        >
          <span className="aboutVideo_videoSpan">
            <img
              alt="pause-icon"
              draggable="false"
              src="https://ik.imagekit.io/2zlgs27bjo/public/icons/pause-icon.svg?tr=w-100,q-80"
              decording="async"
              data-nimg="instrinsic"
              data-xblocker="passed"
            ></img>
          </span>
        </div>
        <video
          id="Video"
          poster="/image/solicy_video.webp"
          autoplay=""
          playsinline=""
          preload="auto"
          className="aboutVideo_video__4LwDU"
          data-xblocker="passed"
          style={{ visibility: "visible" }}
          onPlay={() => {
            SetPlayState(true);
          }}
          onPause={() => {
            SetPlayState(false);
          }}
          
        >
          <source src="https://ik.imagekit.io/2zlgs27bjo/public/about-video.mp4" />
          <track kind="captions" />
        </video>
      </div>
    </section>
  );
};
export default VideoHome;
