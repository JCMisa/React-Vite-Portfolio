import './App.css'

// components
import SideNav from './components/SideNav'
import TopNav from './components/TopNav'
import Home from './components/home/Home'
import About from './components/about/About'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <SideNav />
      <div className="main-container">
        <TopNav />
        <Home />
        <About />

        <Footer />
      </div>
    </>
  )
}

export default App
