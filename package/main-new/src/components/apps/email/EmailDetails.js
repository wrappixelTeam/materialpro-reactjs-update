import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Badge, Button, Input } from 'reactstrap';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../../../views/form-editor/editor.scss';
import Emailimg from '../../../../src/assets/images/background/emailSv.png';

const EmailDetails = () => {
  // const emailDetail = useSelector(
  //   (state) => state.emailReducer.emails[state.emailReducer.emailContent - 1],
  // );
  const emailDetail = useSelector(
    (state) => state.emailReducer.emails.find(contact => contact.id === state.emailReducer.emailContent),
  );

  const [isReplying, setIsReplying] = useState(false);

  const handleReply = () => {
    setIsReplying((prevState) => !prevState);
  };
  return (
    <>
      <div>
        {emailDetail ? (
          <>
            <div className="d-flex align-items-center p-3 border-bottom">
              <div className="">
                <img src={emailDetail.thumbnail} alt="user" className="rounded-circle" width="46" />
              </div>
              <div className="mx-3">
                <h5 className="mb-0">{emailDetail.from}</h5>
                <Badge
                  color={
                    (emailDetail.label === 'Promotional' ? 'warning' : '') +
                    (emailDetail.label === 'Social' ? 'success' : '') +
                    (emailDetail.label === 'Health' ? 'danger' : '')
                  }
                >
                  {emailDetail.label}
                </Badge>
                &nbsp;&nbsp;
                <small>To: {emailDetail.To}</small>
              </div>
            </div>
            <div className="p-4 border-bottom">
              <h5 className="mb-0 font-16 font-medium">{emailDetail.subject}</h5>
            </div>
            <div
              className="p-4 pb-3"
              dangerouslySetInnerHTML={{ __html: emailDetail.emailContent }}
            />
            <Button className="mx-4" color="primary" size="sm" outline onClick={handleReply}>
              Reply
            </Button>
            <Button color="warning" size="sm" outline >
              Forward
            </Button>

            {isReplying &&
              <div className="border rounded-3 p-3 mx-3 mt-3">
                <Editor />
              </div>
            }
          </>
        ) : (
          <div className='d-flex align-items-center p-2 justify-content-center'>
            <div>
              <p>'Please Select Email'</p>
              <div>
                <img src={Emailimg} alt='emailIcon' style={{ width: '250px', height: '250px' }} />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default EmailDetails;


