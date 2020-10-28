import React, {useState} from 'react';
import { Link } from 'react-scroll';
import './navigation.scss';
import './index.scss';

const Home = () => {
    const [selectedMenuId] = useState(0);
    const [showMobileMenu, setMobileMenuState] = useState(false);

    const navigationMenus = [
        { id: 0, name: 'home'},
        { id: 1, name: 'about'},
        { id: 2, name: 'skills'},
        { id: 3, name: 'work'},
        { id: 4, name: 'contact'}
    ];

    function onMenuClick() {
        if(window.innerWidth < 769) {
            setMobileMenuState(!showMobileMenu)
        }
    }

    return (
        <div className="home-page" id="home">
            <div className="navigation-bar">
                <div className="name"> 
                    {"<Prajakta />"}
                </div>
                <div className="links">
                    {
                        navigationMenus.map(({ id, name }, index) => {
                            return (
                                <div key={index}>
                                    <Link to={name}
                                        className={selectedMenuId === index 
                                            ? "active-link" : "link"}
                                        onClick = {_ => onMenuClick(id)}>
                                        {name} 
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="hamburger-menu" 
                    onClick={_ => setMobileMenuState(!showMobileMenu)}>
                    <div />
                    <div />
                    <div />
                </div>
            </div>
            {
                showMobileMenu ? (
                    <div className="mobile-menu">
                        {
                            navigationMenus.map(({ id, name }, index) => {
                                return (
                                    <div>
                                        <Link to={name}
                                            className={selectedMenuId === index 
                                                ? "active-link" : "link"}
                                            onClick = {_ => onMenuClick()}>
                                            {name} 
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div> 
                ) : null
            }
            <div className="home-content">
                <div className="title">
                    I'm a Software Developer 
                </div>
                <div className="sub-title">
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy 
                    text used in laying out print, graphic or web designs. The
                    passage is attributed to an unknown typesetter in the 15th.
                </div>
                <Link to="contact">
                    <button 
                        type="button"
                        className="btn-contact"> 
                        Contact me 
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Home;