import Footer from "../Footer";
import Nav from "../Nav";
import s from "./index.module.css";
import GlobalContext from '../../core/context'

import { LANGS, LANG_KEY } from "../../core/constant";
import useLocalStorage from "../../hooks/useLocalStorage";


export default function Layout({
  footer = true,
  nav = true,
  children,
  title = "",
}) {
  const [language, setLanguage] = useLocalStorage(LANG_KEY, LANGS[0]);

  return (
    <GlobalContext.Provider value={{ language, setLanguage}}>
      {nav && <Nav title={title} />}
      <main className={s.app}>{children}</main>
      {footer && <Footer />}
    </GlobalContext.Provider>
  );
}
