import { useState } from 'react';
import usedarkMode from '../usedarkMode';
import {
    FaSearch,
    FaHashtag,
    FaRegBell,
    FaUserCircle,
    FaMoon,
    FaSun,
} from 'react-icons/fa';

const Navbar = () => {

    return (
        <div className='navBar'>
            <Hashtag />
            <Title />
            <ThemeIcon />
            <Search />
            <BellIcon />
            <UserCircle />

        </div>
    )
}

const ThemeIcon = () => {
    let [darktheme, setdarktheme] = useState(usedarkMode);
    const handleTheme = () => {
        setdarktheme(darktheme = !darktheme)
        if (!darktheme) {
            document.documentElement.classList.remove('dark')
        } else {
            document.documentElement.classList.add('dark')
        }

    }
    return (
        <span onClick={handleTheme}>
            {darktheme ? (
                <FaSun size='24' className='top-navigation-icon' />
            ) : (
                <FaMoon size='24' className='top-navigation-icon' />
            )}
        </span>
    )
}
const BellIcon = () => <FaRegBell size='24' className='top-navigation-icon' />;
const UserCircle = () => <FaUserCircle size='24' className='top-navigation-icon' />;


const Hashtag = () => <FaHashtag size='20' className='title-hashtag' />;
const Title = () => <h1 className='title-text'>tailwind-css</h1>;
const Search = () => (
    <div className='search'>
        <input className='search-input' type='text' placeholder='Search...' />
        <FaSearch size='18' className='text-secondary my-auto' />
    </div>
)


export default Navbar;