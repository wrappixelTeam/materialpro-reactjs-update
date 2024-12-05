import React, { useState } from 'react';
import {
  Button,
  Modal,
  Input,
  Label,
  Form,
  FormGroup,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
} from 'reactstrap';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ComponentCard from '../../components/ComponentCard';

const ModalComponent = () => {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);
  const [modal5, setModal5] = useState(false);
  const [modal6, setModal6] = useState(false);
  const [modal7, setModal7] = useState(false);
  const [modal8, setModal8] = useState(false);
  const [modal9, setModal9] = useState(false);
  const [backdrop, setBackdrop] = useState(true);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const toggle2 = () => {
    setModal2(!modal2);
  };

  const toggle3 = () => {
    setModal3(!modal3);
  };

  const toggle4 = () => {
    setModal4(!modal4);
  };

  const toggle5 = () => {
    setModal5(!modal5);
  };

  const toggle6 = () => {
    setModal6(!modal6);
  };

  const toggle7 = () => {
    setModal7(!modal7);
  };

  const toggle8 = () => {
    setModal8(!modal8);
  };

  const toggle9 = () => {
    setModal9(!modal9);
  };

  const toggleNested = () => {
    setCloseAll(true);
    setNestedModal(!nestedModal);
  };

  const toggleAll = () => {
    setCloseAll(true);
    setNestedModal(!nestedModal);
  };

  const changeBackdrop = (e) => {
    let { value } = e.target;
    if (value !== 'static') {
      value = JSON.parse(value);
    }
    setBackdrop(value);
  };

  const externalCloseBtn = (
    <Button
      className="close"
      style={{
        position: 'absolute',
        right: '15px',
        top: '15px',
      }}
      onClick={toggle6}
    >
      &times;
    </Button>
  );

  return (
    <div>
      <BreadCrumbs />
      {/* --------------------------------------------------------------------------------*/}
      {/* Start Inner Div*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* Row*/}
      {/* --------------------------------------------------------------------------------*/}
      <Row>
        <Col xs="12" md="6">
          <ComponentCard title="Modals">
            <Button color="primary" onClick={toggle}>
              Launch Modal
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}>Modal title</ModalHeader>
              <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={toggle}>
                  Do Something
                </Button>
                <Button color="secondary" onClick={toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </ComponentCard>
        </Col>

        <Col xs="12" md="6">
          <ComponentCard title="Nested Modals">
            <Button color="primary" onClick={toggle3}>
              Launch Modal w/ Nested Example
            </Button>
            <Modal isOpen={modal3} toggle={toggle3}>
              <ModalHeader toggle={toggle3}>Modal title</ModalHeader>
              <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
                <br />
                <Button color="success" onClick={toggleNested}>
                  Show Nested Modal
                </Button>
                <Modal
                  isOpen={nestedModal}
                  toggle={toggleNested}
                  onClosed={closeAll ? toggle : undefined}
                >
                  <ModalHeader>Nested Modal title</ModalHeader>
                  <ModalBody>Stuff and things</ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={toggleNested}>
                      Done
                    </Button>
                    <Button color="secondary" onClick={toggleAll}>
                      All Done
                    </Button>
                  </ModalFooter>
                </Modal>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={toggle3}>
                  Do Something
                </Button>
                <Button color="secondary" onClick={toggle3}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </ComponentCard>
        </Col>

        <Col xs="12" md="6">
          <ComponentCard title="Modals with Custom Transition Timeouts">
            <Button color="primary" onClick={toggle4}>
              Launch Modal with Custom Transition Timeouts Example
            </Button>
            <Modal
              isOpen={modal4}
              modalTransition={{ timeout: 700 }}
              backdropTransition={{ timeout: 1300 }}
              toggle={toggle4}
            >
              <ModalHeader toggle={toggle4}>Modal title</ModalHeader>
              <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={toggle4}>
                  Do Something
                </Button>
                <Button color="secondary" onClick={toggle4}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </ComponentCard>
        </Col>
        <Col xs="12" md="6">
          <ComponentCard title="Launch Modal without Fade Effect Example">
            <Button color="primary" onClick={toggle5}>
              Launch Modal without Fade Effect Example
            </Button>
            <Modal isOpen={modal5} fade={false} toggle={toggle5}>
              <ModalHeader toggle={toggle5}>Modal title</ModalHeader>
              <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={toggle5}>
                  Do Something
                </Button>
                <Button color="secondary" onClick={toggle5}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </ComponentCard>
        </Col>
        <Col xs="12" md="6">
          <ComponentCard title="Modals with external button">
            <Button color="primary" onClick={toggle6}>
              Modals with external button
            </Button>
            <Modal isOpen={modal6} toggle={toggle6} external={externalCloseBtn}>
              <ModalHeader>Modal title</ModalHeader>
              <ModalBody>
                <b>Look at the top right of the page/viewport!</b>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={toggle6}>
                  Do Something
                </Button>
                <Button color="secondary" onClick={toggle6}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </ComponentCard>
        </Col>
        <Col xs="12" md="6">
          <ComponentCard title="Modals with custom close icon">
            <Button color="primary" onClick={toggle7}>
              Modals with custom close icon
            </Button>
            <Modal isOpen={modal7} toggle={toggle7}>
              <ModalHeader toggle={toggle7} charCode="Y">
                Modal title
              </ModalHeader>
              <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={toggle7}>
                  Do Something
                </Button>
                <Button color="secondary" onClick={toggle7}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </ComponentCard>
        </Col>
        <Col xs="12" md="6">
          <ComponentCard title="Fullscreen">
            <Button color="primary" onClick={toggle8}>
              Launch Modals with Fullscreen
            </Button>
            <Modal isOpen={modal8} toggle={toggle8} fullscreen>
              <ModalHeader toggle={toggle8} charCode="Y">
                Modal title
              </ModalHeader>
              <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={toggle8}>
                  Do Something
                </Button>
                <Button color="secondary" onClick={toggle8}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </ComponentCard>
        </Col>
        <Col xs="12" md="6">
          <ComponentCard title="Fadeless Modals">
            <Button color="primary" onClick={toggle9}>
              Launch Fadeless Modals
            </Button>
            <Modal isOpen={modal9} fade={false} toggle={toggle9}>
              <ModalHeader toggle={toggle9} charCode="Y">
                Modal title
              </ModalHeader>
              <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={toggle9}>
                  Do Something
                </Button>
                <Button color="secondary" onClick={toggle9}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </ComponentCard>
        </Col>
        <Col xs="12" md="6">
          <ComponentCard title="Backdrop">
            <Form className="d-flex align-items-center" onSubmit={(e) => e.preventDefault()}>
              <FormGroup>
                <Label for="backdrop">Backdrop value</Label>
                <Input
                  type="select"
                  name="backdrop"
                  id="backdrop"
                  onChange={(e) => changeBackdrop(e)}
                >
                  <option defaultValue="true">true</option>
                  <option defaultValue="false">false</option>
                  <option defaultValue="static">static</option>
                </Input>
              </FormGroup>
              <Button color="primary" className="ms-2 mt-3" onClick={toggle2}>
                Launch Modal
              </Button>
            </Form>
            <Modal isOpen={modal2} toggle={toggle2} backdrop={backdrop}>
              <ModalHeader toggle={toggle2}>Modal title</ModalHeader>
              <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={toggle2}>
                  Do Something
                </Button>
                <Button color="secondary" onClick={toggle2}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </ComponentCard>
        </Col>
      </Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* Row*/}
      {/* --------------------------------------------------------------------------------*/}

      {/* --------------------------------------------------------------------------------*/}
      {/* End Inner Div*/}
      {/* --------------------------------------------------------------------------------*/}
    </div>
  );
};

export default ModalComponent;
