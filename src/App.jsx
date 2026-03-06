// import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Users from "./users/pages/User";

function App() {
  return (
    <Router path="/">
      <Route>
        <Users />
      </Route>
    </Router>
  );
}

export default App;
