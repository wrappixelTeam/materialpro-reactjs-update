import React from 'react';
import { DropdownItem, ListGroup, ListGroupItem } from 'reactstrap';
import { User, FileText, Star, Settings, Droplet } from 'react-feather';
import user1 from '../../assets/images/users/user4.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  ChangeTopbarColor,
  ToggleCustomizer,
  ChangeDirection,
  ChangeDarkMode,
  ChangeSidebarColor,
  ToggleTopbar,
  FixedSidebar,
  ToggleHorizontal,
} from '../../store/customizer/CustomizerSlice';
import useAuth from '../../components/authGurad/useAuth';
import { useLocation } from 'react-router-dom';

const profileItems = [
  {
   key:1,
   title:"My Profile",
   href:"/"
  },
  {
   key:2,
   title:"My Projects",
   href:"/"
  },
  {
   key:3,
   title:"Inbox",
   href:"/"
  },
]

const ProfileDD = () => {
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
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.customizer.isDark);
  const handleMode = () => {
    if(isDarkMode){
      dispatch(ChangeDarkMode(false)) && window.location.reload(false);
    }else{
      dispatch(ChangeDarkMode(true))
    }
  }
  return (
    <div>
      <div className="d-flex gap-3 p-3 border-bottom pt-2 align-items-center">
        <img src={user1} alt="user" className="rounded-circle" width="50" />
        <span>
          <h5 className="mb-0 fw-bold">John Deo</h5>
          <small className='fs-6 text-muted'>info@wrappixel.com</small>
        </span>
      </div>
      <div className=" py-3 border-bottom pt-2">
        <ListGroup flush className='profile-items px-3 bg-transparent'>
          {profileItems.map((item)=>{
            return (
              <ListGroupItem
              key={item.key}
              href={item.href}
              tag="a"
              className='border-0 fw-medium bg-transparent'
            >
              {item.title}
            </ListGroupItem>
            )
          })}
        </ListGroup>
        <DropdownItem divider className='my-3' />
        <ListGroup flush className='profile-items px-3 bg-transparent'>
        <ListGroupItem
              href='/'
              tag="a"
              className='border-0 fw-medium d-flex justify-content-between bg-transparent' onClick={handleMode}
            >
              <span>Mode</span>
              <i className={`bi ${isDarkMode?'bi-brightness-high':'bi-moon'}`}></i>
            </ListGroupItem>
            <ListGroupItem
              href='/'
              tag="a"
              className='border-0 fw-medium bg-transparent'
            >
              Account Settings
            </ListGroupItem>
            <ListGroupItem
              onClick={handleLogout}
              tag="a"
              className='border-0 fw-medium bg-transparent cursor-pointer'
            >
              Sign Out
            </ListGroupItem>
        </ListGroup>
      </div>
    </div>
  );
};

export default ProfileDD;
