import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "./index.module.css";
import icHome from "./home.png";
import icLanguage from "./language.png";
import icLogo from "./logo.png";
import icSelect from "./select.png";
import { LANGS } from "../../core/constant";
import GlobalContext from "../../core/context";

const OPTIONS = [
  {
    key: LANGS[0],
    label: "English",
  },
  {
    key: LANGS[1],
    label: "Chinese/中文",
  },
];

export default function Footer() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { language, setLanguage } = useContext(GlobalContext);
  const isEn = language === LANGS[0];

  const onChange = (lang) => {
    setLanguage(lang);
    setShow(false);
  };

  return (
    <>
      <div className={s.placeholder}></div>
      <div className={s.footer}>
        <div className={s.menuItem} onClick={() => setShow(true)}>
          <img src={icLanguage} className={s.icLang} />
          language
        </div>
        <div
          className={s.menuItem}
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={icHome} className={s.icHome} />
          home
        </div>
        <a className={s.menuItem} href="https://hunlab.art/">
          <img src={icLogo} className={s.icLogo} />
          hunlab
        </a>
      </div>
      {show && (
        <div className={s.modal}>
          <h1 className='title'>Language</h1>
          {OPTIONS.map((opt) => {
            const isSelected = opt.key === language;
            return (
              <div
                className={`${s.item} ${isSelected ? s.selected : ""}`}
                onClick={() => onChange(opt.key)}
                key={opt.key}
              >
                {opt.label}
                {isSelected && <img src={icSelect} className={s.icSelect} />}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
