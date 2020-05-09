import React from "react";
import useLongPress from './useLongPress';


const Todo = (props) => {

  const handleClick = (e) => {
    props.toggleItemDone(props.item.id);
  };
  const handleDblClk = (e) =>{

    props.editItem(props.item, props.item.id)
  }
  const handleLongClk = (e) =>{

    props.editItem(props.item, props.item.id)
  }
  const backspaceLongPress = useLongPress(handleLongClk, 500);
  return (
    <div
      {...backspaceLongPress}
      onClick={handleClick}
      onDoubleClick={handleDblClk}
      className={`item${props.item.completed ? " done" : ""}`}
    >
      <p>{props.item.task}</p>
    </div>
  );
};

export default Todo;
