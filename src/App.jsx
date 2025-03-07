import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="header" id="header">
        <nav className = "nav container"> 
            <a herf = "#" className = "nav__logo">
                <div>
                    <img src = "img/logo-burger.svg" alt = "image"/>
                </div>

                McDonalds

            </a>

            <div className = "nav__menu" id = "nav-menu">
                <ul className="nav__list">
                    <li>
                        <a href="#home" className="nav__link">Home</a>
                    </li>

                    <li>
                        <a href="#recipe" className="nav__link">Recipe</a>
                    </li>

                    <li>
                        <a href="#popular" className="nav__link">Popular</a>
                    </li>

                    <li>
                        <a href="#delivery" className="nav__link">Delivery</a>
                    </li>

                    <li>
                        <a href="#contact" className="nav__link">Contact</a>
                    </li>
                </ul>
                
                <div className="nav__close" id="nav-close">
                 <i className="ri-close-large-line"></i>
                </div>
            </div>
           
            <div className="nav__toggle" id="nav-toggle">
                <i className="ri-apps-2-fill"></i>
            </div>
         </nav> 
      </header>

      <main className="main">
         
         <section className="home section" id="home">
            <div className = "home container container grid">
                <div className = "home__data">
                    <h1 className = "home__title">I'm Lovin' It!</h1>
                    <p className = "home__description">
                        We serve the best burgers on the planet, 
                        you deserve a break today, come enjoy 
                        McDonalds.
                    </p>
                    <a href="#popular" className="button">Bite Now</a>

                    <img src="img/sticker-potatoes.svg" alt="image" className="home__sticker"/>
                </div>
                <div className="home__images">
                    <img src="img/home-burger.png" alt="image" className="home__burger"/>
                    <img src="img/home-dish.png" alt="image" className="home__dish"/>
                    <img src="img/home-potato.png" alt="image" className="home__ingredient home__potato-1"/>
                    <img src="img/home-potato.png" alt="image" className="home__ingredient home__potato-2"/>
                    <img src="img/home-tomato.png" alt="image" className="home__ingredient home__tomato-1"/>
                    <img src="img/home-tomato.png" alt="image" className="home__ingredient home__tomato-2"/>
                    <img src="img/home-lettuce.png" alt="image" className="home__ingredient home__lettuce-1"/>
                    <img src="img/home-lettuce.png" alt="image" className="home__ingredient home__lettuce-2"/>

                </div>
            </div>
         </section>
        </main>
    </>
  )
}

export default App
