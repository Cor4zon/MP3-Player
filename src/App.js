import SongBox from "./components/SongBox/SongBox";
import Playlist from "./components/Playlist/PlayList";
import './App.css';

function App() {
  return (

    <div className="App">
        <SongBox />
        <Playlist className="playlist" />
    </div>
  );
}

export default App;
