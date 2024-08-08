import React from 'react'
import './footer.css'
import Link from 'next/link'

function footer() {
  return (
    <ul className="lastpartofhp">
        <li><Link href="./help">Help</Link></li>
        <li><Link href="./about">About</Link></li>
        <li><p>© copyright 2024</p></li>
    </ul>
  )
}

export default footer