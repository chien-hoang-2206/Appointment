import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Layout = (props) => {
    return (
        <div className="flex flex-col">
            <Header />
            <div className=''>
                {props.children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;