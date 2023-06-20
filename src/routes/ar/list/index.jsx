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
          To access the Augmented Reality (AR) feature, follow this step-by-step guide:

          1. Scan the QR code on the artwork label or click the "View AR" button on each artist page.
          2. Scan the corresponding photograph on the artwork label.
          3. Move your camera around the artwork to discover the AR.

          Please note that the AR feature is exclusive to artworks in the AR Space and may not be supported on older mobile devices.
        </p>
      </div>
    </Layout>
  );
}
