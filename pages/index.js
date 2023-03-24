import React from 'react'

// INTERNAL IMPORT
import Style from "../styles/index.module.css";
import { HeroSection, 
  Service,
  BigNFTSlider,
  Subscribe,
  Title,
  Category,
  Filter,
  NFTCard,
} from "../components/componentsindex";

const Home = () => {
  return (
    <div className={Style.homepage}> 
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Title heading='Browse by Category' paragraph='Explore NFTs in the most featured categories'/>
      <Category />
      <Title heading='Featured NFTs' paragraph='Discover the most outstanding NFTs'/>
      <Filter />
      <NFTCard />
      <Subscribe />
    </div>
  )
}

export default Home;
