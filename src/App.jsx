import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";

<<<<<<< HEAD

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>

    </div>
  )
=======
const HatsPage = () => {
    return <div>HATS PAGE</div>;
};

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/hats" component={HatsPage} />
            </Switch>
        </div>
    );
>>>>>>> 2307e7d569629592a3e3ebef474940c3dd554305
}

export default App;
