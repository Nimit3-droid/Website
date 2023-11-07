import { list } from "postcss";
import React from "react";
import Typewriter from "typewriter-effect";

interface IProps {
	strings: [string,string],
    customCSS: string
}
function TypeingEffect(props:IProps) {
  return (
    <div className={`${props.customCSS}`}>

    <Typewriter
      options={{
          strings: props.strings,
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
        }}
        />
        </div>
  );
}

export default TypeingEffect;