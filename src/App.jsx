import './App.css'

// components
import SideNav from './components/SideNav'
import TopNav from './components/TopNav'
import Home from './components/home/Home'
import About from './components/about/About'

function App() {

  return (
    <>
      <SideNav />
      <main className="sn-main">
        <TopNav />
        <Home />
        <About />
      </main>
    </>
  )
}

export default App
