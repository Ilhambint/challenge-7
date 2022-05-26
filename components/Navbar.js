import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
    <div className="styles.navbar">
        <div className="styles.heading">Challenge-7</div>
        <div>
            <ul className="styles.menu">
                <li className="styles.link"><Link href="/">Home</Link></li>
                <li className="styles.link"><Link href="/input">Input</Link></li>
                <li className="styles.link"><Link href="/chart">Chart</Link></li>
                <li className="styles.link"><Link href="/download">Download</Link></li>
            </ul>
        </div>
    </div>
</div>
  )
}
