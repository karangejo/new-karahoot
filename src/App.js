import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/home';
import Create from './pages/create';
import MyStuff from './pages/myStuff';
import Play from './pages/play';




function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/create" component={Create} />
                <Route path="/mystuff" component={MyStuff} />
                <Route path="/Play" component={Play} />
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
