import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import s from "./index.module.css";

const LINKS = [
  {
    path: "ar/list",
    label: "AR",
  },
  {
    path: "vr",
    label: "VR",
  },
  {
    path: "interactive/list",
    label: "Interactive",
  },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Layout title="CeramiXR">
      <div className={s.home}>
        <p className={s.desc}>
          Where Clay Meets Code: <br /> A Digital Frontier of Ceramic Art.
        </p>
        <div className={s.nav}>
          {LINKS.map((link) => {
            return (
              <div onClick={() => navigate(link.path)} className={s.link} key={link.path}>
                {link.label}
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
