import './Info.css'

export default function Info({ person, info}) {
    return (
      <>
    
        <div className="post">
            <p className="post">{person}</p>
            <p className="post">{info}</p>
        </div>
        
        </>
    )
}