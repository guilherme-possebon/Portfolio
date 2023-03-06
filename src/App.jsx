import './App.css'

import Me from "./Components/Me"
import NetWorks from "./Components/NetWorks"
import Skills from './Components/Skills'
import Projects from "./Components/Projects"

function App() {

  return (
    <section className='ContainerPrincipal'>
        <div className="Container">
          <div className='sidebar'>
              <Me />
              <Skills />
              <NetWorks />
          </div>
          <main className='main'>
              <Projects />
          </main>
        </div>
    </section>
  )
}

export default App
