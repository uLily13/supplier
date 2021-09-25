import { useContext } from "react";
import "./App.less";
import { LoginContext, LanguageContext } from "./context";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NotFound from "./notFount";
import Login from "./components/Auth/login";
import Forget from "./components/Auth/forget";
import Signup from "./components/Auth/signup";
import Home from "./components/index";

function App() {
  const { login } = useContext(LoginContext);
  const { language } = useContext(LanguageContext);
  return (
    <Router basename={language === "eng" ? "/en" : "/mn"}>
      <div className="bg-backColor w-screen h-full">
        <Switch>
          {login !== "true" ? (
            <Route exact path="/" component={Login} />
          ) : (
            <Route path="/" component={Home} />
          )}
          <Route path="/" exact render={() => <Redirect to="/" />} />
          <Route exact path="/forget" component={Forget} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/salon" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
