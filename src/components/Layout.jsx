import axios from 'axios'
import { Link } from 'react-router-dom'

export function Layout({ children }) {
  return (
    <div className="layout">
      <header className="header">
        <div className="container" id="topPage">
          <h1>
            <Link to="/">Tamagotchi</Link>
          </h1>
          <form className="form">
            <label>Search:</label>
            <input type="text" placeholder="Search Tamagotchis"></input>
          </form>
        </div>
      </header>
      <main className="main">
        <div className="container" id="petPage">
          {children}
        </div>
      </main>
      <footer className="footer">
        <div className="container">Friends not Pets</div>
      </footer>
    </div>
  )
}
