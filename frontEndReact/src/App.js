import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import HomePage from './Pages/HomePage';
import GrabDataTest from './Pages/GrabDataTest';

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/grabDataTest" element={<GrabDataTest />} />
            {/* <HomePage /> */}
          {/* </Route> */}
        </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
