import { useNavigate, useLocation } from "react-router-dom";
import s from "./index.module.css";
import icHome from "./home.png";
import icHomeActive from "./homeActive.png";
import icLogo from "./logo.png";


export default function Footer() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isHome = pathname === '/'

  return (
    <>
      <div className={s.placeholder}></div>
      <div className={s.footer}>
        <div
          className={s.menuItem}
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={isHome ? icHomeActive: icHome} className={s.icHome} />
          home
        </div>
        <a className={s.menuItem} href="https://hunlab.art/">
          <img src={icLogo} className={s.icLogo} />
          hunlab
        </a>
      </div>
      
    </>
  );
}
