import { Outlet } from 'react-router-dom';
import Navigation from '../components/navigation/Navigation.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';


function MainLayout() {
  return (
    <>
        <Header />  
        <Navigation />  
        <main>
            <Outlet />
        </main>     
        <Footer />
    </>
  );
}

export default MainLayout;