import React from 'react'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <>
      <h2>Home</h2>
      <div>
        <ul>
          <li>
            <Link to="/1">Pet Name</Link>
          </li>
          <li>Birthday</li>
          <li>Hunger</li>
          <li>Happiness</li>
        </ul>
        <ul>
          <li>
            <Link to="/1">Pet Name</Link>
          </li>
          <li>Birthday</li>
          <li>Hunger</li>
          <li>Happiness</li>
        </ul>
        <ul>
          <li>
            <Link to="/1">Pet Name</Link>
          </li>
          <li>Birthday</li>
          <li>Hunger</li>
          <li>Happiness</li>
        </ul>
      </div>
    </>
  )
}
