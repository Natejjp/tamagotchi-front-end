import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export function Pets() {
  const [pet, setPet] = useState({
    id: 0,
    name: '',
    birthday: '',
    hungerLevel: 0,
    happinessLevel: 0,
    playtimes: null,
    feedings: null,
    scoldings: null,
  })

  const params = useParams()
  // useEffect(function () {
  //   async function loadStats() {
  //     const response = await axios.get(
  //       'https://tamagotchinate.herokuapp.com/api/Pets/${params.id}'
  //     )
  //     setPet(response.data)
  //   }
  //   loadStats()
  // }, [])

  useEffect(function () {
    // Load data here
    async function fetchPet() {
      const response = await fetch(
        `https://tamagotchinate.herokuapp.com/api/Pets/${params.id}`
      )

      if (response.status === 200) {
        const json = await response.json()
        setPet(json)
      }
    }

    fetchPet()
  }, [])

  return (
    <>
      <h2>{pet.name}</h2>
      <p>{pet.birthday}</p>
      <p>{pet.hungerLevel}</p>
      <p>{pet.happinessLevel}</p>
    </>
  )
}
