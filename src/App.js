import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./components/Header/Header";
import { Route } from "react-router-dom";
import AuthPage from './pages/AuthPage/AuthPage';

function App() {
  return (
    <div>
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
      <Route path="/auth" component={AuthPage} />
    </div>
  );
}

export default App;
