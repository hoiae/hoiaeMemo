import Main from '../pages/Main';
import Footer from '../compoents/commons/Footer';
import Header from '../compoents/commons/Header';
import { Outlet } from 'react-router-dom';
function Layout() {

    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default Layout;