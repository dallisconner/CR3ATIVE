import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import NavTabs from "./components/NavTabs"
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import './App.css';
import NonUserProfiles from "./pages/NonUserProfiles";
import Profile from "./pages/Profile";
import Landing from "./pages/Landing";
import Forum from "./pages/Forum";
import Dashboard from "./pages/Dashboard";
import CollabInfo from "./pages/CollabInfo";
import About from "./pages/About";
import ProfileEditor from "./pages/ProfileEditor";
import ImageUpload from "./pages/ImageUpload";

function App() {
  return (
    <Router>
      <Navbar />
      <NavTabs />
      <div className="App">
        <header className="App-header">
          <div>
            <Wrapper>
              <Route exact path="/" component={Landing} />
              <Route exact path="/about" component={About} />
              <Route exact path="/collabInfo" component={CollabInfo} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/forum" component={Forum} />
              <Route exact path="/landing" component={Landing} />
              <Route exact path="/login" component={Login} />
              <Route path="/user" component={NonUserProfiles} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/profile/editor" component={ProfileEditor} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/imageupload" component={ImageUpload} />
            </Wrapper>
            <Footer />
          </div>
        </header>
      </div>
    </Router>

  );
}

export default App;
