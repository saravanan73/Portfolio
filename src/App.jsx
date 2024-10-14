
import './App.css'
import About from './components/About'
import Body from './components/Body'
import Experience from './components/Experience'
import Navbar from './components/Navbar'
import Project from './components/Project'

function App() {

  return (
    <>
    <div className='app'>
      <Navbar/>
      <Body/>
      <About/>
      <Experience/>
      <Project/>
    </div>
    </>
  )
}

export default App
