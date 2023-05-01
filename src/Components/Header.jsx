import React from "react";
import styled from "styled-components";

export default function Header({ title, setHideAddMenu }) {
    return (
        <Navbar>
            <p className="title">{title}</p>
            <button onClick={()=>{setHideAddMenu()}}>Add</button>
        </Navbar>
    )
}

const Navbar = styled.div`
padding: 0rem 2rem;
position: sticky;
top: 0px;
height: 10vh;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
background-color: rgba(242, 242, 242, 0.8);
backdrop-filter: blur(10px) grayscale(30%);
 .title{
    font-size: 2.5rem;
 }
 button{
    width: 5rem;
    height: 2rem;
    border: 0px;
    border-radius: 4px;
    padding: 0px;
    font-size: 1rem;
    background-color: rgba(255, 87, 51, 1);
    color: white;
    cursor: pointer;
 }
`;
