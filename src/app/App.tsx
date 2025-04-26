import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

// COMPONENT IMPORTS
import { SEO } from '@/shared/lib/SEO';
import { Footer } from '@/widgets/Footer/Footer';
import { Header } from '@/widgets/Header/Header';
const Main = lazy(async () => ({
    default: (await import('@/pages/Main')).Main,
}));
const Resume = lazy(async () => ({
    default: (await import('@/pages/Resume/Resume')).Resume,
}));
const Error404 = lazy(async () => ({
    default: (await import('@/pages/Error404/Error404')).Error404,
}));




const App = () => {
    return (
        <div className='App'>
            <SEO
                title="Rickonvald CV"
                description="Rickonvald's professional CV and portfolio"
                canonical="http://mysite.com/example"
            />
            <Router>
                <Header />
                <Routes>
                    <Route
                        path='/'
                        element={<Main />}
                    />
                    {/* COMPONENT ROUTES */}
                    <Route path='/resume' element={<Resume />} />
                    <Route path='*' element={<Error404 />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
};

export default App;