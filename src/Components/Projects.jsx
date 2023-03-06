import "./Css/Projects.css"
import MyProjects from './MyProjects.jsx'

import n1 from '/01.png'
import n2 from '/02.png'
import n3 from '/03.png'
import n4 from '/04.png'
import n5 from '/05.png'
import n6 from '/06.png'


export default function Projects() {
    return (
        <>
            <div className="project">
                <h1>My projects</h1>
            </div>
            <div className="projectList">
                <div className="projectItem">
                    <MyProjects href={"https://guilherme-possebon.github.io/Curso-HTML/Desafios/Desafio004/desafio.html"} img={n1} p={"History of android mascot"} /> 
                </div>
                <div className="projectItem">
                    <MyProjects href={"https://guilherme-possebon.github.io/Curso-HTML/Desafios/desafio05/index.html"} img={n2} p={"Cordel Moderno"} /> 
                </div>
                <div className="projectItem">
                    <MyProjects href={"https://guilherme-possebon.github.io/Catalogo/"} img={n3} p={"Catalog"} /> 
                </div>
                <div className="projectItem">
                    <MyProjects href={"https://guilherme-possebon.github.io/Projeto-login/"} img={n4} p={"A site with a login template."} /> 
                </div>
                <div className="projectItem">
                    <MyProjects href={"https://guilherme-possebon.github.io/Projeto-social/html/index.html"} img={n5} p={"A site that uses iframes"} /> 
                </div>
                <div className="projectItem">
                    <MyProjects href={"https://restaurante-60286.web.app/"} img={n6} p={"A layout of a restaurant."} /> 
                </div>
            </div>
        </>
    )
}