import Sidebar from "../Sidebar/index.js";
import "./index.scss";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="App">
            <Sidebar/>
            <div className="page">   
                <span className="tags top-tags">&lt;body&gt;</span>
                <Outlet/>
                {/* outlet component renders the nested components or links in place of the outlet component */}
                <span className="tags bottom-tags">&lt;/body&gt;
                <br />
                <span className="bottom-tag-html">&lt;/html&gt;</span>
                </span>
            </div>
        </div>
    )
}
export default Layout;
