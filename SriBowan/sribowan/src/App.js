import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import QuestionPage from './Components/AskAnything';
import Suggest from './Components/suggest';
import Slideshow from './Components/Home';
import Ratings from './Components/ratings';


// import CreateTodo from "./Component/create-todo";
// import EditTodo from "./Component/edit-todo";
// import TodosList from "./Component/todos-list";
// import {bodyComponent} from "./Component/body-component";
// import {ImageSlide} from "./Component/imageSlide-component";
// import {Arrow} from "./Component/imageMoving-component";




import logo from "./logo.jpeg";

class App extends Component {
  render() {
    return (

        <div className='big-banner'>


          <Router>
            <div className="container">
               <span class="align-middle">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand"  target="_blank">
                        <img src={logo} width="100" height="100"  />
                    </a>
                  {/*<Link to="/" className="navbar-brand">MERN-Stack </Link>*/}
                  <div className="collpase navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                                <h2><Link to="/" className="nav-link"> Home </Link></h2>
                            </li>
                            <li className="navbar-item">
                                <h2><Link to="/suggest" className="nav-link"> Suggestions </Link></h2>
                            </li>
                            <li className="navbar-item">
                                <h2><Link to="/rating" className="nav-link"> Feedback </Link></h2>
                            </li>
                            <li className="navbar-item">
                                <h2><Link to="/Ask" className="nav-link"> Ask Anything </Link></h2>
                            </li>
                        </ul>
                    </div>
                </nav>
               </span>
              <br/>
                <div>
                    <Slideshow/>
                </div>
            </div>


            {/*<Route path="/home" exact component={Slide} />*/}
              <Route path="/rating" exact component={Ratings} />
            <Route path="/suggest" component={Suggest} />
            <Route path="/Ask" component={QuestionPage} />

          </Router>


        </div>

    )
  }
}

export default App;
