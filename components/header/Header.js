import React from 'react'
import Link from 'next/link'
import Nav from './nav'



const Header = () => (
  <header>
    <div className="cerceve">
      <div className="logo">
        <Link href="/"><a>Abdurrahman ÇAĞLAR</a></Link>
      </div>
      <Nav />
    </div>
    <style jsx>{`
      header {
        //background: rgba(255,255,255,.1);
        //box-shadow: 0 30px 10px -28px rgba(0, 0, 0, .5);
        font-weight: 500;
      }
      header a { color:rgba(255,255,255,.5);}
      header a:hover {color:rgba(255,255,255,1); text-shadow:0 0 2px rgba(0,0,0,.4);}
      header > div.cerceve {
        padding: 20px 0;
        align-items: center;
        text-align: center;
        border-bottom: 3px solid rgba(255,255,255,.1);
      }
      header > div > .logo {
        font-size: 4vw;
        margin-bottom:20px;
      }
      @media screen and (max-width:768px) {
        header > div > .logo {
          font-size: 6vw;
        }
      }
      @media screen and (min-width:1600px) {
        header > div > .logo {
          font-size: 3vw;
        }
      }
    `}</style>
  </header>
)

export default Header