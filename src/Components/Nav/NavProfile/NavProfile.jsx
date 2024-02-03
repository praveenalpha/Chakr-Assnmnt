import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import "./NavProfile.css";

const NavProfile = () => {
    return ( 
        <div className="nav-profile">
            <Avatar size='sm' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
            <div className="nav-profile-right">
                <h2>Gustavo Xavier</h2>
                <span className='nav-profile-right-admin'>Admin</span>
            </div>
        </div>
    );
}
 
export default NavProfile;