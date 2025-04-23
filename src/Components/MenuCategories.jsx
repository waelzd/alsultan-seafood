import { Link } from 'react-scroll';
import sandwichImg from '../Assets/images/sandwich1.jpg';
import plateImg from '../Assets/images/shrumps4.jpg';
import appetizerImg from '../Assets/images/circles.jpg';
import drinkImg from '../Assets/images/softdrinks.jpg';

const MenuCategories = () => {
  const categories = [
    {
      id: 'sandwiches',
      title: 'سندويشات',
      enTitle: 'Sandwiches',
      image: sandwichImg
    },
    {
      id: 'plates',
      title: 'وجبات رئيسية',
      enTitle: 'Main Plates',
      image: plateImg
    },
    {
      id: 'appetizers',
      title: 'مقبلات',
      enTitle: 'Appetizers',
      image: appetizerImg
    },
    {
      id: 'softdrinks',
      title: 'مشروبات',
      enTitle: 'Beverages',
      image: drinkImg
    }
  ];

  return (
    <section className="menu-categories py-5" id="menu">
      <div className="container">
        <h2 className="section-title text-center mb-5">قائمتنا المميزة</h2>
        <div className="row g-4">
          {categories.map((category) => (
            <div className="col-md-3 col-sm-6" key={category.id}>
              <Link 
                to={category.id} 
                smooth={true} 
                duration={500} 
                className="category-card"
              >
                <div className="card">
                  <img src={category.image} className="card-img" alt={category.title} />
                  <div className="card-overlay">
                    <h3>{category.title}</h3>
                    <p>{category.enTitle}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuCategories;