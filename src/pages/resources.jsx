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
            <h2>MEDIA</h2>
            <img src="/images/Frame 630561.png" alt="" />
        </div>
        <div className="newss">
            <h2>NEWS</h2>
            <img src="/images/Frame 630564.png" alt="" />
        </div>
        <ContactTab />
        <Footer />
    </>
  )  
}
export default Resources