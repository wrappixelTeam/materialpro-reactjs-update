import { ListGroup, ListGroupItem } from 'reactstrap';
import { User, Link, Calendar, Settings } from 'react-feather';

const messages = [
  {
    id: 1,
    iconclass: <Link width={18} />,
    iconbg: 'warning',
    title: 'Launch Admin',
    desc: 'Just see my new admin!',
    time: '9:30 AM',
  },
  {
    id: 2,
    iconclass: <Calendar width={18} />,
    iconbg: 'success',
    title: 'Event Today',
    desc: 'Just a reminder that you have event.',
    time: '9:10 PM',
  },
  {
    id: 3,
    iconclass: <Settings width={18} />,
    iconbg: 'info',
    title: 'Settings',
    desc: 'You can customize this template as you want.',
    time: '9:08 AM',
  },
  {
    id: 4,
    iconclass: <User width={18} />,
    iconbg: 'danger',
    title: 'Check Email',
    desc: 'Just check my admin!',
    time: '9:02 AM',
  },
  {
    id: 5,
    iconclass: <Calendar width={18} />,
    iconbg: 'success',
    title: 'Event Today',
    desc: 'Just a reminder that you have event.',
    time: '9:10 PM',
  },
];

const NotificationDD = () => {
  return (
    <div>
      <ListGroup flush>
        {messages.map((msg) => (
          <ListGroupItem action key={msg.id} tag="a" href="/" className='bg-hover-light'>
            <div className="d-flex align-items-center gap-3 py-2">
              <div
                className={`circle-box md-box flex-shrink-0 fs-5 bg-light-${msg.iconbg} text-${msg.iconbg}`}
              >
                {msg.iconclass}
              </div>
              <div className="col-9">
               <div className='d-flex justify-content-between'> 
               <h5 className="mb-0 fw-bold fs-6">{msg.title}</h5>
               <small className="text-muted fs-7">{msg.time}</small>
               </div>
                <span className="text-muted text-truncate d-block fs-7">{msg.desc}</span>
              </div>
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default NotificationDD;
