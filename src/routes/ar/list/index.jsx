import { Link } from "react-router-dom";
import Layout from "../../../components/Layout";
import s from "./index.module.css";

const data = Array(12)
  .fill()
  .map((_, index) => ({
    name: "Pending" + index,
    img: "",
    id: index,
  }));

console.log(data);

export default function ARListPage() {
  return (
    <Layout title="AR">
      <div className={s.arWrapper}>
        <div className={s.arList}>
          {data.map((it) => {
            return (
              <Link to={`/ar/detail/${it.id}`}>
                <div className={s.item}>
                  <img src={it.img} className={s.avatar} />
                  <p className={s.name}>{it.name}</p>
                </div>
              </Link>
            );
          })}
        </div>
        <p className={s.desc}>
          Please scan the QR codes at the display to access AR interactive
          features for each artwork.
        </p>
      </div>
    </Layout>
  );
}
