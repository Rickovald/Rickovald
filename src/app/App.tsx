import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// COMPONENT IMPORTS
import { Resume } from 'pages/Resume/Resume';
import { Footer } from 'widgets/Footer';
import { Header } from 'widgets/Header';
import { Main } from 'pages/Main';
import { Error404 } from 'pages/Error404/Error404';
import { About } from 'pages/About/';
import { Contacts } from 'pages/Contacts';

const App = () => {
    return (
        <HelmetProvider>
            <div className='App'>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Page title</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
                <Router>
                    <Header />
                    <Routes>
                        <Route
                            path='/'
                            element={<Main />}
                        />
                        <Route
                            path='/about'
                            element={<About />}
                        />
                        <Route
                            path='/contacts'
                            element={<Contacts />}
                        />
                        {/* COMPONENT ROUTES */}
                        <Route path='/resume' element={<Resume />}/>
                        <Route path='*' element={<Error404 />} />
                    </Routes>
                    <Footer />
                </Router>
            </div>
        </HelmetProvider>
    );
};

export default App;