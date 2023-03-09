import './Page.css'

export default function Page({ page, artist}) {
    return (
      <>
        <div className="post">
            <p className="post">{page}</p>
            <p className="post">{artist}</p>
            
            
        </div>
      
        
        </>
    )
}