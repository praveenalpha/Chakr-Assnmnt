import { PhoneIcon, AddIcon, WarningIcon, ViewIcon } from '@chakra-ui/icons'
import { Heading } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { TimeIcon, SettingsIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import "./Nav.css"
import NavProfile from './NavProfile/NavProfile'

const Nav = () => {
    return (
        <div className="nav">
            <div className="navhead">
                <Heading>🍊OrangeFarm</Heading>
            </div>
            <div className="nav-2">
                <Input placeholder="search" htmlSize={30} width='auto' />
            </div>
            <div className="nav-list">
                <div className="nav-list-content">
                </div>
                <div className="nav-list-content">
                    <TimeIcon />
                    <h2>Dashboard</h2>
                </div>
                <div className="nav-list-content">
                    <TimeIcon />
                    <h2>Customers</h2>
                </div>
                <div className="nav-list-content">
                    <TimeIcon />
                    <h2>All reports</h2>
                </div>
                <div className="nav-list-content">
                    <TimeIcon />
                    <h2>Geography</h2>
                </div>
                <div className="nav-list-content">
                    <TimeIcon />
                    <h2>Converstations</h2>
                </div>
                <div className="nav-list-content">
                    <TimeIcon />
                    <h2>Deals</h2>
                </div>
                <div className="nav-list-content">
                    <TimeIcon />
                    <h2>Export</h2>
                </div>
            </div>
            <div className="nav-bottom-profile">
                <NavProfile />
            </div>

            <div className="nav-list-content">
                <SettingsIcon color='black.500'/>
                <h2>Settings</h2>
            </div>

            <div className="nav-list-content">
                <ExternalLinkIcon color='black.500' />
                <h2>Logout</h2>
            </div>
        </div>


    );
}

export default Nav;