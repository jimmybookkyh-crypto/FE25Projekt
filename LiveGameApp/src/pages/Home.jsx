import { Outlet } from "react-router-dom";

function Home(){
    return (
        <section className="home">        
            <Outlet />        
        </section>
        
    )
}

export default Home;