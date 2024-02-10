import Nav from "../components/nav.jsx"
import Footer from '../components/footer.jsx'
import ContactTab from '../components/contactTab.jsx'
function BecomeAmentor () {
    return (
        <>
            <Nav />
            <div className="becomeAmentor">
                <div className="amentor item">
                    <h2>BECOME A MENTOR</h2>
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
                <button><a href="/mentorForm">APPLY NOW</a></button>
            </div>
            <div className="qua11">
                <div className="qualities-text">
                    <h2>Qualities of a Good Mentor</h2>
                    <p>Before embarking on the mentorship journey, a few things need to be understood about what makes a good mentor and what is expected of them before assuming this rewarding role. Do you share the qualities and skills of good mentors? </p>
                    <p className="p-text"><li>Do you have a respectful attitude?</li></p>
                    <p><li>Can you practice understanding?</li></p>
                    <p><li>Do you have the ability to give honest and direct feedback?</li></p>
                    <p><li>Can you demonstrate empathy?</li></p>
                    <p><li>Are you a good listener?</li></p>
                    <p><li>Are you a good observer?</li></p>
                    <p><li>Are you a good problem-solver?</li></p>
                    <p><li>Do you have enthusiasm to share your expertise?</li></p>
                    <p><li>Do you have the knowledge and expertise to mentor? </li></p>
                    <p><li>Are you available with your time to commit for at least a year? </li></p>
                    <p><li>Are you willing to complete a feedback form at the end of one year? </li></p>
                </div>
                <img src="/images/mentor_about_1.png" alt="" />
            </div>
            <div className="qualities1 qua1">
                <div className="qualities-text">
                    <h2>Rewarding Benefits</h2>
                    <p><li>Gain personal growth and satisfaction from giving back</li></p>
                    <p><li>Improve leadership and communication skills</li></p>
                    <p><li>Enrich personal understanding of various cultures</li></p>
                    <p><li>Enhance professional relationships</li></p>
                    <p><li>Become part of a community of like-minded people</li></p>
                </div>
                <img src="/images/mentor_about_2.png" alt="" />
            </div>
            <ContactTab />
            <Footer />
        </>
    )
}
export default BecomeAmentor