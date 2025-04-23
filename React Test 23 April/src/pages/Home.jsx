const Home = () => {
  return (
    <>
      <h1>Welcome to Home Page</h1>

      <div
        style={{
          backgroundColor: "yellow",
          width: "410px",
          height: "200px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid black",
        }}
      >
        <div
          style={{
            backgroundColor: "skyblue",
            width: "250px",
            height: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "3px solid darkblue",
          }}
        >
          <div
            style={{
              backgroundColor: "red",
              width: "140px",
              height: "60px",
              borderRadius: "50%",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              border: "2px solid black",
            }}
          >
            CYBROM
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
