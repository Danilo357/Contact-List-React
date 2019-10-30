import React from "react"
import "./App.css"
import User from "./User"
import Home from "./Home"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Data from "./randomUsers.json"

function App(props) {
  return (
    <Router>
      {/* <div id="container">
        <header>
          <h3>List View</h3>
          <nav>
            <Link to="/user/"+korisnik.id>{people}</Link>

            {/* <p id="person">My Peeps{people}</p> 
          </nav>
        </header>
      </div> */}

      <main>
        <Route exact path="/" component={Home} />
        <Route path="/user/:id" component={User} />
      </main>
    </Router>
  )
}

export default App
