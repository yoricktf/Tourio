import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({ id, name, location, image, mapURL, description }) => {
  return (
    <>
      <Link href={`/attraction/${id}`}>
        <h2>{name} in {location}</h2>
        <Image
          src={image}
          alt="Picture of the author"
          width={250}
          height={250}
        />
      </Link>
    </>
  )
}

export default Card
