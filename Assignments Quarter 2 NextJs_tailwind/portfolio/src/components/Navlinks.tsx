import Link from 'next/link'
import React from 'react'

export default function Navlinks({href , title}: {href: string; title: string}) {
  return (
    <div><Link href={href}>{title}</Link></div>
  )
}
