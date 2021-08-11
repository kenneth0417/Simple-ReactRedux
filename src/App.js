import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./Components/Form";
import Todos from "./Pages/Todos";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Form} />
          <Route path="/todos" component={Todos} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
