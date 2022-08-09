import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Signin from "./pages/signin/signin";
import Signup from "./pages/signup/SignUp.jsx";

function App() {
  return (
    <div className="App bg-slate-500 ">
      hello
      <Router>
        <Route path={"/signin"} exact>
          <Signin />
        </Route>

        <Route path={"/signup"} exact>
          <Signup />
        </Route>
      </Router>
    </div>
  );
}

export default App;
