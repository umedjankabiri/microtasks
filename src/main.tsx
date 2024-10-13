import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {LazyRouter} from "common/components/Routing/Pages/LazyLoading.tsx";

createRoot(document.getElementById('root')!).render(<RouterProvider router={LazyRouter} />)
                                           