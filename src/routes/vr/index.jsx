import Layout from "../../components/Layout";
import WorkDetail from "../../components/WorkDetail";
import totalData from "../../assets/ArtistArtworksInfo.json";
import s from "./index.module.css";

export default function VRPage() {
  const detail = totalData.find((it) => it.part === "VR");
  return (
    <Layout title="VR">
      <WorkDetail detail={detail} />
      {/* <div className={s.info}>
        <p className={s.name}>{detail.name}</p>
        <p className={s.des}>Title,Year</p>
      </div>
      <div className={s.video}></div>
      <div className={s.workDescription}>{detail.artworkDescription}</div>
      <div className={s.video}></div> */}
    </Layout>
  );
}
