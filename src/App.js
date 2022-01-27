import "./App.css";
import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import Cook from "./components/Cook";
// import { Switch, Route } from "react-router-dom";


function App() {
    return (
        <div className="App">
            <h1 className="header">Oregon Gooseneck Barnacles</h1>
            <Navbar />
            {/* <Switch>
                <Route path="/" exact render={() => <Home />} />
                <Route path="/cook" render={() => <Cook />} />
            </Switch> */}
        </div>
    );
}

export default App;
