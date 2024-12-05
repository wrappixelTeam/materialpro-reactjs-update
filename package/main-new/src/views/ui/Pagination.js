import React from 'react';
import { Pagination, PaginationItem, PaginationLink, Row, Col } from 'reactstrap';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';

import ComponentCard from '../../components/ComponentCard';

const PaginationComponent = () => {
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
          <ComponentCard title="Pagination">
            <Pagination>
              <PaginationItem>
                <PaginationLink
                  first
                  href="#"
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  previous
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  4
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  5
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  next
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  last
                />
              </PaginationItem>
            </Pagination>
          </ComponentCard>
        </Col>
        <Col xs="12" md="6">
          <ComponentCard title="Disabled and active states">
            <Pagination>
              <PaginationItem disabled>
                <PaginationLink
                  first
                  href="#"
                />
              </PaginationItem>
              <PaginationItem disabled>
                <PaginationLink
                  href="#"
                  previous
                />
              </PaginationItem>
              <PaginationItem active>
                <PaginationLink href="#">
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  4
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  5
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  next
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  last
                />
              </PaginationItem>
            </Pagination>
          </ComponentCard>
        </Col>
        <Col xs="12" md="6">
          <ComponentCard title="Large Size">
            <Pagination aria-label="Page navigation example" size="lg">
              <PaginationItem>
                <PaginationLink
                  first
                  href="#"
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  previous
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  4
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  5
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  next
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  last
                />
              </PaginationItem>
            </Pagination>
          </ComponentCard>
        </Col>
        <Col xs="12" md="6">
          <ComponentCard title="Small Size">
            <Pagination aria-label="Page navigation example" size="sm">
              <PaginationItem>
                <PaginationLink
                  first
                  href="#"
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  previous
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  4
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  5
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  next
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  last
                />
              </PaginationItem>
            </Pagination>
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

export default PaginationComponent;
