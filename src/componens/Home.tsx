
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import imagenprueba from '../assets/imagenPrueba.jpeg'
import './cssHome.css'


function Home(){
   

    // const carouselElement = document.getElementById('carouselExampleAutoplaying');
    // if (carouselElement) {
    //     const carousel = new bootstrap.Carousel(carouselElement, {
    //         interval: 2000,
    //         touch: false
    //     });
    // }


    return(
        <>
            <h1 className="d-flex justify-content-md-center " style={{paddingTop:'1cm'}}  >Bienvenidos a Tlamatini</h1>
            <div id="carouselExampleAutoplaying" className="carousel slide border border-bottom-0" data-bs-ride="carousel" style={{paddingTop:'1cm'}}>
                <div className="carousel-inner d-flex justify-content-evenly" >
                    <div className="carousel-item active ">
                        
                    <img src={imagenprueba} style={{maxWidth:700,height:300}} className="d-block w-100 " alt="..."/>
                    </div>
                    <div className="carousel-item">
                       
                    <img src={imagenprueba} style={{maxWidth:700,height:300}} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                       
                    <img src={imagenprueba} style={{maxWidth:700,height:300}} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* <section className='text-light'>
                <h3>Acerca de Nosotros</h3>
                <p>Somos un colegio enfocado en mantener a nuestros alumnos satisfechos</p>
            </section>
            <section className='text-light'>
                <h3>Visión</h3>
            </section>
            <section className='text-light'>
                <h3>Misión
                </h3>
            </section> */}
        <div className='vidM'>
            <div className="card mb-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded   "  >
                    <div className="row g-0" >
                        <div className="col-md-4">
                        <img src={imagenprueba} style={{maxWidth:700,height:300}} className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Visión
                            </h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            
                        </div>
                        </div>
                    </div>
                </div>
            
            <div className="card mb-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded"  >
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={imagenprueba} style={{maxWidth:700,height:300}} className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Misión</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            


            
        </>

    )


}
export default Home;