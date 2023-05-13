import { CAM_HEIGHT, CAM_WIDTH } from "@constants/values";

import "./style.css";
import { RootState } from "@store/index";
import { useSelector } from "react-redux";

interface PropType {
    camId: number,
}

const CameraBox = ({camId}: PropType) => {
    const numCameras = useSelector((state:RootState) => state.global.numCameras);

    return (
        <div className="camera-box">
            {
                (camId >= 0 && camId < numCameras) ? (
                    <img className="camimg-cell"
                        src={`http://localhost:5000/fetch_video?cam=${camId}`}
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null;
                            currentTarget.style.display = "none";
                    }}/>
                ) :
                    null
            }
        </div>
    )
}
export default CameraBox;