import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "view/NavBar";

const Layout = () =>{
   
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <NavBar/>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
        </Suspense>
    </div>
}
export default Layout;