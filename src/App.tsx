import { Route, Routes } from 'react-router-dom'
import { Navigation, NoMatch } from './customComponents'
import { Character, Characters, FavouritesCharacters } from './pages'

export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/character/:id" element={<Character />} />
        <Route path="/favourites" element={<FavouritesCharacters />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  )
}
