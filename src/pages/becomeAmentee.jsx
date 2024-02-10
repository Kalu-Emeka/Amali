import Nav from "../components/nav.jsx"
import Footer from '../components/footer.jsx'
import ContactTab from '../components/contactTab.jsx'
function BecomeAmentee () {
    return (
        <>
            <Nav />
            <div className="becomeAmentor">
                <div className="amentor item">
                    <h2>BECOME A MENTEE</h2>
                </div>
            </div>
            <div className="become-text">
                <p>Do you see yourself taking interest in helping another individual develop into a successful professional? Do you see yourself offering continuous guidance and support? Do you see yourself capable of forming a personal, as well as a professional relationship with a mentee?</p>
                <p>Do you have what it takes to fulfill the significant responsibilities of mentorship? Are you accessible with your time? Can you guide, provide insight, offer advice, motivate, and be a positive influence?</p>
                <p>Good mentors are able to share life experiences and wisdom, as well as technical expertise.</p> 
            </div>
            <div className="get-involve">
                <h2>Get Invovled</h2>
                <p>The Amali Mentorship Network is open to professionals with a minimum of seven years of experience in the workforce. If you are interested and have what it takes to be a good mentor, join our mentoring community.</p>
                <button><a href="/menteeForm">APPLY NOW</a></button>
            </div>
            <div className="qualities-mentee">
                <div className="mentee1">
                    <h2>Qualities of a Good Mentee</h2>
                    <p>Before taking on a mentor to guide you, make sure you are ready, receptive and open to learn and be guided on your mentorship journey.</p>
                </div>
                <div className="mentee2">
                   <p>Before taking on a mentor to guide you, make sure you are ready, receptive and open to learn and be guided on your mentorship journey.</p>    
                    <p><li>Are you open to hearing the truth?</li></p>
                    <p><li>Are you ready to be challenged?</li></p>
                    <p><li>Are you ready to be guided and inspired?</li></p>
                    <p><li>Are you ready to develop a new set of skills?</li></p>
                </div>
                <div className="mentee3">
                    <img src="/images/mentor_about_1.png" alt="" />
                </div>
            </div>
            <div className="qualities1 qua1">
                <div className="qualities-text">
                    <h2>Rewarding Benefits</h2>
                    <p>Enlarge your network and gain connections </p>
                    <p>Save time and money</p>
                    <p>Build long-term reliable relationship</p>
                    <p>Gain experience not shared in books</p>
                    <p>Develop stronger IQ</p>
                </div>
                <img src="/images/mentor_about_2.png" alt="" />
            </div>
            <ContactTab />
            <Footer />
        </>
    )
}
export default BecomeAmentee