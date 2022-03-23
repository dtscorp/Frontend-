function Hello(props) {
  // untuk membedakan componen dan function , componen hurufnya harus capital
  const { name, age } = props;
  //   diluar return adalah javascript biasa
  return (
    //   didalam ini merupakan sintak jsx
    <div className="hello">
      {/* styling componen menggunakan propety className, karna keyword class sudah dingunakan untuk membuat class pada react */}
      <h2>Hello React</h2>
      <p>
        Saya {name}, IT enthusias I'm {age}
      </p>
    </div>
  );
}

export default Hello;
