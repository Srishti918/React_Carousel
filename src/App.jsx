import './App.css'
import Carousel from './components/Carousel'
import {images} from "./data/data.json"
function App() {

  return (
    <div className='App'>
     <Carousel data={images}/>
    </div>
  )
}

export default App
