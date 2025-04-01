const App = () => {
  const name = ["Sanju", "Manju", "Riya", "Jyoti"];
  const ans = name.map((key) => {
    return (
      <>
        <h1>{key}</h1>
      </>
    )
  });
  return (
    <>
      <h1>Hello sir</h1>
      {ans}
    </>
  );
};
export default App;
