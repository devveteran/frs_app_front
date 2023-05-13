import CameraGrid from '@containers/cameragrid';
import './App.css';

function App() {
  return (
    <div className="body main-view">
        <div className="section-cameras">
          <CameraGrid/>
        </div>
        <div className = "section-faces">
          World!
        </div>
      </div>
  );
}

export default App;
