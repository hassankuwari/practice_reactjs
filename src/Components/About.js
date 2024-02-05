import React from 'react'
import { useParams } from 'react-router-dom'

const About = () => {

  const { id } = useParams()

  return (
    <div>
      this is about page.{id}
    </div>
  )
}

export default About
