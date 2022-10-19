import React from 'react';
// import ReactDOM from 'react-dom/client';
import { render } from "react-dom"; 
import { HeroesApp } from './HeroesApp';

const divRoot = document.getElementById("root"); 
render(<HeroesApp />, divRoot);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <HeroesApp />
// );

// el codigo comentado, es el viejo codigo que corresponde al render del react v18