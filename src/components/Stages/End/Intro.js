import React from "react";
import SceneObject from "../../SceneObject";

const Intro = React.memo(props => (
  <SceneObject
    name="Thanks"
    transform={{
      position: props.transform.position,
      scale: { x: 425, y: 450 },
      rotation: props.transform.rotation
    }}
  >
    <h2 style={{ color: "black" }}>Welcome to 8bit!</h2>
    <h3 style={{ color: "black" }}>An NFT based P2E Game</h3>
  </SceneObject>
));
export default Intro;
