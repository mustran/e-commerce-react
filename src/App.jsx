import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SignInSignUp from "./pages/signin-signup/SignInSignUp";


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={SignInSignUp} />
      </Switch>

    </div>
  )
}

export default App;
