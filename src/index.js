import React from 'react';
import DeployRouter from './JS/router';
import './index.css';

import { createRoot } from 'react-dom/client';
const container = document.querySelector('#root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<DeployRouter />);