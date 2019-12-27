import React from 'react'
import Link from 'next/link'

const links = [
  { href: '/', label: 'Anasayfa', title: 'Giriş Sayfası', target:'' },
  { href: '/hakkimda', label: 'Hakkımda', title: 'Hakkımda Bilgi Sayfası', target:'' },
  { href: 'http://acaglar.com', label: 'İletişim', title: 'İletişim Sayfası', target:'_blank' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  
    <nav>
      <ul>
        {links.map(({ key, href, label, title, target }) => (
          <li key={key}><Link href={href} prefetch={false}><a target={target} title={title}>{label}</a></Link></li>
        ))}
      </ul>

      <style jsx>{`
        nav > ul {list-style: none; padding:0; margin:0;}
        nav > ul > li {display: inline-block;}
        nav > ul > li > a { color:rgba(255,255,255,.7); font-size: 18px; padding: 10px 10px; display: block;}
        nav > ul > li > a:hover {color: rgba(255,255,255,1); text-shadow:0 0 2px rgba(0,0,0,.4);}
      `}</style>
    </nav>
)

export default Nav
