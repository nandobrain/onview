import './App.css';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar'
import GalleryDetailsPage from '../GalleryDetailsPage/GalleryDetailsPage';
import ArtistDetailPage from '../ArtistDetailsPage/ArtistDetailsPage';
import ArtistPortfolioPage from '../ArtistPortfolioPage/ArtistPortfolioPage';
import ArtistsIndexPage from '../ArtistsIndexPage/ArtistsIndexPage'

export default function App() {
  const [ user, setUser ] = useState(getUser())

  return (
    <main className="App">
      {
        user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* <Route path="/gallery/detail" element={<GalleryDetailsPage user={user} setUser={setUser} />} />
            <Route path="/about" element={<ArtistDetailPage user={user} setUser={setUser} />} /> */}
            <Route path="/work" element={<ArtistPortfolioPage user={user} setUser={setUser} />} />
            <Route path="/artist" element={<ArtistsIndexPage user={user} setUser={setUser} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}


