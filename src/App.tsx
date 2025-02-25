
import './App.css'
import NavPrincipal from './componens/NavPrincipal'

function App() {
  const listaNav: string[] = ["Pagina Principal", "Clases y tutorias", "Cursos"];




  return (
    <>
    <NavPrincipal seccionesNav={listaNav}  />
  
    </>
  )
}

export default App
