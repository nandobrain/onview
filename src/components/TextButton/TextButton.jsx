
import { MdPostAdd, MdMessage } from 'react-icons/md';


import './TextButton.css'

export default function TextButton({ onCreatePost }) {
  return (
    // <header className={classes.header}>
    //   <h1 className={classes.logo}>
    //     <MdMessage />
    //     React Poster
    //   </h1>
      <p>
        <button className="button" onClick={onCreatePost}>
          <MdPostAdd size={18} />
         Post/Edit
        </button>
      </p>
    // </header>
  );
}

