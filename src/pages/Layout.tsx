import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
        <h1>Database Test Page</h1>
        <div>
            <Outlet />
        </div>
    </div>
  )
}
