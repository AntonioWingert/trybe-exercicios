import './App.css';
import Image from './Image';
import catImage from './catImage.jpg';

function App() {
  return (
    <div>
      <Image source={ catImage } alternativeText="Gato fofo dos inferno"/>
    </div>
  );
}

export default App;
