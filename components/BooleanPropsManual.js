import React, { useEffect, useRef } from "react";

export function BooleanPropsManual() {
  const booleanPropsBtn1 = {};
  const booleanPropsBtn2 = {};

  const button1ShouldBeDisabled = false;
  const button2ShouldBeDisabled = true;

  if (button1ShouldBeDisabled === true) {
    booleanPropsBtn1.disabled = true;
  }
  if (button2ShouldBeDisabled === true) {
    booleanPropsBtn2.disabled = true;
  }

  return (
      <div className="scaledFlexBox">
        <ui5-button
            onClick={() => alert("I'll be there onClick!")}
            {...booleanPropsBtn1}
        >
          Click me!
        </ui5-button>

        <ui5-button
            onClick={() => alert("I will never show up!")}
            {...booleanPropsBtn2}
        >
          But you can't click me!
        </ui5-button>
      </div>
  );
}
