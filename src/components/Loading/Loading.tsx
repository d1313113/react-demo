import * as React from "react";

interface Props {
  error?: string,
  timeOud?: number,
  pastDelay?: number,
  [propName: string]: any
}


function Loading(props:Props):JSX.Element|null {
  if (props.error) {
    return (
      <div>
        Error!
        <button onClick={ props.retry }>Retry</button>
      </div>
    );
  } else if(props.timeOud) {
    return (
      <div>
        Taking a long time...
        <button onClick={ props.retry }>Retry</button>
      </div>
    );
  } else if (props.pastDelay) {
    return (
      <div>Loading...</div>
    );
  } else {
    return null;
  }
}

export default Loading;
