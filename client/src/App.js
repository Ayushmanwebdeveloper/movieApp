import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import MovieDetail from "./components/views/MovieDetail/MovieDetail";
import NavBar from "./components/views/NavBar/NavBar";
import FavoritePage from "./components/views/FavoritePage/FavoritePage";
import Auth from "./hoc/auth";
import { Layout } from "antd";

const { Content } = Layout;

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Content>
          <Switch>
            <Route exact path="/" component={Auth(LandingPage, null)} />
            <Route exact path="/login" component={Auth(LoginPage, false)} />
            <Route exact path="/register" component={Auth(RegisterPage, false)} />
            <Route exact path="/movies/:movieId" component={Auth(MovieDetail, null)} />
            <Route exact path="/favorites" component={Auth(FavoritePage, true)} />
          </Switch>
        </Content>
      </Router>
    </div>
  );
}

export default App;

