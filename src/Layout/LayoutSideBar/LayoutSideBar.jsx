import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { BackTop } from 'antd';
const Layout = (props) => {
    return (
        <div className="flex flex-col">
            <Header />
            <div className=''>
                {props.children}
            </div>
            <BackTop />
            <Footer />
        </div>
    );
};

export default Layout;