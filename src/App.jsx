import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <>
      <h1>CompuSueños</h1>
      <NavBar />
      <hr />
      <ItemListContainer color="red" greeting="Bienvenido a CompuSueños"/>
    </>
  )
}

export default App
