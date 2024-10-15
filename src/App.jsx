
import './App.css'
import About from './components/About'
import Body from './components/Body'
import Contect from './components/Contect'
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
      <Contect/>
    </div>
    </>
  )
}

export default App
