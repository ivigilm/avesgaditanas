import React from 'react';
import classNames from 'classnames';
// import './App.css';

const App = () => (
    <>
    <nav>Inicio · Especies · Lugares</nav>
    <div id="main">
        <div id="introduction">
            <h1>Aves gaditanas</h1>
        </div>
        <div id="discover">
            <h2>Descubre las aves de Cádiz</h2>
            <p>¿Qué quieres hacer hoy?</p>
            <div class="imgcontainer">
                <div>
                    <span>Especies</span>
                    <a href="especies.html"><img src="images/anaderabudo400x250.jpg" alt="Ánades rabudos" width="400" height="250" /></a>
                </div>
            </div>
            <div class="imgcontainer">
                <div>
                    <span>Lugares</span>
                    <a href="lugares.html"><img src="images/anaderabudo400x250.jpg" alt="Botes en la orilla" width="400" height="250" /></a>
                </div>
            </div>    
        </div>
        <div id="contribute"></div>
    </div>
    <footer>Créditos</footer>
    </>
);

export default App;