import React from 'react';
import Link from 'next/link';

//INTERNAL IMPORT
import Style from './Discover.module.css';

// ---- DISCOVER NAVIGATION MENU
const discover = [
  {
    name: "Collection",
    link: "collection"
  },

  {
    name: "Search",
    link: "search"
  },

  {
    name: "Author Profile",
    link: "author-profile"
  },

   {
    name: "NFT Details",
    link: "NFT-Details"
  },

   {
    name: "Account Settings",
    link: "account-settings"
  },

   {
    name: "Connect Wallet",
    link: "connect-wallet"
  },

   {
    name: "Blog",
    link: "blog"
  },
]

const Discover = () => {
  return (
    <div>
      {
        discover.map((el, i)=> (
          <div key={i + 1} className={Style.discover}>
            <Link href={{pathname: '${el.link}'}}> {el.name} </Link>
          </div>
        ))
      }
    </div>
  )
}

export default Discover
