import React, { useState } from 'react';
import { Button, Nav } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SimpleBar from 'simplebar-react';
import SidebarData from '../sidebardata/SidebarData';
import NavItemContainer from './NavItemContainer';
import NavSubMenu from './NavSubMenu';
import user1 from '../../../assets/images/users/user4.jpg';
import probg from '../../../assets/images/bg/download.jpg';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import useAuth from '../../../components/authGurad/useAuth';

const Sidebar = () => {
  const location = useLocation();
  const currentURL = location.pathname.split('/').slice(0, -1).join('/');
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (err) {
      // eslint-disable-next-line no-alert
      alert(err);
    }
  };

  //const [collapsed, setCollapsed] = useState(null);
  // const toggle = (index) => {
  //   setCollapsed(collapsed === index ? null : index);
  // };

  const activeBg = useSelector((state) => state.customizer.sidebarBg);
  const isFixed = useSelector((state) => state.customizer.isSidebarFixed);
  // const dispatch = useDispatch();
  const [isOpen5, setIsOpen5] = useState(false);

  const toggle5 = () => {
    setIsOpen5(!isOpen5);
  };

  return (
    <div className={`sidebarBox shadow bg-${activeBg} ${isFixed ? 'fixedSidebar' : ''}`}>
      <SimpleBar style={{ height: '100%' }}>
      <div className="profilebg" style={{ background: `url(${probg}) no-repeat` }}>
          <div className="p-3 d-flex">
            <img src={user1} alt="user" width="50" className="rounded-circle" />
          </div>
          <Dropdown isOpen={isOpen5} toggle={toggle5.bind(null)}>
            <DropdownToggle color="transparent" className='bg-dark border-0 text-dark-white p-2 px-3 d-flex justify-content-between opacity-75 text-truncate w-100'>
              Steave Rojer
              <i className="bi bi-caret-down-fill"></i>
            </DropdownToggle>
            <DropdownMenu className='start-50 profile-dropdown shadow-lg'>
              <DropdownItem href='/sample-pages/profile' className='dropdown-item d-flex align-items-center gap-2 py-2'>
                <i className="bi bi-person fs-4 text-primary"></i> My Profile
              </DropdownItem>
              <DropdownItem href='/apps/notes' className='dropdown-item d-flex align-items-center gap-2 py-2'>
              <i className="bi bi-card-list fs-4 text-primary"></i> My Notes
              </DropdownItem>
              <DropdownItem href='/apps/email' className='dropdown-item d-flex align-items-center gap-2 py-2'>
                <i className="bi bi-envelope fs-4 text-success"></i> My Inbox
              </DropdownItem>
              <div className="dropdown-divider"></div>
              <DropdownItem href='/widget' className='dropdown-item d-flex align-items-center gap-2 py-2'>
                <i className="bi bi-gear fs-4 text-warning"></i> Account Setting
              </DropdownItem>
              <div className="dropdown-divider"></div>
              <DropdownItem onClick={handleLogout} className='dropdown-item d-flex align-items-center gap-2 py-2'>
                <i className="bi bi-box-arrow-right fs-4 text-danger"></i> Logout
              </DropdownItem>
              <div className="dropdown-divider"></div>          
             <div className='p-2 px-3'>
             <Button className="btn fs-6 rounded-pill w-100 py-2"     href="/sample-pages/profile"
    tag="a"   color="primary" >
                View Profile
              </Button>
             </div>
            </DropdownMenu>
          </Dropdown>

        </div>
        {/********Sidebar Content*******/}
        <div className="p-3 pt-1 mt-2">
          <Nav vertical className={activeBg === 'white' ? '' : 'lightText'}>
            {SidebarData.map((navi) => {
              if (navi.caption) {
                return (
                  <div className="navCaption fw-bold mt-4" key={navi.caption}>
                    {navi.caption}
                  </div>
                );
              }
              if (navi.children) {
                return (
                  <NavSubMenu
                    key={navi.id}
                    icon={navi.icon}
                    title={navi.title}
                    items={navi.children}
                    suffix={navi.suffix}
                    suffixColor={navi.suffixColor}
                    // toggle={() => toggle(navi.id)}
                    // collapsed={collapsed === navi.id}
                    isUrl={currentURL === navi.href}
                  />
                );
              }
              return (
                <NavItemContainer
                  key={navi.id}
                  //toggle={() => toggle(navi.id)}
                  className={location.pathname === navi.href ? 'activeLink' : ''}
                  to={navi.href}
                  title={navi.title}
                  suffix={navi.suffix}
                  suffixColor={navi.suffixColor}
                  icon={navi.icon}
                />
              );
            })}
          </Nav>
        </div>
      </SimpleBar>
    </div>
  );
};

export default Sidebar;
