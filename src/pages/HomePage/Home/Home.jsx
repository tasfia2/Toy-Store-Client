import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Gallery from "../Gallery/Gallery";
import PopularToysSection from "../PopularToysSection/PopularToysSection";
import Slider from "../Slider/Slider";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Gallery></Gallery>
            <Category></Category>
            <PopularToysSection></PopularToysSection>
            <Banner></Banner>
        </div>
    );
};

export default Home;