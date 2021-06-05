import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop-page/ShopPage";

import { Route, Switch } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
};

export default App;
