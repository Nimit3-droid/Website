import React from "react";
interface IProps {
  width?: number;
  height?: number;
  color?: string;
  customClass?: string;
}
function IbHub(props: IProps) {
  return (
    <div className={props.customClass}>
    <svg
      width={props.width}
      height={props.height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M26.401 27.248.631 65.083c-1.096 1.598-.73 3.763.834 4.846.574.412 1.305.618 2.035.618h51.593c1.93 0 3.548-1.546 3.548-3.453 0-.722-.209-1.444-.626-2.01L32.192 27.247c-1.096-1.598-3.287-2.01-4.904-.928-.365.258-.678.567-.887.928"
        fill="#016CAF"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M72.778 1.578 29.636 64.412c-1.2 1.804-.73 4.228 1.095 5.413.626.413 1.409.67 2.14.67h86.336c2.191 0 3.965-1.804 3.912-3.969 0-.773-.26-1.495-.678-2.114L79.142 1.63c-1.304-1.752-3.756-2.165-5.53-.876-.312.206-.573.516-.834.825"
        fill="#46C7F4"
      ></path>
    </svg>
    </div>
  );
}

export default IbHub;
