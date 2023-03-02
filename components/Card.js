import React from 'react'
import Image from 'next/image'

const Card = ({ id, name, location, image, mapURL, description }) => {
  return (
    <div>
      <h2>{name} in {location}</h2>
      <Image
        src={image}
        alt="Picture of the author"
        width={250}
        height={250}
      />
    </div>
  )
}

export default Card
