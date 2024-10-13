import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {Router} from "common/components/Routing/Routes/Router.tsx";

createRoot(document.getElementById('root')!).render(<RouterProvider router={Router} />)
