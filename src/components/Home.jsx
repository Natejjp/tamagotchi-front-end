import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export function Home() {
  const [pet, setPet] = useState([])

  useEffect(async function () {
    const response = await axios.get(
      'https://tamagotchinate.herokuapp.com/api/Pets'
    )

    setPet(response.data)
  }, [])

  return (
    <>
      <h2 className="title">Current Pets</h2>
      <div className="pets">
        <ul>
          <li className="name">
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
