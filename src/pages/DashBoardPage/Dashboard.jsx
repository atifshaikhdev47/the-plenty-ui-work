import { withAuthenticator } from "@aws-amplify/ui-react";
import Content from "../../components/DashBoardPage/Content/Content";
import SideBar from "../../components/DashBoardPage/SideBar/SideBar";
const Dashboard = ({signOut, user}) => {
    return  (
        <>
        <div id="wrapper">
        <SideBar />
        <Content user={user} signOut={signOut}/>
        </div>
        </>
    )
}

export default withAuthenticator(Dashboard);