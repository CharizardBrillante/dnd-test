import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from "./Components/Layout/MyNav";
import SpellsGallery from './Components/Spells/SpellsGallery';

function App() {
  return (
    <div className="App">
      <MyNav/>
      <SpellsGallery/>
    </div>
  );
}

export default App;
