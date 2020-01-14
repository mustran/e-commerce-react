import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";

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
}

export default App;
