import { Link } from "react-router-dom";

const Home = () => {
    return <div class="bg-img">
    <div class="bg">
        <div class="home">
            <h6 id="hi">HI THERE !</h6>
            <h2 class="title">I'M <span class="spanh">A WEB DEVELOPER</span></h2>
            <p class="homepara">I'm a Web Developer based in Shippur, Karnataka. I strives to build immersive and beautiful
                web applications through carefully crafted code and user-centric design.</p>
            <div class="buttoncon">
                <button type="button" class="button b1"><Link to="about.html" id="idb1">MORE ABOUT ME</Link></button>
                <button type="button" class="button b2">CONTACT</button>
            </div>
        </div>
    </div>;
    </div>
};

export default Home;