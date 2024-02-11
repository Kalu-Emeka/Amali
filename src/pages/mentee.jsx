import Nav from "../components/nav.jsx"
import ContactTab from '../components/contactTab.jsx'
import Footer from '../components/footer.jsx'
function Mentee () {
    return (
        <>  
            <Nav/>
            <div className="about-header hh">
                <div className="about-header-item">
                    <h2>OUR MENTEES</h2>
                </div>
            </div>
            <div className="mentor-card-item1">
                <div className="mentor-card">
                    <img src="/images/mentee-1.png" alt="" />
                    <div className="mentor-card-text">
                        <h2>Reem Salem Embroidery Lab</h2>
                        <h3>Owner: Reem Salem</h3>
                        <p>Reem Salem Embroidery Lab is a haven for creativity, specializing in handmade Brazilian embroidery. Enthusiasts converge to personalize clothes, accessories, and even furniture, crafting unique pieces that showcase the artistry of this intricate and vibrant embroidery technique.</p>
                    </div>
                </div>
                <div className="mentor-card">
                    <img className="menn1" src="/images/mentee-2.png" alt="" />
                    <div className="mentor-card-text">
                        <h2>Artist</h2>
                        <h3>Natasha Dahdaleh</h3>
                        <p>Natasha, a 2008 graduate of Central Saint Martin’s, communicates her passions through art and music. Her works focus on memories and objects that hold personal significance, showcasing beauty in repetition, exemplified by her recurrent use of the butterfly and Islamic art patterns.</p>
                    </div>
                </div>
                <div className="mentor-card">
                    <img className="menn2" src="/images/mentee-3.png" alt="" />
                    <div className="mentor-card-text">
                        <h2>Al-Amal Dairy Products</h2>
                        <h3>Owner: Amal Shalabi</h3>
                        <p>Al-Amal Farm is a dairy products factory committed to crafting traditional recipes in a modern approach, using fresh milk. Our range of preservative-free products ensures the finest quality, offering a delightful blend of tradition and contemporary taste.</p>
                    </div>
                </div>
            </div>
            <div className="mentor-card-item2">
                <div className="mentor-card">
                    <img src="/images/mentee-4.png" alt="" />
                    <div className="mentor-card-text">
                        <h2>Artist</h2>
                        <h3>Hala Twal</h3>
                        <p>Born in 1990 in Amman, Jordan, Hala is a sculptor and painter who earned her B.A. in fine arts/sculpting from the University of Jordan. Inspired by women, nature, and archaeology, she crafts sculptures with various materials and creates paintings and digital collage artworks, exploring the essence of women in their natural context.</p>
                    </div>
                </div>
                <div className="mentor-card">
                    <img className="menn1" src="/images/mentee-5.png" alt="" />
                    <div className="mentor-card-text">
                        <h2>Artist</h2>
                        <h3>Dina Malkawi</h3>
                        <p>Born in 1988 in Amman, Jordan, Dina Malkawi earned her Bachelor of Arts degree in Fine Arts from the University of Jordan in 2010. Specializing in oil painting and watercolor, she also explores mixed media on metal and paper. Dina’s art predominantly features human figures, capturing their essence and surroundings through vibrant colors and expressive brushstrokes.</p>
                    </div>
                </div>
                <div className="mentor-card">
                    <img className="menn2" src="/images/mentee-6.png" alt="" />
                    <div className="mentor-card-text">
                        <h2>iOffers Application</h2>
                        <h3>Owner: Samah Ahmad</h3>
                        <p>The iOffers application is a secure and free mobile application, offering customers unlimited coupons and exclusive offers on a variety of products and services. Downloadable on smartphones, it provides a user-friendly platform for both customers and vendors.</p> 
                    </div>
                </div>
            </div>
            <div className="mentor-card-item2">
                <div className="mentor-card">
                    <img src="/images/mentee-7.png" alt="" />
                    <div className="mentor-card-text">
                        <h2>Finaa Football Academy</h2>
                        <h3>Owners: Zein Twal and Soleen Zoibi</h3>
                        <p>Finaa is the pioneering Football Coaching Academy for young girls in the Middle East. It stands out for its emphasis on gender equality and empowering girls through sports, fostering a positive and inclusive environment for their athletic development and personal growth.</p>
                    </div>
                </div>
                <div className="mentor-card">
                    <img className="menn1" src="/images/mentee-8.png" alt="" />
                    <div className="mentor-card-text">
                        <h2>Artist</h2>
                        <h3>Haneen Shaheen</h3>
                        <p>Hanin, an Arts educator with 12+ years’ experience, holds a master’s in Curriculum and Instruction and a BA in Visual Arts from the University of Jordan. Fascinated by pedagogies blending visuals and critical thinking, her art journey spans 3 exhibitions, transitioning from academic to abstract, fostering emotional communication through color-layered canvases.</p>
                    </div>
                </div>
                <div className="mentor-card">
                    <img className="menn2" src="/images/mentee-9.png" alt="" />
                    <div className="mentor-card-text">
                        <h2>Artist</h2>
                        <h3>Tina Omran</h3>
                        <p>Jordanian painter Tina Omran, with a Bachelor of Arts in Visual Arts from the American University of Cairo, draws inspiration from nightmares, people, objects, landscapes, and abandoned places. Her work explores the interplay between innocence and evil through various characters, weaving intricate backstories and personal interpretations</p>
                    </div>
                </div>
            </div>
            <ContactTab />
            <Footer />
        </>
    )
}
export default Mentee