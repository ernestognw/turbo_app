import React from 'react';

function ListItem (props) {
  return(
    <li key={props.index}>{props.item} <button id={props.index} onClick={props.handleDelete}>x</button></li>
  )
}

export default ListItem;