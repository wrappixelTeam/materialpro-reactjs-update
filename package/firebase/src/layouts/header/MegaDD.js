import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Row,
  Col,
  CardTitle,
  Button,
} from 'reactstrap';

import contact1 from '../../assets/images/users/user1.jpg';
import contact2 from '../../assets/images/users/user2.jpg';
import contact3 from '../../assets/images/users/user3.jpg';

const appData = [
  {
    id: 1,
    iconclass: 'bi-chat-square-text',
    iconbg: 'primary',
    title: 'Chat Application',
    desc: 'New messages arrived',
    href:"/apps/chat"
  },
  {
    id: 2,
    iconclass: 'bi-person',
    iconbg: 'danger',
    title: 'User Profile',
    desc: 'learn more information',
    href:"/sample-pages/profile"
  },
  {
    id: 3,
    iconclass: 'bi-card-text',
    iconbg: 'success',
    title: 'Notes App',
    desc: 'Get latest invoice',
    href:"/apps/notes"
  },
  {
    id: 4,
    iconclass: 'bi-calendar3',
    iconbg: 'info',
    title: 'Calendar App',
    desc: 'Get dates',
    href:"/apps/calendar"
  },
  {
    id: 5,
    iconclass: 'bi-journal-text',
    iconbg: 'warning',
    title: 'Contact Application',
    desc: '2 Unsaved Contacts',
    href:"/apps/contacts"
  },
  {
    id: 6,
    iconclass: 'bi-ticket-perforated',
    iconbg: 'primary',
    title: 'Ticket Application',
    desc: 'Get new tickets',
    href:"/tickt/ticket-list"
  },
  {
    id: 7,
    iconclass: 'bi-envelope',
    iconbg: 'primary',
    title: 'Email Application',
    desc: '2 unread messages',
    href:"/apps/email"
  },
  {
    id: 8,
    iconclass: 'bi-cart3',
    iconbg: 'info',
    title: 'eCommerce',
    desc: 'Buy more products',
    href:"/ecom/shop"
  },
];

const quickLinks = [
  {
    id: 1,
    title: 'Pricing Page',
    href:"/"
  },
  {
    id: 2,
    title: 'Authentication Design',
    href:"/auth/loginformik"
  },
  {
    id: 3,
    title: 'Register Now',
    href:"/auth/registerformik"
  },
  {
    id: 4,
    title: '404 Error Page',
    href:"/auth/404"
  },
  {
    id: 5,
    title: 'Notes App',
    href:"/apps/notes"
  },
  {
    id: 6,
    title: 'User Application',
    href:"/sample-pages/profile"
  },
  {
    id: 7,
    title: 'Account Settings',
    href:"/"
  },
]

const contactData = [
  {
    id: 1,
    uimg: contact1,
    uname: 'James Anderson',
  },
  {
    id: 2,
    uimg: contact2,
    uname: 'Michael Jorden',
  },
  {
    id: 3,
    uimg: contact3,
    uname: 'Johnathan Doeting',
  },
];

const MegaDD = () => {
  return (
    <>
      <Row className='bg-white rounded-4 overflow-hidden'>
        <Col lg="8">
          <div className='border-end border-dark border-opacity-10'>
          <Row className="mt-0 ps-4 gy-2 py-3">
            {appData.map((item) => (
              <Col lg="6" key={item.id}>
            <a className="d-flex align-items-center gap-3 py-2 megaItem text-decoration-none " href={item.href}>
              <div
                className={`circle-box md-box flex-shrink-0 bg-light-${item.iconbg} text-${item.iconbg}`}
              >
                <i className={`bi ${item.iconclass}`}></i>
              </div>
              <div>
                <h5 className="mb-0 fw-bold fs-6">{item.title}</h5>
                <span className="text-muted text-truncate d-block fs-6">{item.desc}</span>
              </div>
            </a>
              </Col>
            ))}
          </Row>
          <div className='d-flex justify-content-between flex-wrap p-4 py-3 border-top border-dark border-opacity-10'>
          <a className="text-dark d-flex align-items-center fw-normal gap-2 lh-1 fs-6 bg-hover-primary text-decoration-none" href="/"><i className="bi bi-question-circle fs-4"></i>Frequently Asked Questions</a>
          <Button className="btn fs-6 rounded-pill  py-2"     href="/"
    tag="a"   color="primary" >
                Check
              </Button>
          </div> 
          </div>
        </Col>
        <Col lg="4" className='ps-0 bg-transparent'>
          <CardTitle tag="h4"  className='my-4 mb-3 text-dark fw-bold'>Quick Links</CardTitle>
          <ListGroup flush className='bg-transparent'>
          {quickLinks.map((ldata) => (
            
              <ListGroupItem
              key={ldata.id}
                href={`${ldata.href}`}
                action
                tag="a"
                className="d-flex align-items-center bg-transparent border-0 text-dark px-0 py-2 bg-hover-primary"
              >
               {ldata.title}
              </ListGroupItem>
            
          ))}
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default MegaDD;
