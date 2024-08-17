import { Outlet } from "react-router-dom";
import Header from "../header";
import Sidebar from "../sidebar"
export function MainLayout() {
    return (
    <div className="w-[1265px] mx-auto"> 
        <Header/>
        <div className="flex">
           {/*  <Sidebar/> */}
            <Outlet />
        </div>
    </div>
    )
}