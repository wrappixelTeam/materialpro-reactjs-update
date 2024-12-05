import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SimpleBar from 'simplebar-react';
import {

  Modal,
   ModalHeader,
    ModalBody,
     Input,
     ListGroup,
     ListGroupItem
} from 'reactstrap';
import * as Icon from 'react-feather';
import { useState } from 'react';

const searchItems = [
    {
      id: 1,
      title: 'Modern',
      desc: '/dashboards/dashboard1',
    },
    {
      id: 2,
      title: 'Dashboard',
      desc: '/dashboards/dashboard2',
    },
    {
      id: 3,
      title: 'Contacts',
      desc: '/apps/contacts',
    },
    {
      id: 4,
      title: 'Posts',
      desc: '/apps/blog/posts',
    },
    {
      id: 5,
      title: 'Detail',
      desc: '/apps/blog/detail/streaming-video-way-before-it-was-cool-go-dark-tomorrow',
    },
    {
      id: 6,
      title: 'Shop',
      desc: '/apps/ecommerce/shop',
    },
    {
        id: 7,
        title: 'Modern',
        desc: '/dashboards/dashboard1',
      },
      {
        id: 8,
        title: 'Dashboard',
        desc: '/dashboards/dashboard2',
      },
      {
        id: 9,
        title: 'Contacts',
        desc: '/apps/contacts',
      },
  ];

const Searchbar = () => {
    const [modal, setModal] = useState(false);
    const [searchData , setSearchData] = useState(searchItems);
    const topbarColor = useSelector((state) => state.customizer.topbarBg);
    const toggle = () => {
      setModal(!modal);
    };
    const handleInput = (e) => {
      const counterText = e.target.value;
      const filteredSearch = searchItems.filter((item)=>{
        return item.title.toLowerCase().includes(counterText);
      });
      setSearchData(filteredSearch);
    }
  return (
    <div className='dropdown-item-data '>
    <div className={`nav-link cursor-pointer ${topbarColor === 'white' ? 'text-dark' : 'text-white'}`} onClick={toggle.bind(null)}>
    <Icon.Search size={18} />
    </div>
    <Modal isOpen={modal} toggle={toggle.bind(null)} className='modal-lg'>
      <ModalHeader toggle={toggle}>
      <Input type="text" className='input-header' onChange={handleInput}  />
      </ModalHeader>
      <ModalBody>
      <SimpleBar style={{ maxHeight: '350px' }}>
      <ListGroup flush>
        {searchData.map((item) => (
          <ListGroupItem action key={item.id} tag="a" href="/" className='border-0 bg-hover-light'>
              <h6 className="h6 fs-6 fw-bold mb-1">{item.title}</h6>
              <span className="fs-7 fw-normal text-muted d-block">{item.desc}</span>
          </ListGroupItem>
        ))}
      </ListGroup>
      </SimpleBar>
      </ModalBody>
    </Modal>
</div>
  )
}

export default Searchbar