import Layout from "../../components/Layout";
import s from "./index.module.css";

export default function WorkDetail({ detail }) {
  return (
    <Layout title="VR">
      <div className={s.info}>
        <p className={s.name}>{detail.name}</p>
        <p className={s.des}>Title,Year</p>
      </div>
      <div className={s.video}></div>
      <div className={s.workDescription}>{detail.artworkDescription}</div>
      <div className={s.video}></div>
      <div className={s.workDescription}>{detail.artistBio}</div>
    </Layout>
  );
}
