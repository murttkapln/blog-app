import {Outlet} from "react-router-dom"

const PrivateRouter = () => {
    user = true
  return user === true ? <Outlet/> : <Navigate to="/login"/>

}

export default PrivateRouter