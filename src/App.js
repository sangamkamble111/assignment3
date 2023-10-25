import Header from "./components/header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
//How to add 404 page
function App() {
  return (
    <div>
      <Header/>
      {/* <Home/>
      <About/>
      <Contact/> */}

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="*" element={ <main style={{ padding: "1rem"}}><p>There's nothing here!</p></main>} />
      </Routes>
    </div>
    
    );
  }

export default App;
