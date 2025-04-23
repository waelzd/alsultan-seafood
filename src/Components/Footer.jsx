import { FaMapMarkerAlt, FaPhone, FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer py-4" id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>معلومات التواصل</h3>
            <p><FaMapMarkerAlt className="icon"/> الجناح - نزلة السلطان ابراهيم</p>
            <p><FaPhone className="icon"/> 71/246411 - 70/833448</p>
          </div>
          <div className="col-md-4 text-center">
            <h3 className="workshift">مواعيد العمل</h3>
            <p>يومياً من 10 صباحاً حتى 10 مساءاً</p>
          </div>
          <div className="col-md-4 text-end">
            <h3>تابعنا</h3>
            <div className="social-links">
              <a href="#" className="facebook"><FaFacebookF /></a>
              <a href="https://www.instagram.com/alsultan_seafood" className="instagram"><FaInstagram /></a>
              <a href="https://wa.me/71246411" className="whatsapp"><FaWhatsapp /></a>
            </div>
          </div>
        </div>
        <div className="copyright text-center mt-4">
          <p>مطعم السلطان للمأكولات البحرية &copy; {new Date().getFullYear()} جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;