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
    <h2 style={{ color: "black" }}>Welcome to 8bitcro, NFT based exploration Game</h2>
    <h3 style={{ color: "black" }}><a href="https://www.google.com" target={"_blank"}>BUY HERE</a></h3>
  </SceneObject>
));
export default Intro;
