import React from "react";
interface IProps {
  onAdd?: () => void;
  onIncrement?: () => void;
}
export default function CounterHandle(props: IProps) {
  return (
    <div>
      <button className='handle' onClick={() => props.onAdd?.()}>add</button>
      <button className='handle' onClick={() => props.onIncrement?.()}>increment</button>
    </div>
  );
}
