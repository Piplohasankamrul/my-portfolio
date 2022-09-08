import React, { useState } from 'react';
import './Nav.css'
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'

const Nav = () => {
    const [isActive,setIsActive] = useState('#');
    const handleNavActive=(id)=>{
        console.log(id);
        setIsActive(id)
    }
    return (
        <nav>
            <a href='/' onClick={()=>handleNavActive('#')} className={isActive==='#' ?'active':''}><AiOutlineHome /></a>
            <a href='#about' onClick={()=>handleNavActive('#about')} className={`${isActive ==='#about'?"active":""}`} ><AiOutlineUser /></a>
            <a href='#experience' onClick={()=>handleNavActive('#experience')} className={`${isActive ==='#experience'?"active":""}`}><BiBook /></a>
            <a href='#services' onClick={()=>handleNavActive('#services')} className={`${isActive ==='#services'?"active":""}`}><RiServiceLine /></a>
            <a href='#contact' onClick={()=>handleNavActive('#contact')} className={`${isActive ==='#contact'?"active":""}`}><BiMessageSquareDetail /></a>
        </nav>
    );
};

export default Nav;