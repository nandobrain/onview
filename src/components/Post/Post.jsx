import './Post.css'

export default function Post(props) {
    return (
        <div className="Post">
            <p className="Post"> {props.author}</p>
            <p className="Post">{props.body}</p>
        </div>

    )
}