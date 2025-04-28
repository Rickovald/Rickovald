import { BrowserRouter as Router } from 'react-router-dom';
// COMPONENT IMPORTS
import { SEO } from '@/shared/lib/SEO';
import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';
import { AppRouter } from './routers';



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
                <AppRouter />
                <Footer />
            </Router>
        </div>
    );
};

export default App;