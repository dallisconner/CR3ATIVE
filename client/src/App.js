import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
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

function App() {

  const user = sessionStorage.getItem("user");

  return (
    <Router>
      <Navbar />
      <NavTabs />
      <div className="App">
        <header className="App-header">
          <div>
            <Wrapper>
              <Route exact path="/" component={Landing}>
                {user ? <Redirect to="/dashboard" /> : <Landing />} </Route>
                
              <Route exact path="/landing" component={Landing}>
                {user ? <Redirect to="/dashboard" /> : <Landing />} </Route>

              <Route exact path="/collabInfo" component={CollabInfo}>
                {!user ? <Redirect to="/" /> : <CollabInfo />} </Route>

              <Route exact path="/dashboard" component={Dashboard}>
                {!user ? <Redirect to="/" /> : <Dashboard />} </Route>

              <Route exact path="/forum" component={Forum}>
                {!user ? <Redirect to="/" /> : <Forum />} </Route>

              <Route exact path="/profile" component={Profile}>
                {!user ? <Redirect to="/" /> : <Profile />} </Route>

              <Route exact path="/profile/editor" component={ProfileEditor}>
                {!user ? <Redirect to="/" /> : <ProfileEditor />} </Route>

              <Route exact path="/about" component={About} />

              <Route exact path="/login" component={Login} />

              <Route path="/user" component={NonUserProfiles} />

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
