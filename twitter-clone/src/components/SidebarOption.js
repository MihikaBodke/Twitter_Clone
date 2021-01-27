import React, { Component } from 'react';
import '../css/sidebarOption.css';
// Will recieve the icons(look below the props args), give it the on hover turn Blue function
function SidebarOption({active, text, Icon}) {
// active means selected now, turn its color to blue if true
        return (
            <div className={    `sidebarOption ${active && 'sidebarOption--active'}`} > 
            <Icon />
            <h2>{text}</h2> 
            </div>
        )
    }

export default SidebarOption
