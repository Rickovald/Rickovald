import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// COMPONENT IMPORTS
import { Resume } from '@/pages/Resume/Resume';
import { Footer } from '@/widgets/Footer/Footer';
import { Header } from '@/widgets/Header/Header';
import { Main } from '@/pages/Main/Main';
import { Error404 } from '@/pages/Error404/Error404';
import { SEO } from '@/shared/lib/SEO';


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