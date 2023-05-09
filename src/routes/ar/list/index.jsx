import { Link } from "react-router-dom";
import Layout from "../../../components/Layout";
import totalData from '../../../assets/ArtistArtworksInfo.json'
import s from "./index.module.css";

const arList = totalData.filter(it => it.part === 'AR')

console.log(arList);

export default function ARListPage() {
  return (
    <Layout title="AR">
      <div className={s.arWrapper}>
        <div className={s.arList}>
          {arList.map((it) => {
            return (
              <Link to={`/ar/detail/${it.id}`} key={it.id}>
                <div className={s.item}>
                  <img src={it.artistPhoto} className={s.avatar} />
                  <p className={s.name}>{it.name}</p>
                </div>
              </Link>
            );
          })}
          <div className={s.item}></div>
          <div className={s.item}></div>
        </div>
        <p className={s.desc}>
          Please scan the QR codes at the display to access AR interactive
          features for each artwork.
        </p>
      </div>
    </Layout>
  );
}
