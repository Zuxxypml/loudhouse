import React from "react";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies from "../Movies/Movies";
import MovieInformation from "../MovieInformation/MovieInformation";
import Actors from "../Actors/Actors";
import Profile from "../Profile/Profile";
import NavBar from "../NavBar/NavBar";
import { AppContent, AppRoot, AppToolBar } from "./App.emotion";
const App = () => {
  return (
    <AppRoot>
      <CssBaseline />
      <Router>
        <NavBar />
        <AppContent>
          <AppToolBar>
            <Routes>
              <Route exact path="/" element={<h1>Home</h1>}></Route>
              <Route exact path="/movies" element={<Movies />}></Route>
              <Route
                exact
                path="/movie/:id"
                element={<MovieInformation />}
              ></Route>
              <Route exact path="/actors/:id" element={<Actors />}></Route>
              <Route exact path="/profile/:id" element={<Profile />}></Route>
            </Routes>
          </AppToolBar>
        </AppContent>
      </Router>
    </AppRoot>
  );
};

export default App;
