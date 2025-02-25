import { useState } from "react"
import Home from "./Home";
import Curos from './Cursos'
import Clases from "./Clases";
import './Clasesestilos.css'

type Props = {
    seccionesNav : string[]
    index?: number []
  
}

function NavPrincipal({seccionesNav}: Props){

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [homeBoolean, setHomeBoolean] = useState(true);
    const [clasesBoolean, setClasesBoolean] = useState(false);
    const [cursosBoolean, setCursosBoolean] = useState(false);
    const seleccion=(e :number)=>{
        e===0? setHomeBoolean(true): setHomeBoolean(false);
        e===1? setClasesBoolean(true):setClasesBoolean(false);
        e===2? setCursosBoolean(true): setCursosBoolean(false);

        setSelectedIndex(e);
        console.log(e)
        
    }

    return(
          < >
          <header className="header1" >
            <nav className="navbar navbar-expand-lg " >
                <div className="container-fluid"  >
                <a className="navbar-brand " href="#">Tlamatini</a>
                    <button className="navbar-toggler" type="button" 
                    data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" 
                        aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    {/* <div className="dropdown">
                        <button className="btn dropdown-toggle text-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Home
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div> */}
                    {seccionesNav.map((elemento,i)=>(<a className={`nav-link ${selectedIndex == i ? 'bg-primary-subtle':''} `} id={"nav-".concat(i.toString())} aria-current="page" onClick={()=>seleccion(i)} 
                    key={elemento}  href="#"> {elemento}</a>)) }
        
                </div>
                </div>
                </div>
            
            </nav>
        </header>
        <main>
        {homeBoolean && <Home/>}
        {clasesBoolean&&<Clases/>}
        {cursosBoolean&&<Curos/>}
        </main>

        <footer className="bg-dark text-white mt-auto py-3">
        <div className="card text-center mt-auto">
                <div className="card-header">
                    Contacto
                </div>
                <div className="card-body">
                <h5>WhatsApp</h5>
                <p className="card-text">(+52) 7546121245</p>
                    <h5 className="card-title">Nuestra ubicación</h5>
                    <p className="card-text">Visitanos en nuestra ubicacion</p>
                    <a href="#" className="btn btn-primary">Tap to go</a>
                </div>
                
            </div>
        </footer>
        
        </>

    )


}

export default NavPrincipal;