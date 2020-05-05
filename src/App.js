import React from "react";
import "./App.css";
import Header from "./components/Header";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Promotion from "./components/Promotion";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Store from "./components/Store";
import Product from "./components/Product";
import NewPost from "./components/NewPost";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <div className="App">
            <Background />
            <Header />
            <Promotion />
            <Newsletter />
          </div>
        </Route>
        <Route exact path="/store" component={Store} />
        <Route path="/store/1" component={Product} />
        <Route path="/new" component={NewPost} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
