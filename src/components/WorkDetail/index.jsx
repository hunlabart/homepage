import Layout from "../../components/Layout";
import s from "./index.module.css";

export default function WorkDetail({ detail }) {
  return (
    <Layout title="VR">
      <div className={s.info}>
        <p className={s.name}>{detail.name}</p>
        <p className={s.des}>Title,Year</p>
      </div>
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
      <div className={s.workDescription}>{detail.artworkDescription}</div>
      <div className={s.workDescription}>{detail.artistBio}</div>
    </Layout>
  );
}
