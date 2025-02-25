import imagenfisica from '../assets/imagenFisica.jpg'
import quimicaImage  from '../assets/imagenquimica.jpg'
import imagenIngles from '../assets/imagenIngles.jpg'
import imagenEconomia  from '../assets/economiaimagen.jpg'
import matematicasImagen from '../assets/matematicasimagen.jpg'
import './Clasesestilos.css'

function Clases(){

 

    return(
        < >
           
            <div >
            <h1 className="d-flex justify-content-md-center"  style={{paddingTop:'1cm'}}>Clases y Tutorias</h1>
                <p className="d-flex justify-content-md-center" >
                    En tlamatini ofrecemos un amplio esquema de clases en las diferentes asignaturada de matematicas, fisica, quimica,
                    ingles y economia
                </p>
            </div>
           
            <div className="row row-cols-1 row-cols-md-2 g-4  d-flex justify-content-md-center"  style={{minHeight:'100%'}}>
                <div className="col shadow-lg p-3 mb-5 bg-body-tertiary rounded" >
                    <div className="card">
                    <img src={imagenfisica} className="card-img-top"  alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Física</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Principales temas</a>
                        </div>
                        <div className="collapse" id="collapseExample">
                            <div className="card card-body">
                                <ul className="list-group">
                                    <li className="list-group-item">Física mecanica</li>
                                    <li className="list-group-item">Física termica</li>
                                    <li className="list-group-item">Electroestatica</li>
                                    <li className="list-group-item">Termodinamica</li>
                                    <li className="list-group-item">Física Estadistica</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="col shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                <div className="card">
                    <img src={quimicaImage} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Quimica</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Principales temas</a>
                    </div>
                    <div className="collapse" id="collapseExample2">
                            <div className="card card-body">
                                <ul className="list-group">
                                    <li className="list-group-item">Quimica organica</li>
                                    <li className="list-group-item">Quimica inorganica</li>
                                    
                                </ul>
                            </div>
                        </div>

                    </div>
            </div>
            <div className="col shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                <div className="card">
                <img src={imagenIngles} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Ingles</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                </div>
                </div>
            </div>
            <div className="col shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                <div className="card">
                <img src={imagenEconomia} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Economia</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Principales temas</a>
                </div>
                <div className="collapse" id="collapseExample3">
                            <div className="card card-body">
                                <ul className="list-group">
                                    <li className="list-group-item">Física mecanica</li>
                                    <li className="list-group-item">Física termica</li>
                                    <li className="list-group-item">Electroestatica</li>
                                    <li className="list-group-item">Termodinamica</li>
                                    <li className="list-group-item">Física Estadistica</li>
                                </ul>
                            </div>
                        </div>
                </div>
            </div>
            <div className="col shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                <div className="card">
                <img src={matematicasImagen} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Matemáticas</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample">
                            Principales temas</a>
                </div>
                <div className="collapse" id="collapseExample4">
                            <div className="card card-body">
                                <ul className="list-group">
                                    <li className="list-group-item">Física mecanica</li>
                                    <li className="list-group-item">Física termica</li>
                                    <li className="list-group-item">Electroestatica</li>
                                    <li className="list-group-item">Termodinamica</li>
                                    <li className="list-group-item">Física Estadistica</li>
                                </ul>
                            </div>
                        </div>
                </div>
            </div>
            </div>
            
        </>
    )
}
export default Clases;
