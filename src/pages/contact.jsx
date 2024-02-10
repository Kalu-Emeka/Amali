import Nav from "../components/nav.jsx"
import Footer from '../components/footer.jsx'
import ContactTab from '../components/contactTab.jsx'
function Contact() {
    return (
        <>
            <Nav />
            <div className="contact-header">
                <div className="contact-header-item">
                    <h2>CONTACT US</h2>
                </div>
            </div>
            <section id="contact">
                <div className="networking">
                    <div className="networking-text">
                        <h2>Amail Mentorship Network</h2>
                        <p>Explore the world of giving and receiving of wisdom through the building of relationships and connections</p>
                    </div>
                    <div className="network-text">
                        <div className="network-info">
                            <div className="info1">
                                <img src="/images/Vector.png" alt="" />
                                <p>Oetenbachgasse 158001 Zurich, Switzerland</p>
                            </div>
                            <div className="info1">
                                <img src="/images/Vector(1).png" alt="" />
                                <p>Mobile: +41786133889</p>
                            </div>
                            <div className="info1">
                                <img src="/images/Vector(3).png" alt="" />
                                <p>info@amaliprogram.com</p>
                            </div>
                        </div>
                        <div className="network-img">
                            <img src="/images/phone 1.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <ContactTab />
            <Footer />
        </>
    )
}
export default Contact