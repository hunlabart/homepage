import { useNavigate, useMatch } from "react-router-dom";
import icBack from "./back.png";
import s from "./index.module.css";

export default function Nav({ title = "" }) {
  const navigate = useNavigate();
  const isHome = !!useMatch({ path: "/", end: true });

  return (
    <>
      <div className={s.placeholder}></div>
      <div className={`${s.nav} title`}>
        {!isHome && (
          <div
            onClick={() => {
              navigate(-1);
            }}
            className={s.back}
          >
            <img src={icBack} className={s.icBack} />
          </div>
        )}
        {title}
      </div>
    </>
  );
}
