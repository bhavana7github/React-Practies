
import './App.css';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Nav from './component/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import DataBinding from './component/DataBinding'
import EventBinding from './component/EventBinding'
import UserGreeting from './component/UserGreeting';
import Inline from './component/Inline';
import Stylesheet from './component/Stylesheet';

// import '../node_modules/bootstrap/dist/scc/bootstrap.css'
function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <nav className="nav navbar-dark bg-dark justify-content-between">
          <a href="/" className="navbar-brand">React Routing</a>


        </nav>
        <Nav />
        <Routes>
        <Route exact path='/home' element={< Home />}></Route>
        <Route exact path='/about' element={< About />}></Route>
        <Route exact path='/contact' element={< Contact />}></Route>

        </Routes>
<DataBinding/>
<EventBinding/>
<Inline/>
<Stylesheet

primary={true}
/>
<UserGreeting/>


      </div>
    </BrowserRouter>

  );
}

export default App;
