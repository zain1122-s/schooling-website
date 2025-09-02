import React from 'react'
import Homepage from './component/homepage/homepage'
import About from './component/About/About'
import Programs from './component/programs/programs'
import Services from './component/services/services'
import Gallery from './component/gallery/Gallery'
import Achivement from './component/achivement/achivement'
import Feedback from './component/feedback/feedback'
import Footer from './component/footer/Footer'
function App() {
  return (
    <div>
  <Homepage/>
  <About/>
  <Programs/>
  <Services/>
  <Gallery/>
  <Achivement/>
  <Feedback/>
  <Footer/>
    </div>
  )
}

export default App
