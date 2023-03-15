import React from "react";
import './ListItem.css'

const ListItem = (props) => {
    return(
        <div className="listitem">
            <img src={props.img} alt="" />
        </div>
    )
}

export default ListItem 