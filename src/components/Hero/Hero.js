import Style from "./Hero.module.css";

function Hero() {
  return (
    <div className={Style.container}>
      <section className={Style.hero}>
        <div className={Style.hero__left}>
          <h2 className={Style.hero__title}>Spiderman</h2>
          <h3 className={Style.hero__genre}>Genre: Drama. Thriler</h3>
          <p className={Style.hero__description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque vero
            eaque cumque consequatur amet cum repellat iure minus animi
            exercitationem nobis accusantium, consequuntur obcaecati laboriosam
            ullam fugiat quibusdam, aliquam saepe.
          </p>
        </div>
        <div className={Style.hero__right}>
          <img
            className={Style.hero__image}
            src="https://picsum.photos/563/354"
            alt=""
          />
        </div>
      </section>
    </div>
  );
}
export default Hero;
