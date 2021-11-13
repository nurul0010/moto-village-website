import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import ResponsiveNavigation from '../../Shared/ResponsiveNevigation/ResponsiveNavigation';
import BikeInfo from '../BikeInfo/BikeInfo';
import ImageSlider from '../ImageSlider/ImageSlider';
import InfoSection from '../InfoSection/InfoSection';
import PartsInfo from '../PartsInfo/PartsInfo';
import PopularBikes from '../PopularBikes/PopularBikes';
import Bikes from '../Products/Bikes/Bikes';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <ResponsiveNavigation></ResponsiveNavigation>
            <ImageSlider></ImageSlider>
            <Bikes></Bikes>
            <InfoSection></InfoSection>
            <BikeInfo></BikeInfo>
            <PartsInfo></PartsInfo>
            <Review></Review>
            <PopularBikes></PopularBikes>
            <Footer></Footer>
        </div>
    );
};

export default Home;