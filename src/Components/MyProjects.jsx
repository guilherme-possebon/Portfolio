import "./Css/Projects.css"

export default function MyProjects({href, img, p}) {
    return (
        <div className='proj'>
            <a href={href} target="_blank">
            <img src={img} alt=""/>
            <p className="defaultP">{p}</p>
            </a>  
        </div>
    )
}