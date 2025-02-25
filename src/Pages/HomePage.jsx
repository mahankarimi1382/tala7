import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NewsFeed from "../NewsFeed.jsx"
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WoodHeader from "../WoodHeader.jsx"
import MyHeader from "../Components/MyHeader.jsx"
import CardWithAnimation from "../Components/CardWithAnimation.jsx"
import UpCard from "../Components/Upcard.jsx"
import DownCard from "../Components/Downcard.jsx"
import GoldenRing from "../assets/img/ring.png"
import ImageCarousel from "../ImageCarousel.jsx"
// import MyCarousel from "../src/Components/MyCarousel.jsx"
import UpCardCarousel from '../UpCardCarousel.jsx'
import Pishnahad from '../Pishnahad.jsx'
import NewPishnahad from '../NewPishnahad.jsx'
import AnimatedCard from "../Animatedcard.jsx"
import HamburgerBar from '../Components/HamburgerBar.jsx'
import MyFooter from '../MyFooter.jsx'
import MenuComponent from '../Components/BadalJewel.jsx'
import ScrollToTopButton from '../Components/ScrollToTopButton.jsx'
import SimpleNewsFeed from '../SimpleNewsFeed.jsx'
import WrittenFooter from '../WrittenFooter.jsx'
import AnotherPage from './AnotherPage.jsx'
import SimpleImagesCarousel from '../SimpleImagesCarousel.jsx';
import Sidebar from '../Sidebar.jsx';
import GoldCurrencyTable from '../GoldCurrencyTable.jsx';





function HomePage() {
  return (
    <div>
        <NewsFeed/>
<hr />
<SimpleNewsFeed/>
<hr />
<WoodHeader/>
<hr />
<MyHeader/>
<hr />
<HamburgerBar/>
<hr />
<GoldCurrencyTable/>
<Sidebar/>
{/* <br /><br /><br /><br /><br /><br /> */}
{/* <AnimatedCard/> */}
{/* <br /><br /><br /><br /><br /><br /><br /> */}
{/* <UpCard IMGAddress = {GoldenRing}/> */}
{/* <br /><br /><br /><br /><br /><br />
<hr /> */}
{/* <UpCardCarouselManager/> */}

<UpCardCarousel/>
{/* <CardWithAnimation/> */}
<br /><br />
<ImageCarousel/>
<br />
<hr />
{/* <Pishnahad/> */}
<hr />
<NewPishnahad/>
<br /><br /><br />
<MenuComponent/>
<br /><br /><br /><br /><br />
<DownCard/>
<br />
<hr />
<br /><br />
<SimpleImagesCarousel/>
<ScrollToTopButton/>
<br /><br /><br />

<WrittenFooter/>

<MyFooter/>
    </div>
  )
}

export default HomePage