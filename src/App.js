import React, { useState, useMemo } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/home';
import Create from './pages/create';
import MyStuff from './pages/myStuff';
import Play from './pages/play';
import Host from './pages/host';
import { UserContext } from './userContext';



function App() {

  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const value = useMemo(() => ({user, setUser, loggedIn, setLoggedIn}), [user, setUser, loggedIn, setLoggedIn]);

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
              </UserContext.Provider>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
