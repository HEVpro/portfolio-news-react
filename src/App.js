import React from "react";
import { useSelector } from "react-redux";
import './App.css'

import Homepage from "./components/pages/home/home";
import Navbar from './components/navbar/navbar';

import { selectSignedIn } from "../src/features/users";
import Blog from "./components/pages/blog/blog";


const App = () => {
  const isSignedIn = useSelector(selectSignedIn);

  return (
    <div className="app">
      <Navbar />
      <Homepage />
      {isSignedIn && <Blog />}
    </div>
  );
};

export default App;