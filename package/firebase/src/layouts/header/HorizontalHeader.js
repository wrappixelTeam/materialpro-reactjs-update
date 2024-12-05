import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Container
} from 'reactstrap';
import * as Icon from 'react-feather';
import { Bell, MessageSquare } from 'react-feather';
import { useSelector, useDispatch } from 'react-redux';
import SimpleBar from 'simplebar-react';
import MessageDD from './MessageDD';
import NotificationDD from './NotificationDD';
import MegaDD from './MegaDD';
import user1 from '../../assets/images/users/user1.jpg';

import { ToggleMobileSidebar } from '../../store/customizer/CustomizerSlice';
import ProfileDD from './ProfileDD';

import HorizontalLogo from '../logo/HorizontalLogo';
import Searchbar from './Searchbar';
import DarkLightMode from './DarkLightMode';

const HorizontalHeader = () => {
  const isDarkMode = useSelector((state) => state.customizer.isDark);
  const topbarColor = useSelector((state) => state.customizer.topbarBg);
  const isMobileSidebar = useSelector((state) => state.customizer.isMobileSidebar);
  const dispatch = useDispatch();

  return (
    <Navbar
      color={topbarColor}
      dark={!isDarkMode}
      light={isDarkMode}
      expand="lg"
      className="shadow HorizontalTopbar p-0"
    >
      <Container className="d-flex align-items-center">
        {/******************************/}
        {/**********Logo**********/}
        {/******************************/}
        <div className="pe-4 py-3 ">
          <HorizontalLogo />
        </div>
        {/******************************/}
        {/**********Toggle Buttons**********/}
        {/******************************/}

        <Nav className="me-auto flex-row" navbar>
          <Button
            color={topbarColor}
            className="d-sm-block d-lg-none"
            onClick={() => dispatch(ToggleMobileSidebar())}
          >
            <i className={`bi ${isMobileSidebar ? 'bi-x' : 'bi-list'}`} />
          </Button>

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
            <DropdownToggle tag="span" className="p-2 cursor-pointer ">
              <img src={user1} alt="profile" className="rounded-circle" width="30" />
            </DropdownToggle>
            <DropdownMenu className="ddWidth">
              <ProfileDD />
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </Container>
    </Navbar>
  );
};

export default HorizontalHeader;
