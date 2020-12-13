import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import logo from './logo.png';
import './App.css';
import NonUserProfiles from "./pages/NonUserProfiles";
import Profile from "./pages/Profile";
import Landing from "./pages/Landing";
import Forum from "./pages/Forum";
import Dashboard from "./pages/Dashboard";
import CollabInfo from "./pages/CollabInfo";
import About from "./pages/About";
import ProfileEditor from "./pages/ProfileEditor";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <Navbar />
            <Wrapper>
              <Route exact path="/" component={Signup} />
              <Route exact path="/about" component={About} />
              <Route exact path="/collabInfo" component={CollabInfo} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/forum" component={Forum} />
              <Route exact path="/landing" component={Landing} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/nonuserprofiels" component={NonUserProfiles} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/profileeditor" component={ProfileEditor} />
              <Route exact path="/signup" component={Signup} />
            </Wrapper>
            <Footer />
          </div>
        </header>
      </div>
    </Router>

  );
}

export default App;
