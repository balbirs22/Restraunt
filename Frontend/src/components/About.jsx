import React from 'react';
import {Link} from 'react-router-dom';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
const About = () => {
  return (
    <section className='about' id="about">
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">About Us</h1>
                    <p>The only rhing er are serious about is delecious food</p>
                </div>
                <p className="mid">
                Welcome to Balbir's, where culinary excellence meets exceptional service. Nestled in the heart of New Delhi, our restaurant offers a delightful fusion of flavors crafted by our talented chefs. Whether you're craving classic comfort food or daring to explore new gastronomic adventures, our diverse menu promises a memorable dining experience for every palate. 
                </p>
                <Link to={"/"}>Explore Menu <span>
                    <HiOutlineArrowNarrowRight />
                    </span>
                </Link>
            </div>
            <div className="banner">
                <img src="/about.png" alt="about" />
            </div>
        </div>
    </section>
  )
}

export default About