import Hero from '../Components/Hero';
import MenuCategories from '../Components/MenuCategories';
import FreshFish from '../Components/FreshFish';
import MenuSection from '../Components/MenuSection';

const Home = () => {
  const menuData = {
    sandwiches: [
      { name: 'سمكة حرة', price: '4' },
      { name: 'عرموط', price: '4' },
      { name: 'فيليه', price: '4' },
      { name: 'سردين', price: '3' },
      { name: 'قريدس', price: '4' }
    ],
    plates: [
      { name: 'وجبة مشوية', description: '2 أجاج, 15 حبة قريدس, 1 عرموط', price: '10' },
      { name: 'وجبة مقلية', description: '2 أجاج, 10 حبات قريدس, 1 عرموط', price: '10' },
      { name: 'وجبة سمك مع رز', description: '3 أجاج مع رز', price: '10' },
      { name: 'وجبة قريدس 20 حبة', description: '20 حبة قريدس مقلي أو مشوي', price: '10' }
    ],
    smallplates: [
      { name: 'وجبة قريدس 10 حبات', description: '10 حبات قريدس مقلي أو مشوي مع بطاطا', price: '5' },
      { name: 'وجبة فيليه', description: '2 فيليه و5 قريدس و1 عرموط', price: '5' },
      { name: 'وجبة قريدس مع رز', description: '8 حبات قريدس مشوي مع رز', price: '5' },
      { name: 'وجبة أجاج مع رز', description: 'سمكة أجاج مع رز', price: '5' },
      { name: 'وجبة مشكل ثمار', description: 'مشكل ثمار مع ذرة', price: '5' }
    ],
    softdrinks: [
      { name: 'مشروبات غازية', description: 'بيبسي, ميرندا, سفن أب', price: '1' }
    ]
};

  return (
    <>
      <Hero />
      <MenuCategories />
      <FreshFish />
      <MenuSection id="sandwiches" title="سندويشات بحرية" items={menuData.sandwiches} />
      <MenuSection id="plates" title="وجبات رئيسية" items={menuData.plates} bgLight />
      <MenuSection id="smallplates" title="صحن صغير" items={menuData.smallplates} />
      <MenuSection id="softdrinks" title="مشروبات" items={menuData.softdrinks} bgLight />
          </>
  );

};



export default Home;