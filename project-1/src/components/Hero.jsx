const Hero = () => {
    return (
        <main className="hero container">
            <div className="hero-content">
                <h1> YOUR FEET DESERVE THE BEST</h1>
                <p>
                    your feet deserve the best and we're here to help with our shoes. your feet deserve the best and we are here to help you with our shoes 

                </p>
                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Categories</button>

                </div>
                <div className="shopping">
                    <p>Also available on </p>

                    <div className="brand-icons">
                        <img src="./images/amazon.png" alt="amazon-logo" />
                        <img src="./images/flipcart.png" alt="flipcart-logo" />
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="/images/hero_image.png" alt="hero-image" />

            </div>
            
            
        </main>

    );

};

export default Hero;