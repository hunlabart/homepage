import { useRef } from "react";
import { useParams } from 'react-router-dom';
import Layout from "../../../components/Layout";
import totalData from '../../../assets/ArtistArtworksInfo.json'
import s from './index.module.css'

// todo
const INNER_FRAME_URL = "https://8w.8thwall.app/inner-ar";
const IFRAME_ID = "my-iframe"; // iframe containing AR content.

export default function ARDetailPage() {
  const iframeRef = useRef();
  let { arId } = useParams();
  const arDetail = totalData.find(it => it.id === arId)

  const handleStartAR = () => {
    // LEGACY METHOD ONLY: registers the XRIFrame by iframe ID
    // window.XRIFrame.registerXRIFrame(IFRAME_ID)
    // checks if camera has been accepted in iframe before displaying controls
    iframeRef.current.setAttribute("src", INNER_FRAME_URL); // This is where the AR iframe's source is set.
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
      <div className={s.arWrapper}  onClick={handleStartAR}>
        {/* <div onClick={handleStartAR}>start In AR</div> */}
        <iframe
          id={IFRAME_ID}
          ref={iframeRef}
          allow="camera;gyroscope;accelerometer;magnetometer;xr-spatial-tracking;microphone;"
        ></iframe>
      </div>
      <div className={s.video}>
        <video src={arDetail.interviewVideo} />
      </div>
      <div className={s.workDescription}>{arDetail.artworkDescription}</div>
    </Layout>
  );
}
