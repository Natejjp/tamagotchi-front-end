import { Link } from 'react-router-dom'

export function Layout({ children }) {
  return (
    <>
      <header>
        <h1>
          <Link to="/">Tamagotchi</Link>
        </h1>
      </header>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  )
}
