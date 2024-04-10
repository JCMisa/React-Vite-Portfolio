import './App.css'

// components
import SideNav from './components/SideNav'
import TopNav from './components/TopNav'
import Home from './components/home/Home'
import About from './components/about/About'
import Chart from './components/home/charts/Chart'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <SideNav />
      <div className="main-container">
        <TopNav />
        <Home />
        <About />
        <Chart /> 

        <Footer />
      </div>
    </>
  )
}

export default App
