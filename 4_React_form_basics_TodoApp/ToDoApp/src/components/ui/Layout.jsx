import Footer from "./Footer.jsx";
import Header from "./Header.jsx"
import Nav from "./Nav.jsx";

export const Layout = ({children}) => {
    return (
        <>
            <div className="relative flex w-full flex-col">
                <Nav/>
                <Header/>
                <main className="flex-auto">{children}</main>
                <Footer/>
            </div>
        </>
    );
}
