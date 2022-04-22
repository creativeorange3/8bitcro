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
    style={{ textDecoration: "none" }} href="https://t.me/8bitcro" target={'_blank'}
  >
    <h1 style={{ color: "#6B6B6B" }}>
      Telegram
    </h1>
  </a>
    <a
      style={{ textDecoration: "none" }} href="https://dexscreener.com/cronos/0x7a071a504ac437f4a48c72f5bfb327b54e90a0bc" target={"_blank"}
    >
      <h1 style={{ color: "#6B6B6B" }}>
        Chart
      </h1>
    </a>
    <a
      style={{ textDecoration: "none" }} href="https://mm.finance/swap?inputCurrency=0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23&outputCurrency=0x7a071a504ac437f4a48c72f5bfb327b54e90a0bc" target={'_blank'}
    >
      <h1 style={{ color: "#6B6B6B" }}>
        Buy 8bitcro
      </h1>
    </a>

    <a style={{ textDecoration: "none" }} href="#">
      <h3 style={{ color: "white" }}>8bitcro, all rights reserved</h3>
    </a>
  </SceneObject>
));
export default EndText;
