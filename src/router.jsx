import { createBrowserRouter } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Proyects from './pages/Projects/Proyects';
import ProjectDetail from './pages/ProjectDetail/ProjectDetail';

const router = createBrowserRouter([
    /*
    |--------------------------------------------------------------------------
    | Público
    |--------------------------------------------------------------------------
    */

    {
        path: '/',
        element: <PublicLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/projects',
                element: <Proyects />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/proyectos/:slug',
                element: <ProjectDetail />,
            },
        ],
    },

    /*
    |--------------------------------------------------------------------------
    | 404
    |--------------------------------------------------------------------------
    */

    {
        path: '*',
        element: (
            <div className="flex min-h-screen items-center justify-center bg-slate-50">
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-slate-800">404</h1>
                    <p className="mt-3 text-slate-500">Página no encontrada</p>
                </div>
            </div>
        ),
    },
]);

export default router;
