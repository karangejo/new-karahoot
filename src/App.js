import React, { useState, useMemo } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Create from "./pages/create";
import MyStuff from "./pages/myStuff";
import Play from "./pages/play";
import Host from "./pages/host";
import Test from "./pages/test";
import { UserContext } from "./userContext";
import "./style.css";

function App() {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentGame, setCurrentGame] = useState({});
  const value = useMemo(
    () => ({
      user,
      setUser,
      loggedIn,
      setLoggedIn,
      currentGame,
      setCurrentGame,
    }),
    [user, setUser, loggedIn, setLoggedIn, currentGame, setCurrentGame]
  );

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <UserContext.Provider value={value}>
            <Route path="/" component={Home} exact />
            <Route path="/create" component={Create} />
            <Route path="/mystuff" component={MyStuff} />
            <Route path="/Play" component={Play} />
            <Route path="/Host" component={Host} />
            <Route path="/test" component={Test} />
          </UserContext.Provider>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
