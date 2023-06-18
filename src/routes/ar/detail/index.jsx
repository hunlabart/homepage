import { useRef } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../../components/Layout";
import totalData from "../../../assets/ArtistArtworksInfo.json";
import s from "./index.module.css";

// todo
const INNER_FRAME_URL = "https://8w.8thwall.app/inner-ar";
const IFRAME_ID = "my-iframe"; // iframe containing AR content.

export default function ARDetailPage() {
  const iframeRef = useRef();
  let { arId } = useParams();
  const arDetail = totalData.find((it) => it.id === arId);

  const handleStartAR = () => {
    // LEGACY METHOD ONLY: registers the XRIFrame by iframe ID
    // window.XRIFrame.registerXRIFrame(IFRAME_ID)
    // checks if camera has been accepted in iframe before displaying controls
    // iframeRef.current.setAttribute("src", INNER_FRAME_URL); // This is where the AR iframe's source is set.
    // 这里需要替换成每个艺术家自己的8thwall页面地址
    const arUrl = arDetail.arApp || INNER_FRAME_URL
    iframeRef.current.setAttribute("src", arUrl); // This is where the AR iframe's source is set.
  };

  return (
    <Layout title="AR">
      <div className={s.artistInfo}>
        <img className={s.avatar} src={arDetail.artistPhoto} />
        <div className={s.info}>
          <p className={s.name}>{arDetail.name}</p>
          <p className={s.des}>Title,Year</p>
        </div>
      </div>
      <div className={s.arWrapper} onClick={handleStartAR}>
        {/* <div onClick={handleStartAR}>start In AR</div> */}
        <iframe
          id={IFRAME_ID}
          ref={iframeRef}
          allow="camera;gyroscope;accelerometer;magnetometer;xr-spatial-tracking;microphone;"
        ></iframe>
      </div>
      <div className={s.video}>
        {/* <video src={arDetail.interviewVideo} /> */}
        <iframe
          width="100%"
          height="100%"
          src={arDetail.interviewVideo}
          // src="https://www.youtube.com/embed/8wcu6pwkdVU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className={s.workDescription}>{arDetail.artworkDescription}</div>
    </Layout>
  );
}
