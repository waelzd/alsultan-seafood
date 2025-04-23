import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="hero-content">
      
        <h1>السلطان للمأكولات البحرية</h1>
        <p className="lead">من البحر مباشرة إلى طاولتك!</p>
        <Link 
          to="menu" 
          smooth={true} 
          duration={500} 
          className="btn btn-primary btn-lg"
        >
          استعرض قائمتنا
        </Link>
        </div>
 
    </section>
  );
};

export default Hero;