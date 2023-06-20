import { Link } from "react-router-dom";
import Layout from "../../../components/Layout";
import totalData from "../../../assets/ArtistArtworksInfo.json";

import s from "./index.module.css";

const list = totalData.filter((it) => it.part === "interactive");

export default function InteractiveListPage() {
  return (
    <Layout title="Interactive">
      <div className={s.list}>
        {list.map((it) => {
          return (
            <Link to={`/interactive/detail/${it.id}`} key={it.id}>
              <div className={s.item}>
                <div className={s.video}>
                  <img src={it.artworkPhoto} />{" "}
                </div>
                <p className={s.workName}>{it.artworkName}</p>
              </div>
            </Link>
          );
        })}
        <div className={s.item}></div>
        <div className={s.item}></div>
      </div>
    </Layout>
  );
}
