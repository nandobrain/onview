import './Bio.css'

export default function Bio({ author, body}) {
    return (
      <>
        <div className="post">
            <p className="post">{author}</p>
            <p className="post">{body}</p>
            
            
        </div>
      
        
        </>
    )
}