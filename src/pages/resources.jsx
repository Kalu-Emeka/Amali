import Nav from "../components/nav.jsx"
import Footer from '../components/footer.jsx'
import ContactTab from '../components/contactTab.jsx'
function Resources() {
  return (
    <>
        <Nav />
        <div className="contact-header">
            <div className="contact-header-item">
                <h2>Resources</h2>
            </div>
        </div>
        <div className="presskit">
            <h2>Press Kit</h2>
            <div className="presskit-item">
                <img src="/images/et_document.png" alt="" />
                <div className="presskit-text">
                    <p>Rasha Oudeh Press Kit English Version</p>
                    <button>Download now</button>
                </div>
            </div>
            <div className="presskit-item">
                <img src="/images/et_document.png" alt="" />
                <div className="presskit-text">
                    <p>Rasha Oudeh Press Kit German Version</p>
                    <button>Download now</button>
                </div>
            </div>
            <div className="presskit-item">
                <img src="/images/et_document.png" alt="" />
                <div className="presskit-text">
                    <p>Amali's Impact Report</p>
                    <button>Download now</button>
                </div>
            </div>
            <div className="presskit-item">
                <img src="/images/et_document.png" alt="" />
                <div className="presskit-text">
                    <p>Rasha Oudeh's Picture</p>
                    <button>Download now</button>
                </div>
            </div> 
        </div>
        <div className="media">
            <h1>MEDIA</h1>
            <div className="resources">
                <div className="resources1">
                    <img src="/images/imd.png" alt="" />
                    <div className="resources-text">
                        <h2>Going above board: IMD Business School’s Interview with Rasha Oudeh</h2>
                        <h3>Media, News  December 14, 2023</h3>
                        <p>We are pleased to share that in Rasha’s interview with Caroline Copley from IMD, in Lausanne they delved into the primary challenges she has encountered. Specifically, they explored the hurdles of achieving effective board governance in SME business as an Arab female entrepreneur, thanks to Professor Didier Cossin. She dealt with some company investors who…</p>
                    </div>
                </div>
                <div className="resources1">
                    <img src="/images/sicht.png" alt="" />
                    <div className="resources-text">
                        <h2>Going above board: IMD Business School’s Interview with Rasha Oudeh</h2>
                        <h3>Media, News  December 14, 2023</h3>
                        <p>We are pleased to share that in Rasha’s interview with Caroline Copley from IMD, in Lausanne they delved into the primary challenges she has encountered. Specifically, they explored the hurdles of achieving effective board governance in SME business as an Arab female entrepreneur, thanks to Professor Didier Cossin. She dealt with some company investors who…</p>
                    </div>
                </div>
                <img className="bus" src="/images/business.png" alt="" />
            </div>
        </div>
        <div className="newss">
            <h1>NEWS</h1>
            <div className="news-item">
                <div className="news-item1">
                    <img src="/images/resource-2.png" alt="" />
                    <div className="resources-text">
                        <h2>UBS panel event “Successfully Leading Through Change”</h2>
                        <h3>December 20, 2023</h3>
                        <p>We are excited to share Rasha Oudeh’s recent participation at the UBS panel event “Successfully Leading Through Change”. As a</p>
                        <a href="#">Continue Reading</a>
                    </div>
                </div>
                <div className="news-item1">
                    <img src="/images/news-img.png" alt="" />
                    <div className="resources-text">
                        <h2>You shouldn’t stay in traditional models: Interview in Business Class Magazine Zurich</h2>
                        <h3>December 17, 2023</h3>
                        <p>CEDEM Switzerland, a leading Swiss Nutraceutical company, takes a strategic leap into crowdinvesting for its global expansion. CEO Rasha Oudeh</p>
                        <a href="#">Continue Reading</a>
                    </div>
                </div>
                <img className="web" src="/images/webinar.png" alt="" />
            </div>
        </div>
        <ContactTab />
        <Footer />
    </>
  )  
}
export default Resources