import React from 'react'
import Link from 'next/link'

const Button = ({ text, type }) => {
  return (
    <Link className={type} href={'/newAttraction'}>{text}</Link>
  )
}

export default Button
