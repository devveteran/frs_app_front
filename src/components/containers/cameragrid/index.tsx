// import CameraBox from "@organisms/camerabox";
import CameraBox from "@organisms/camerabox";
import { RootState } from "@store/index";
import { useSelector } from "react-redux";

import "./style.css";

const CameraGrid = () => {
    const gridColumns = useSelector((state:RootState) => state.global.gridColumns);
    const numCameras = useSelector((state:RootState) => state.global.numCameras);

    return (
        <div className="camera-grid"
            style={
                {gridTemplateColumns:  `repeat(${gridColumns}, 1fr)`,
                    gridTemplateRows: `repeat(${gridColumns}, 1fr)`}
            }>
            {
                Array.apply(0, Array(gridColumns*gridColumns)).map((x, i) => {
                    if (i < numCameras)
                        return <CameraBox key={i} camId={i}/>;
                    else
                        return null;
                })
            }
        </div>
    )
};
export default CameraGrid;