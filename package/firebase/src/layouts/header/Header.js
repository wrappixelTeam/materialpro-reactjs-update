import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SimpleBar from 'simplebar-react';
import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from 'reactstrap';
import * as Icon from 'react-feather';
import { ReactComponent as LogoWhite } from '../../assets/images/logos/white-logo-icon.svg';
import MessageDD from './MessageDD';
import NotificationDD from './NotificationDD';
import MegaDD from './MegaDD';
import Logo from '../logo/Logo';

import user1 from '../../assets/images/users/user1.jpg';
import useAuth from '../../components/authGurad/useAuth';
import { ToggleMiniSidebar, ToggleMobileSidebar } from '../../store/customizer/CustomizerSlice';
import ProfileDD from './ProfileDD';
import Searchbar from './Searchbar';
import DarkLightMode from './DarkLightMode';

const Header = () => {
  const isDarkMode = useSelector((state) => state.customizer.isDark);
  const topbarColor = useSelector((state) => state.customizer.topbarBg);
  const dispatch = useDispatch();
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

  return (
    <Navbar
      color={topbarColor}
      dark={!isDarkMode}
      light={isDarkMode}
      expand="lg"
      className="topbar bg-gradient"
    >
      {/********Logo*******/}
      <div className="d-none d-lg-flex align-items-center logo-space">
        <Logo />
        <span className='d-sm-block d-lg-none'>
          <Button
            close
            size="sm"
            className="ms-auto"
            onClick={() => dispatch(ToggleMobileSidebar())}
          />
        </span>
      </div>
      {/******************************/}
      {/**********Toggle Buttons**********/}
      {/******************************/}
      <div className="d-flex align-items-center">
        <Button
          color={topbarColor}
          className="d-none d-lg-block mx-1 bg-transparent border-0"
          onClick={() => dispatch(ToggleMiniSidebar())}
        >
          <Icon.Menu size={18} />
        </Button>
        <NavbarBrand href="/" className="d-sm-block d-lg-none">
          <LogoWhite />
        </NavbarBrand>
        <Button
          color={topbarColor}
          className="d-sm-block d-lg-none bg-transparent border-0 mx-1"
          onClick={() => dispatch(ToggleMobileSidebar())}
        >
          <i className="bi bi-list" />
        </Button>
      </div>

      {/******************************/}
      {/**********Left Nav Bar**********/}
      {/******************************/}

      <Nav className="me-auto d-none d-lg-flex flex-row align-items-center" navbar>
          {/******************************/}
          {/**********Mega DD**********/}
          {/******************************/}
          <UncontrolledDropdown className="mx-1 dropdown-item-data">
            <DropdownToggle className="bg-transparent border-0" color={topbarColor}>
              <Icon.Grid size={18} />
            </DropdownToggle>
            <DropdownMenu className="megaDdWidth py-0">
               <MegaDD/>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem className="d-md-block d-none">
           <Searchbar/>
          </NavItem>
        </Nav>
      {/******************************/}
      {/**********Notification DD**********/}
      {/******************************/}
      <div className="d-flex align-items-center">
        <NavItem className="d-md-block d-none">
           <DarkLightMode/>
          </NavItem>
          {/******************************/}
          {/**********Notification DD**********/}
          {/******************************/}
          <UncontrolledDropdown className="mx-1 dropdown-item-data">
            <DropdownToggle className="bg-transparent border-0" color={topbarColor}>
              <Icon.MessageSquare size={18} />
            </DropdownToggle>
            <DropdownMenu className="midDdWidth p-0 rounded-4 overflow-hidden">
              <DropdownItem header className='py-3 px-4 bg-primary'>
                <span className="mb-0 fs-3 text-white fw-medium">Notifications</span>
                 <span className='fs-7 text-white mt-1 d-block'>You have 4 Notifications</span>
              </DropdownItem>
              <DropdownItem divider className='my-0' />
              <SimpleBar style={{ maxHeight: '350px' }}>
                <NotificationDD />
              </SimpleBar>
              <div className="p-2 px-3">
              <Button className="btn fs-6 rounded-pill d-flex align-items-center justify-content-center gap-1 w-100 py-2" href="/"
    tag="a"   color="primary" >
                Check All Notification <i className="bi bi-chevron-right text-white fs-7"></i>
              </Button>
              </div>
            </DropdownMenu>
          </UncontrolledDropdown>
          {/******************************/}
          {/**********Message DD**********/}
          {/******************************/}
          <UncontrolledDropdown className="mx-1 dropdown-item-data">
            <DropdownToggle className="bg-transparent border-0" color={topbarColor}>
              <Icon.Mail size={18} />
            </DropdownToggle>
            <DropdownMenu className="midDdWidth p-0 rounded-4 overflow-hidden">
            <DropdownItem header className='py-3 px-4 bg-success'>
                <span className="mb-0 fs-3 text-white fw-medium">Messages</span>
                 <span className='fs-7 text-white mt-1 d-block'>You have 5 new messages</span>
              </DropdownItem>
              <SimpleBar style={{ maxHeight: '350px' }}>
                <MessageDD />
              </SimpleBar>
              <DropdownItem divider />
              <div className="p-2 px-3">
              <Button className="btn fs-6 rounded-pill d-flex align-items-center justify-content-center gap-1 w-100 py-2" href="/"
    tag="a"   color="success" >
                Check All Messages <i className="bi bi-chevron-right text-white fs-7"></i>
              </Button>
              </div>
            </DropdownMenu>
          </UncontrolledDropdown>
          {/******************************/}
          {/**********Profile DD**********/}
          {/******************************/}
          <UncontrolledDropdown>
            <DropdownToggle color="transparent">
              <img src={user1} alt="profile" className="rounded-circle" width="30" />
            </DropdownToggle>
            <DropdownMenu className="ddWidth profile-dd">
              <ProfileDD />
            </DropdownMenu>
          </UncontrolledDropdown>

        </div>
    </Navbar>
  );
};

export default Header;
