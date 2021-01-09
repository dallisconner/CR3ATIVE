import React from "react";

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10, color: '#FFF' }} className="outline">
      {props.children}
    </button>
  );
}
