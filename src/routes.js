import SearchUser from "./usersearch";
import UserProfile from "./user-profile";


const routes =[
    {
        path:'/',
        component:<SearchUser/>
    },
    {
        path:'/user/:userName',
        component:<UserProfile/>
    }
]

export default routes