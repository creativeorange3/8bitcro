import React from "react";
import SceneObject from "../../SceneObject";

const EndText = React.memo(props => (
  <SceneObject
    name="Thanks"
    transform={{
      position: props.transform.position,
      scale: { x: "auto", y: "auto" },
      rotation: props.transform.rotation
    }}
  >
  <a
    style={{ textDecoration: "none" }} href="#"
  >
    <h1 style={{ color: "#6B6B6B" }}>
      Telegram
    </h1>
  </a>
    <a
      style={{ textDecoration: "none" }} href="#"
    >
      <h1 style={{ color: "#6B6B6B" }}>
        Chart
      </h1>
    </a>

    <a style={{ textDecoration: "none" }} href="#">
      <h3 style={{ color: "white" }}>8bitcro</h3>
    </a>
  </SceneObject>
));
export default EndText;
