import Hero from '../Components/Hero';
import MenuCategories from '../Components/MenuCategories';
import FreshFish from '../Components/FreshFish';
import MenuSection from '../Components/MenuSection';

const Home = () => {
  const menuData = {
    sandwiches: [
      { name: 'سمكة حرة', description: 'فيليه مشوي - ثوم كريم - خبز محمص - حامض', price: '400,000' },
      { name: 'عرموط', description: 'عرموط مقلي - صوص ترتار - خس - خبز محمص', price: '400,000' },
      { name: 'فيليه مقرمش', description: 'فيليه طازج - خس - صوص ترتار - حامض', price: '400,000' },
      { name: 'بزرة', description: 'ساردين مقلي - خس - طراطور - حامض', price: '300,000' },
      { name: 'قريدس مقرمش', description: 'صوص ترتار أو كوكتيل - خس - خبز محمص', price: '450,000' },
      { name: 'قريدس بروفنسال', description: 'قريدس متبل بالكزبرة والثوم - ثوم كريم - حامض', price: '450,000' },
      { name: 'كراب', description: 'كراب (مصنع,حلال) - صوص ترتار - صوص كوكتيل - كبيس', price: '300,000' },
      { name: 'كالاماري', description: 'صوص ترتار أو كوكتيل - خس - خبز محمص', price: '350,000' },
      { name: 'برغر سمك', description: 'فيليه طازج مقرمش - صوص كوكتيل - خس - بطاطا', price: '400,000' },
      { name: 'بطاطا', description: 'بطاطا مقلية - سلطة مايونيز - كبيس - ثوم', price: '200,000' }
    ],
    plates: [
      { name: 'وجبة فيليه', description: 'فيليه مقلي - صوص - خضرة - بطاطا مقلية مقرمشة', price: '600,000' },
      { name: 'وجبة قريدس مقرمش', description: '12 قطعة قريدس مقلي - صوص - بطاطا - خبز', price: '850,000' },
      { name: 'وجبة قريدس مشوي', description: '12 قطعة قريدس - صوص - خبز - بطاطا - خضرة', price: '850,000' },
      { name: 'صحن سمكة حرة', description: 'فيليه طازج مشوي - ثوم كريم', price: '600,000' },
      { name: 'صحن قريدس بروفنسال', description: '12 قطعة قريدس متبل بالكزبرة والثوم - ثوم كريم', price: '650,000' },
      { name: 'وجبة مشاوي بحرية', description: 'مختار من المشويات البحرية - صوص - خضار مشوي', price: '900,000' },
      { name: 'طبق سمك مشوي', description: 'سمك طازج مشوي - صلصة ليمون - خضار مشوي', price: '750,000' }
    ],
    appetizers: [
      { name: 'صحن فتوش', price: '200,000' },
      { name: 'سلطة روكا', price: '150,000' },
      { name: 'علبة بطاطا', price: '150,000' },
      { name: 'صحن بطاطا', price: '250,000' },
      { name: 'صحن حمص متبل', price: '150,000' },
      { name: 'صحن بابا غنوج', price: '150,000' },
      { name: 'صحن بطاطا حرة', price: '150,000' },
      { name: 'سلطة سيزر', price: '200,000' },
      { name: 'تبولة', price: '180,000' }
    ],
    softdrinks: [
      { name: 'بيبسي', price: '60,000' },
      { name: 'سفن أب', price: '60,000' },
      { name: 'ميراندا', price: '60,000' },
      { name: 'مياه معدنية', price: '30,000' }
    ],
    specials: [
      { name: 'وجبة العائلة', description: 'مختار من المشويات والمقليات - خضار - بطاطا - صوص', price: '1,200,000' },
      { name: 'طبق بحري مشكل', description: 'مختار من المأكولات البحرية - خضار - صوص', price: '1,500,000' },
      { name: 'سفرة السلطان', description: 'تشكيلة كاملة من المأكولات البحرية - مقبلات - مشروبات', price: '2,000,000' }
    ]
};

  return (
    <>
      <Hero />
      <MenuCategories />
      <FreshFish />
      <MenuSection id="sandwiches" title="سندويشات بحرية" items={menuData.sandwiches} />
      <MenuSection id="plates" title="وجبات رئيسية" items={menuData.plates} bgLight />
      <MenuSection id="appetizers" title="المقبلات" items={menuData.appetizers} />
      <MenuSection id="softdrinks" title="المشروبات" items={menuData.softdrinks} bgLight />
      <MenuSection id="specials" title="الوجبات الخاصة" items={menuData.specials} />
          </>
  );

};



export default Home;