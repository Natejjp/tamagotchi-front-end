import axios from 'axios'
import { Link } from 'react-router-dom'

export function Layout({ children }) {
  return (
    <div className="layout">
      <header className="header">
        <div className="container">
          <h1>
            <Link to="/">Tamagotchi</Link>
          </h1>
        </div>
      </header>
      <main className="main">
        <div className="container">{children}</div>
      </main>
      <footer className="footer">
        <div className="container">Friends not Pets</div>
      </footer>
    </div>
  )
}
