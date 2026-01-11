import Banner from "./components/banner";
import Cards from "./components/Cards";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      {/* header section here */}
      <Header></Header>
      
      {/* banner section here */}
      <Banner></Banner>
      
      {/* courses-cards Section */}
      <Cards></Cards>
    </div>
  );
};

export default App;