import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav>
        <img 
                            id='image'
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwnusSVuYqQBTa-skLMxqSUhn3lKHTI_-WBnEFyqcfJMsasJvAWjwjR9yqCJ3HArhtnQ&usqp=CAU'
                   />
      <ul>
        <li><a href='#home'>Home</a></li>
        <li><a href='#news'>News</a></li>
        <li><a href='aAbout'>About</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;



