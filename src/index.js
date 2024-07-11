import "./index.css"
import React, {StrictMode} from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider }   from "./context/books";


const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

root.render(
    <StrictMode>
        <Provider value={5}>
            <App />
        </Provider>
    </StrictMode>);

