import { Route, Routes } from 'react-router-dom'
import { Navigation } from './components/custom'
import { Character, Characters, Favourites } from './pages'

export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/character/:id" element={<Character />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </>
  )
}
