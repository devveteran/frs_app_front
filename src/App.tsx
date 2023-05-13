import CameraGrid from '@containers/cameragrid';
import './App.css';
import FaceList from '@containers/facelist';

function App() {
  return (
    <div className="body main-view">
        <div className="section-cameras">
          <CameraGrid/>
        </div>
        <div className="section-faces">
          <FaceList />
        </div>
      </div>
  );
}

export default App;
