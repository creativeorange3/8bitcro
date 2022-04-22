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
    <h3 style={{ color: "black" }}><a href="https://mm.finance/swap?inputCurrency=0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23&outputCurrency=0x7a071a504ac437f4a48c72f5bfb327b54e90a0bc" target={"_blank"}>BUY HERE</a></h3>
  </SceneObject>
));
export default Intro;
