import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';

const root = document.getElementById("root");
const rr = createRoot(root);
rr.render( <App /> );