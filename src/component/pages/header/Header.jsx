import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import icon from '../../../assets/icon/icon (2).svg';
import Drawer from '../../subcomponents/Drawer.jsx';

function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const [showScroll, setShowScroll] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const location = useLocation();

    const handleShowNavbar = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleScrollUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setShowScroll(true);
        } else {
            setShowScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <nav className={`nav-background`}>
                <div className="lol-container">
                    <div className="nav-bar">
                        <div className="nav-bar-one">
                            <a href="/">
                                <img style={{ width: '103px', height: '60px' }} src={icon} alt="" />
                            </a>
                            <div className={`nav-bar-two ${showMenu && 'active'}`}>
                                <Link to={'/'} className={`nav-bar-tow-hover hover-underline-animation ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
                                <Link to={'/about'} className={`nav-bar-tow-hover hover-underline-animation ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
                                <Link to={'/skill'} className={`nav-bar-tow-hover hover-underline-animation ${location.pathname === '/skill' ? 'active' : ''}`}>Skill</Link>
                                <Link to={'/project'} className={`nav-bar-tow-hover hover-underline-animation ${location.pathname === '/project' ? 'active' : ''}`}>Project</Link>
                                <Link to={'/contact'} className={`nav-bar-tow-hover hover-underline-animation ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
                            </div>
                        </div>
                        <button className="menu-button" onClick={handleShowNavbar}>
                            <Icon icon="typcn:th-menu-outline" width="40" height="40" />
                        </button>
                    </div>
                </div>
            </nav>
            <div id="scroll-up" onClick={handleScrollUp} className={showScroll ? 'show-scroll' : ''}>
                <Icon icon="bi:arrow-up" width="30" height="30" />
            </div>

            <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <nav className="nav-responsive">
                    <Link to={'/'} onClick={() => setDrawerOpen(false)} className={`nav-bar-tow-hover hover-underline-animation ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
                    <Link to={'/about'} onClick={() => setDrawerOpen(false)} className={`nav-bar-tow-hover hover-underline-animation ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
                    <Link to={'/skill'} onClick={() => setDrawerOpen(false)} className={`nav-bar-tow-hover hover-underline-animation ${location.pathname === '/skill' ? 'active' : ''}`}>Skill</Link>
                    <Link to={'/project'} onClick={() => setDrawerOpen(false)} className={`nav-bar-tow-hover hover-underline-animation ${location.pathname === '/project' ? 'active' : ''}`}>Project</Link>
                    <Link to={'/contact'} onClick={() => setDrawerOpen(false)} className={`nav-bar-tow-hover hover-underline-animation ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
                </nav>
            </Drawer>
        </div>
    );
}

export default Header;
