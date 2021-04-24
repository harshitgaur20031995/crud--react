import "./App.css";
import Home from "./component/pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ShowCart from "./component/pages/ShowCart";
import Update from "./component/Products/Update";
import Add from "./component/Products/Add";

function App() {
  return (
    // <div className="App">

    //   <Home/>

    // </div>
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/update/:id" component={Update}></Route>
          <Route exact path="/add" component={Add}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
