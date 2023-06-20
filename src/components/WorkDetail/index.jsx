import Layout from "../../components/Layout";
import s from "./index.module.css";

export default function WorkDetail({ detail }) {
  return (
    <>
      <div className={s.artistInfo}>
        <img className={s.avatar} src={detail.artistPhoto} />
        <div className={s.info}>
          <p className={s.name}>{detail.name}</p>
          <p className={s.des}>{detail.artworkName}</p>
        </div>
      </div>
      <div className={s.video}>
        <img src={detail.artworkPhoto} />
      </div>
      <div className={s.workDescription}><h2>Artist Statement</h2>{detail.artworkDescription}</div>
      <div className={s.video}>
        <iframe
          width="100%"
          height="100%"
          src={detail.interviewVideo}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      
      <div className={s.workDescription}><h2>Artist Bio</h2>{detail.artistBio}</div>
    </>
  );
}
