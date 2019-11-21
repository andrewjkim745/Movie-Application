import React from 'react';
import './App.css';
import Header from './Components/Header'
import Movies from './Components/Movies'
import Widget from './Components/Widget'
import Footer from './Components/Footer'
// import MovieForm from './Components/MovieForm'
// import MovieCard from './Components/Shared/MovieCard'
// import DetailedMovie from './Components/screens/DetailedMovie'
// import CreateMovie from './Components/screens/CreateMovie'
// import { Route, Switch } from 'react-router-dom'
import { Routes } from './Components/Routes'

function App() {
  return (
    <div className="App">
      <div>
      <Header/>
      <Widget/>
      </div>
      <main>
        <Routes/>
    
      </main>
    </div>
  );
}

export default App;
