import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {RoutingApp} from "common/components/Routing/RoutingApp.tsx";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <RoutingApp />
  </BrowserRouter>,
)
