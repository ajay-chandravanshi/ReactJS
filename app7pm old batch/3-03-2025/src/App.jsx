import AuthApp from "./AuthApp";
import UnAuthApp from "./UnAuthApp";
import { useContext } from "react";
import { myContext } from "./LoginContext";
const App = () => {
const{user}=useContext(myContext)
  return (
    <>
      <h1>Welcome to App</h1>
      {user.auth ? <AuthApp/> : <UnAuthApp/> }
    </>
  );
};
export default App;
