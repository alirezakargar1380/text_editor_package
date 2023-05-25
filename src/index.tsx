import {Text} from "./package/Text"
import React from "react";
import { createRoot } from 'react-dom/client';
const container: any = document.getElementById('root');
const root = createRoot(container);
root.render(<Text />)