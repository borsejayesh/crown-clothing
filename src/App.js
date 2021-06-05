import HomePage from "./pages/homepage/HomePage";
import Hats from "./Hats";

import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/hats" component={Hats} />
      </Switch>
    </div>
  );
};

export default App;
