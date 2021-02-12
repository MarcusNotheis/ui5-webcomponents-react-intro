import React, { useEffect, useRef } from "react";

export function EventHandlerManual() {
  const ref = useRef();

  useEffect(() => {
    const currentRef = ref.current;
    const handler = (e) => {
      e.detail.dates.forEach((date) => {
        alert(new Date(date * 1000));
      });
    };

    // bind the event handler
    if (currentRef) {
      currentRef.addEventListener("selected-dates-change", handler);
    }

    // remove the event handler before component unmounts to free up memory
    return () => {
      if (currentRef) {
        currentRef.removeEventListener("selected-dates-change", handler);
      }
    };
  }, []);

  return (
    <div className="scaledFlexBox">
      <ui5-calendar ref={ref} />
    </div>
  );
}
