import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landingpage from './pages/landingPage.jsx'
import AboutUs from './pages/aboutUs.jsx'
import Mentor from './pages/mentor.jsx'
import Mentee from './pages/mentee.jsx'
import Contact from './pages/contact.jsx'
import Resources from './pages/resources.jsx'
import BecomeAmentor from './pages/becomeAmentor.jsx'
import BecomeAmentee from './pages/becomeAmentee.jsx'
import MentorForm from './pages/mentorForm.jsx'
import MenteeForm from './menteesForm.jsx'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landingpage />} />
          <Route path="/home" element={<Landingpage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/mentor" element={<Mentor />} />
          <Route path="/mentee" element={<Mentee />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/becomeAmentor" element={<BecomeAmentor />} />
          <Route path="/becomeAmentee" element={<BecomeAmentee />} />
          <Route path="/mentorForm" element={<MentorForm />} />
          <Route path="/menteeForm" element={<MenteeForm />} />

        </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
