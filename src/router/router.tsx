import { createBrowserRouter } from 'react-router-dom';
// import App from '../App';
import { lazy, Suspense } from 'react';
const AIChatLayout = lazy(() => import('../pages/chat/AIChatLayout'));
// const AuthPage = lazy(() => import('../pages/auth/AuthPage'));
const Home = lazy(() => import('../pages/homepage/Home'));
const App = lazy(() => import('../App'));

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Suspense fallback={<div>Loading App...</div>}>
                <App />
            </Suspense>),
        children: [{
            index: true,
            element: (
                // This is where to add a loading component in the fallback
                <Suspense fallback={<div>Loading...</div>}>
                    {/* Render the required component */}
                    <Home />
                </Suspense>
            )
        },
        // Add more routes here and also can wrap with protected routes
        // {
        //     path: '/auth',
        //     element: (
        //         <Suspense fallback={<div>Loading...</div>}>
        //             <AuthPage />
        //         </Suspense>
        //     )
        // },
        {
            path: '/chat',
            element: (
                <Suspense fallback={<div>Loading...</div>}>
                    <AIChatLayout />
                </Suspense>
            )
        }
        ]
    }
])

export default router;
