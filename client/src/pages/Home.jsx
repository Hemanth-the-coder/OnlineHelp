import Topbar from "../components/Topbar";
import SideBar from "../components/SideBar";
import Feed from "../components/Feed";
function Home() {
    return (
        <>      
        <Topbar/>
        <div className="homeContainer flex">
        <SideBar/>
        <Feed/>
        </div>
        </>
    )
}

export default Home
