import fish1 from '../Assets/images/fish1.jpg';
import fish5 from '../Assets/images/fish5.jpg';

const FreshFish = () => {
  return (
    <section className="fresh-fish py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="section-title">سمك مقلي طازج</h2>
            <p className="lead">
              نقدم لكم أطيب أنواع السمك الطازج المقلي بزيت نباتي نظيف، مع خيارات متعددة من الصلصات اللذيذة.
            </p>
            <p className="price-note">* السعر حسب نوع السمك والسوق اليومي</p>
          </div>
          <div className="col-md-6">
            <div className="fish-images">
              <img src={fish1} alt="سمك مقلي" className="fish-img" />
              <img src={fish5} alt="سمك مشوي" className="fish-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreshFish;