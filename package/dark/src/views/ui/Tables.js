import { Row, Col, Table, Card, CardTitle, CardBody } from 'reactstrap';
import ProjectTables from '../../components/dashboard/ProjectTable';
import CommonTable from '../../components/dashboard/CommonTable';

const Tables = () => {
  return (
    <Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* table-1*/}
      {/* --------------------------------------------------------------------------------*/}
      <Col lg="12">
        <ProjectTables />
      </Col>
      {/* --------------------------------------------------------------------------------*/}
      {/* table-2*/}
      {/* --------------------------------------------------------------------------------*/}
      <Col lg="12">
        <Card>
          <CardTitle tag="h4" className="border-bottom p-3 mb-0">
            Table with Border
          </CardTitle>
          <CardBody className="">
          <CommonTable borderval={true} />
          </CardBody>
        </Card>
      </Col>
      {/* --------------------------------------------------------------------------------*/}
      {/* table-3*/}
      {/* --------------------------------------------------------------------------------*/}
      <Col lg="12">
        <Card>
          <CardTitle tag="h4" className="border-bottom p-3 mb-0">
            Table with Striped
          </CardTitle>
          <CardBody className="">
           <CommonTable borderval={true} stripedval={true} />
          </CardBody>
        </Card>
      </Col>
      {/* --------------------------------------------------------------------------------*/}
      {/* table-3*/}
      {/* --------------------------------------------------------------------------------*/}
      <Col lg="12">
        <Card>
          <CardTitle tag="h4" className="border-bottom p-3 mb-0">
            Table with Hover
          </CardTitle>
          <CardBody className="">
            <CommonTable borderval={true} hoverval={true} />
          </CardBody>
        </Card>
      </Col>
            {/* --------------------------------------------------------------------------------*/}
      {/* table-4*/}
      {/* --------------------------------------------------------------------------------*/}
      <Col lg="12">
        <Card>
          <CardTitle tag="h4" className="border-bottom p-3 mb-0">
            Borderless Table
          </CardTitle>
          <CardBody className="">
            <CommonTable borderlessval={true} />
          </CardBody>
        </Card>
      </Col>
      {/* --------------------------------------------------------------------------------*/}
      {/* table-5*/}
      {/* --------------------------------------------------------------------------------*/}
      <Col lg="12">
        <Card>
          <CardTitle tag="h4" className="border-bottom p-3 mb-0">
            Dark variant Table
          </CardTitle>
          <CardBody className="">
           <CommonTable darkval={true} />
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Tables;
