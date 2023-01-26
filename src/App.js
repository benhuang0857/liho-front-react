import React from 'react';
import NavbarComponent from './Components/NavbarComponent';
import HeroComponent from './Components/HeroComponent';
import HeadlineCardsComponent from './Components/HeadlineCardsComponent';
import FoodComponent from './Components/FoodComponent';
import FooterComponent from './Components/FooterComponent';

function App() {
    return (
        <div>
            <NavbarComponent />
            <HeroComponent />
            <HeadlineCardsComponent />
            <FoodComponent/>
            <FooterComponent/>
        </div>
    );
}

export default App;
