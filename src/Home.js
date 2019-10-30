import React from "react"
import Data from "./randomUsers.json"
import { Link } from "react-router-dom"

function Home(props) {
  return (
    <div className="body">
      <div className="home">
        <h3 className="list">
          List View
          <hr />
        </h3>
        <div className="peeps">My Peeps</div>
        <div id="homes">
          {Data.map(user => (
            <Link key={"my-home-" + user.id} to={"/User/" + user.id}>
              <p className="sve">
                <img className="pic" src={user.picture.thumbnail}></img>
                {user.name.first} {user.name.last}
                <hr />
              </p>
            </Link>
          ))}
        </div>
      </div>
      {/* <p>{people}</p>
      let people = Data.map(korisnik => (
      <Link to={"/user/" + korisnik.id}>
        <p>
          <img src={korisnik.picture.thumbnail} alt="" /> {korisnik.name.first}{" "}
          {korisnik.name.last}
        </p>
      </Link> */}
    </div>
  )
}

export default Home
