import imagenmuestra from '../assets/imagenFisica.jpg'
function Cursos(){

return(
    <>    <h1>Cursos ofertados</h1>
        <div className="card mb-3">
            <img src={imagenmuestra} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Curso de preparación ingreso UAEMex</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
        </div>
        <div className="card mb-3">
            <img src={imagenmuestra}className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Curso de preparación ingreso</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                </div>
        </div>
    </>

)

}
export default Cursos;
