const MenuSection = ({ id, title, items, bgLight = false }) => {
    return (
      <section 
        className={`menu-section py-5 ${bgLight ? 'bg-light' : ''}`} 
        id={id}
      >
        <div className="container">
          <h2 className="section-title text-center mb-5">{title}</h2>
          <div className="row g-4">
            {items.map((item, index) => (
              <div 
                className={id === 'plates' ? 'col-md-6' : 'col-md-4 col-sm-6'} 
                key={index}
              >
                <div className="menu-item">
                  <h3>{item.name}</h3>
                  {item.description && <p className="description">{item.description}</p>}
                  <p className="price">{item.price} $</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default MenuSection;