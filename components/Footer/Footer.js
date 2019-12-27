import React from 'react'
import Link from 'next/link'


const Footer = () => (
  <footer>
    <div className="cerceve">
      <Link href="/"><a>Abdurrahman ÇAĞLAR Blogu</a></Link>
    </div>
    <style jsx>{`
      footer {
        margin:0;
        //background: rgba(0,0,0,.2);
        color: #000;
      }
      footer > div.cerceve {
        padding: 30px 0 80px 0;
        //box-shadow: inset 0 20px 10px -20px rgba(0,0,0,.2);
        border-top: 3px solid rgba(255,255,255,.1);
      }
    `}</style>
  </footer>
)

export default Footer