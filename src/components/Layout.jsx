import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return(
        <>
            <Header
                toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
            />

            <div className="flex">
                <Sidebar sidebarOpen={sidebarOpen}/>

                <main className=" flex-1">
                    {children}
                </main>
            </div>
        </>
    );
}

export default Layout;