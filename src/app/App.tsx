import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// COMPONENT IMPORTS
import { Resume } from 'pages/Resume/index';
import { Footer } from 'widgets/Footer/index';
import { Header } from 'widgets/Header/index';
import { Main } from 'pages/Main';
import { Error404 } from 'pages/Error404';

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