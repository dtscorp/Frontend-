const Hello = (props) => {
  const { name, age } = props;
  return (
    <div className="hello">
      <h2>Hello React</h2>
      <p>
        Saya {name}, IT enthusias I'm {age}
      </p>
    </div>
  );
};

export default Hello;
