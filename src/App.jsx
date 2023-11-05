import './App.css'
import Carousel from './components/Carousel'
import {images} from "./data/data.json"
function App() {

  return (
    <>
     <Carousel data={images}/>
    </>
  )
}

export default App
