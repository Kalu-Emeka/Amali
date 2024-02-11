import Nav from "../components/nav.jsx"
import ContactTab from '../components/contactTab.jsx'
import Footer from '../components/footer.jsx'
function Mentor () {
    return (
        <>  
            <Nav/>
            <div className="about-header hh">
                <div className="about-header-item">
                    <h2>OUR MENTORS</h2>
                </div>
            </div>
            <div className="mentor-card-item1">
                <div className="mentor-card">
                    <img src="/images/mentor-1.png" alt="" />
                    <div className="mentor-card-text">
                        <h2>Rasha Oudeh</h2>
                        <h3>Mentor</h3>
                        <p>Rasha Oudeh is a serial pharmaceutical entrepreneur where her career in the pharmaceutical and healthcare industry began in 2007. She acquired CEDEM AG in Zurich, Switzerland in 2016 and became its CEO. She founded Amali Mentoring Network in 2019 where she mentors entrepreneurs in international business skills. Ms. Oudeh is a Frankfurt School of Finance & Management EMBA graduate.</p>
                    </div>
                </div>
                <div className="mentor-card">
                    <img className="menn1" src="/images/mentor-2.png" alt="" />
                    <div className="mentor-card-text">
                        <h2>Nabila Morcos</h2>
                        <h3>Mentor</h3>
                        <p>Nabila Morcos is the founder and CEO of EN-CAPS Consult, a consulting firm specializing in HR services, Developing Performance Management Systems and providing outsourcing services to organizations throughout MENA region. She has been a mentor with Amali Mentoring Network since the start, sharing her insight over HR issues. She studied economics with an GSMP in Organizational Development Strategy from The University of Chicago, USA.</p>
                    </div>
                </div>
                <div className="mentor-card">
                    <img className="menn2" src="/images/mentor-3.png" alt="" />
                    <div className="mentor-card-text">
                        <h2>Yani Neugebauer</h2>
                        <h3>Mentor</h3>
                        <p>Yani Neugebauer is the founder of the consultancy business IHRE MARKTNISCHE in Frankfurt, Germany in 2007. She spent 15 years working in international finance institutions in Project Finance and in Investor Relations. She consults solopreneurs and start-ups over how to build knowledge-based businesses and become known and successful in their market niche. She studied Business and Administration in Munich, German</p>
                    </div>
                </div>
            </div>
            <div className="mentor-card-item2">
                <div className="mentor-card">
                    <img src="/images/mentor-4.png" alt="" />
                    <div className="mentor-card-text">
                        <h2>Dr. Sabine von Oesterreich</h2>
                        <h3>Mentor</h3>
                        <p>Sabine von Oesterreich is the founder of a company under her name, where she provides support to investors over the growth of their startups. She has been working as a consultant and coach for managers and teams in well-known organizations, including numerous DAX companies since 2007. She mentors entrepreneurs on how to eliminate losses and disruptive factors. She received her MD from Goethe University in Frankfurt, Germany.</p>
                    </div>
                </div>
                <div className="mentor-card">
                    <img className="menn1" src="/images/mentor-5.png" alt="" />
                    <div className="mentor-card-text">
                        <h2>HE Marwan Juma</h2>
                        <h3>Mentor</h3>
                        <p>Marwan Juma is the founder of “dot.jo,” a web design and online marketing house and “Kinz” for Information Technology, Jordan’s corporate data provider. He is the Vice Chairman at Oasis 500 and Jordan’s former Minister of Information and Communications Technology. He mentors entrepreneurs on startup elements and management. He holds an MS in Business Administration and Management from North Carolina State University.</p>
                    </div>
                </div>
                <div className="mentor-card">
                    <img className="menn2" src="/images/mentor-6.png" alt="" />
                    <div className="mentor-card-text">
                        <h2>Yani Neugebauer</h2>
                        <h3>Mentor</h3>
                        <p>Yani Neugebauer is the founder of the consultancy business IHRE MARKTNISCHE in Frankfurt, Germany in 2007. She spent 15 years working in international finance institutions in Project Finance and in Investor Relations. She consults solopreneurs and start-ups over how to build knowledge-based businesses and become known and successful in their market niche. She studied Business and Administration in Munich, German</p>
                    </div>
                </div>
            </div>
            <div className="mentor-card-item3">
                <div className="mentor-card">
                    <img className="menn1" src="/images/mentor-7.png" alt="" />
                    <div className="mentor-card-text">
                        <h2>Marlène Corbun</h2>
                        <h3>Mentor</h3>
                        <p>Marlene Corbun owns her art consultancy business where she is advisor in the fields of modern, post-war and contemporary fine art in Geneva, Switzerland.She mentors entrepreneurs on how to build and develop businesses, especially art collections. She holds a Master in Management from EM Lyon Business School in France and a Post-Graduate Diploma in Art History from The Courtauld Institute in London, UK.</p>
                    </div>
                </div>
            </div>
            <ContactTab />
            <Footer />
        </>
    )
}
export default Mentor