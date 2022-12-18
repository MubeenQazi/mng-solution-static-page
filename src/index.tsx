import React from 'react';
import { createRoot } from 'react-dom/client';
import Routes from "./routes";
import {ThemeProvider} from '@mui/material/styles';
import "./submodule/styles/index.scss";
import {SubModStyles} from "./submodule/submoduleRefs";

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={SubModStyles.MuiThemeCustomized}>
      <Routes />
    </ThemeProvider>
  </React.StrictMode>
);