import Style from "./Footer.module.css";
function Footer() {
  return (
    <div className={Style.container}>
      <footer className={Style.footer}>
        <h2 className={Style.footer__title}>Footer Movie App</h2>
        <p className={Style.footer__author}>created by @ DTS</p>
      </footer>
    </div>
  );
}
export default Footer;
