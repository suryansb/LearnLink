import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
//import Home from './Pages/home';
import RootLayout from './Layouts/RootLayout';
import Quiz from "./Pages/quiz";
import Flashcard from "./Pages/flashcard";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<RootLayout />}></Route>
        <Route path="/quiz" element= {<Quiz/>}></Route> 
        <Route path="/flashcard" element={<Flashcard/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
