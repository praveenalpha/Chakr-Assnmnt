import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { ArrowForwardIcon, ChevronDownIcon } from '@chakra-ui/icons'
import "./Mainmidcustomer.css";

const Mainmidcustomer = () => {
    return (
        <div className="main-mid-customer">
            <div className="main-mid-customer-top">
                <Heading color={'black'}>Customers</Heading>
                <p>Sort by newest <ChevronDownIcon /></p>
            </div>
            <div className="main-mid-customer-detail">
                <Avatar size='sm' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                <div className="main-mid-cutomer-detail-nav-profile-right">
                    <h2>Gustavo Xavier</h2>
                    <span className='main-mid-cutomer-detail-nav-profile-right-span'>Admin</span>
                </div>
            </div>
            <div className="main-mid-customer-detail">
                <Avatar size='sm' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                <div className="nav-profile-right">
                    <h2>Gustavo Xavier</h2>
                    <span className='main-mid-cutomer-detail-nav-profile-right-span'>Admin</span>
                </div>
            </div>
            <div className="main-mid-customer-detail">
                <Avatar size='sm' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                <div className="nav-profile-right">
                    <h2>Gustavo Xavier</h2>
                    <span className='main-mid-cutomer-detail-nav-profile-right-span'>Admin</span>
                </div>
            </div>
            <div className="main-mid-customer-detail">
                <Avatar size='sm' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                <div className="nav-profile-right">
                    <h2>Gustavo Xavier</h2>
                    <span className='main-mid-cutomer-detail-nav-profile-right-span'>Admin</span>
                </div>
            </div>
            <div className="main-mid-customer-detail">
                <Avatar size='sm' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                <div className="nav-profile-right">
                    <h2>Gustavo Xavier</h2>
                    <span className='main-mid-cutomer-detail-nav-profile-right-span'>Admin</span>
                </div>
            </div>
            <p>All customers <ArrowForwardIcon/></p>
        </div>
    );
}

export default Mainmidcustomer;