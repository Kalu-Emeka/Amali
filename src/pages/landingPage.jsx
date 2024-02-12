import Nav from "../components/nav.jsx"
import Footer from '../components/footer.jsx'
import ContactTab from '../components/contactTab.jsx'

function Landingpage () {
    return (
        <>
            <Nav/>
            <div className="header text-white">
                <div className="header-item">
                    <div className="header-subtext py-20">
                        <h2>Welcome to Amali</h2>
                        <p>In the Amali mentoring program, we forge connections between individuals seeking guidance (mentees) and experienced mentors.</p>
                        <div className="btn">
                            <button className="btn1"><a href="/becomeAmentor">Become a mentor</a></button>
                            <button className="btn2"><a href="/becomeAmentee">Become a mentee</a></button>
                        </div>
                        <div className="num-logo flex ">
                            <img className="w-20" src="/images/Group 3.svg" alt="" />
                            <span><span className="num">1,726</span>mentees use Amali daily</span>
                        </div>
                    </div> 
                    <div className="collections">
                        <img className="figs" src="/images/Frame 630451.png" alt=""/>
                    </div>
                    <div className="ban">
                        <img className="banner" src="/images/banner.png" alt="" />
                    </div>
                </div>
            </div>
            <section id="about">
                <div className="about">
                    <img className="about-im" src="/images/Group 625541.png" alt="" />
                    <div className="items">
                        <div className="about-subitem flex">
                            <div className="about-item1">
                                <p>Founded in 2020 by Rasha Oudeh, a businesswoman from Jordan, the Amali Program stands as a philanthropic mentoring venture. Reflecting on her own entrepreneurial journey, Oudeh identifies the importance of accessing mentors earlier in life as a pivotal factor she would change. The term “Amali,” derived from the Arabic word “amal,” translating to hope, defines the program’s essence. Its purpose is to provide support to women entrepreneurs hailing from diverse countries. The primary objective is to steer them through the essential steps leading to successful self-employment. This empowerment aims to enable these entrepreneurs to understand the fundamentals of doing business while enhancing their livelihoods. Ultimately, the initiative contributes to the well-being of families, the prosperity of communities, and the overall growth of economies. </p>
                            </div>
                            <div className="about-item">
                                <img src="/images/landing-about-img.png" alt="" />
                            </div>
                        </div>
                        <div className="about-sub-heading">
                            <div className="subheading1">
                                <img src="/images/detail-image-1.png" alt=""/>
                                <h2>TAILORED GUIDANCE</h2>
                                <p>Captured in the heartwarming photo above is the joy emanating from the first group of accomplished participants in the Amali Project. Originating from diverse backgrounds, these women, many from underprivileged areas, came together through our thoughtfully curated mentorship program. Our carefully selected mentees embark on a transformative journey guided by Rasha Oudeh herself. Through personalized 1:1 session, Rasha imparts her wealth of experience, ensuring that each mentoring relationship is uniquely tailored to the start-up needs of the mentee. Additionally, we enhance the learning experience by inviting expert speakers to address the entire group on specific business topics. </p>
                            </div>
                            <div className="subheading1">
                                <img src="/images/detail-image-2.png" alt=""/>
                                <h2>COMPREHENSIVE BUSINESS INSIGHTS</h2>
                                <p>Rasha covers the fundamental aspects crucial for business success and acceleration. From Business Storytelling, Finances & Budgeting, Branding, Marketing, and social media to Communication Strategy, Team Building, Legal Aspects, Pitch Training, Fundraising, and Self-Management, our program provides a holistic understanding of the business landscape. </p>
                            </div>
                            <div className="subheading1">
                                <img src="/images/detail-image-3.png" alt=""/>
                                <h2>CONNECTING DREAMS</h2>
                                <p>In the Amali mentoring program, we forge connections between individuals seeking guidance (mentees) and experienced mentors. These mentors generously share their knowledge and insights, empowering mentees to navigate challenges and make informed decisions on their path to success. Together, we create a supportive community fostering growth, resilience, and achievement.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div id="mentor" className="testimonials">
                    <div className="testimonials-video">
                        <img src="images/Frame 630395.png" alt="" />
                    </div>
                    <div className="mentors">
                        <div id="mentees" className="testm-subtext">
                        <img src="images/Group 35.png" alt="" id="test"/>
                        <div className="mentts">
                            <div className="mente1">
                                <img src="images/testimonials-img-1.png" alt=""/>
                                <div className="ment1-text">
                                    <h2>Finaa Football Academy</h2>
                                    <h3>Owners: Zein Twal and Soleen Zoibi</h3>
                                    <p>I am incredibly grateful for my experience in the Amali Program. My mentor provided invaluable guidance, helping me navigate the complexities of my career path. Through their mentorship, I gained a deeper understanding of my strengths and weaknesses, developed crucial professional skills, and ultimately advanced in my chosen field. The Amali Program has been a transformative journey, and I owe a significant part of my success to the dedicated mentorship I received. </p>
                                    <hr className="hrrr" />
                                </div>
                            </div>
                            <div className="mente1" id="mentt1">
                                <img src="/images/testimonials-img-2.png" alt=""/>
                                <div className="ment1-text">
                                    <h2>iOffers Application</h2>
                                    <h3>Owners: Samah Ahmad</h3>
                                    <p>The Amali Program exceeded my expectations in every way. My mentor not only shared their wealth of knowledge but also invested time in understanding my goals and aspirations. The personalized guidance I received was instrumental in shaping my career trajectory.</p>
                                    <hr className="hrrr" />
                                </div>
                            </div>
                            <div className="mente1" id="mentt2">
                                <img src="/images/testimonials-img-3.png" alt="" />
                                <div className="ment1-text" id="mente-text">
                                    <h2>Al-Amal Dairy Products</h2>
                                    <h3>Owners: Amal Shalabi </h3>
                                    <p>As a participant in the Amali Program, I had the privilege of being mentored by an exceptional individual. Their expertise, combined with a genuine interest in my development, created a mentorship experience that was both enriching and empowering. From honing my leadership skills to expanding my professional network, the mentorship provided a holistic approach to my growth.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            <section id="resources">
                <div className="news">
                    <div className="subtext">
                        <img src="/images/Line 7.png" alt="" />
                        <h1>Our News</h1>
                    </div>
                    <div className="news-text">
                        <img src="/images/business.png" alt="" />
                        <div className="news-text2">
                            <p> You shouldn’t stay in traditional models: Interview in Business Class Magazine Zurich </p>
                            <p>December, 17, 2023 </p>
                            <p>CEDEM Switzerland, a leading Swiss Nutraceutical company, takes a strategic leap into crowdinvesting for its global expansion. CEO Rasha Oudeh </p>
                            <a href="https://amaliprogram.com/news/" target="_blank">Continue Reading</a>
                        </div>
                    </div> 
                    <button>CLICK FOR MORE</button>
                </div>
            </section>
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
            <hr />
            <ContactTab />
            <Footer />
        </>
    )
}
export default Landingpage