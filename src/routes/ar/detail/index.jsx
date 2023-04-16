import { useRef } from "react";
import { Routes, Route, useParams } from 'react-router-dom';
import Layout from "../../../components/Layout";

const INNER_FRAME_URL = "https://8w.8thwall.app/inner-ar";
const IFRAME_ID = "my-iframe"; // iframe containing AR content.

export default function ARDetailPage() {
  const iframeRef = useRef();
  let { arId } = useParams();
  const handleStartAR = () => {
    // LEGACY METHOD ONLY: registers the XRIFrame by iframe ID
    // window.XRIFrame.registerXRIFrame(IFRAME_ID)
    // checks if camera has been accepted in iframe before displaying controls
    iframeRef.current.setAttribute("src", INNER_FRAME_URL); // This is where the AR iframe's source is set.
  };

  return (
    <Layout title="AR">
      <div>ARDetail:{arId}</div>
      <div onClick={handleStartAR}>start AR</div>
      <iframe
        id={IFRAME_ID}
        ref={iframeRef}
        allow="camera;gyroscope;accelerometer;magnetometer;xr-spatial-tracking;microphone;"
      ></iframe>
    </Layout>
  );
}
