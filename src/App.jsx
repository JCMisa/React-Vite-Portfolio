import './App.css'

// components
import SideNav from './components/SideNav'
import TopNav from './components/TopNav'
import Hero from './components/Hero'

function App() {

  return (
    <>
      <SideNav />
      <main className="sn-main">
        <TopNav />
        <Hero />
        <Hero />
        <Hero />
      </main>
    </>
  )
}

export default App
