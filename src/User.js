import React from "react"
import "./App.css"
import { Link } from "react-router-dom"
// import Home from "./Home"
// import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Data from "./randomUsers.json"

// let peopleInfo = Data.map(korisnikInfo => (
//   <>
//     <p>
//       <img src={korisnikInfo.picture.thumbnail} alt="" />{" "}
//       {korisnikInfo.name.first} {korisnikInfo.name.last} {korisnikInfo.email}{" "}
//       {korisnikInfo.phone} {korisnikInfo.location.city} {korisnikInfo.nat}
//     </p>
//   </>
// ))

function User(props) {
  const id = props.match.params.id
  const User = Data.find(contact => contact.id == id)
  return (
    <div className="body">
      <div className="single">
        <h3 className="view">
          Single View
          <hr />
        </h3>
        <div className="main">
          <img src={User.picture.large} />
        </div>
        <p>
          {User.name.first} {User.name.last}
          <hr />
        </p>
        <p>
          {User.email}
          <hr />
        </p>

        <p>
          {User.cell}
          <hr />
        </p>
        <p>
          {User.location.city} {User.nat}
          <hr />
        </p>
        <div className="arrow">
          <Link to="/">&#8592;</Link>
        </div>
      </div>
    </div>
  )
}

export default User
