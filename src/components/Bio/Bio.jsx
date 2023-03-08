import './Bio.css'

export default function Bio({ author, body, person, info}) {
    return (
      <>
        <div className="post">
            <p className="post">{author}</p>
            <p className="post">{body}</p>
            
            
        </div>
        <div className="post">
            <p className="post">{person}</p>
            <p className="post">{info}</p>
        </div>
        
        </>
    )
}