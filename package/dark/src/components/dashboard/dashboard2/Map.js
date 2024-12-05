import React from 'react';
import VectorMap, { Layer, Tooltip, LoadingIndicator, Size } from 'devextreme-react/vector-map';
import * as mapsData from 'devextreme-dist/js/vectormap-data/usa.js';
import DashCard from '../dashboardCards/DashCard';
import '../../../views/maps/VectorMap.css';

import { markers } from './data';

const bounds = [-118, 52, -80, 20];

function TooltipTemplate(info) {
  const name = info.attribute('name');

  return (
    <>
      <h6>{info.attribute('name')}</h6>
    </>
  );
}

const Map = () => {
  return (
    <DashCard title="Current Visitors" subtitle="Different Devices Used to Visit">
      <div className="text-center mt-3 mb-3 overflow-hidden" style={{ height: '230px' }}>
        <VectorMap id="vector-map" bounds={bounds}>
          <Size height={220} width="100%" />
          <Layer dataSource={mapsData.usa} hoverEnabled={false} borderColor="#ffffff"></Layer>
          <Layer dataSource={markers} />

          <LoadingIndicator show={true} />
          <Tooltip enabled={true} contentRender={TooltipTemplate} />
        </VectorMap>
      </div>
      <div className="hstack gap-2 mt-5 pt-4 justify-content-center pb-1">
        <div className="d-flex align-items-center text-success fs-6">
          <i className="bi bi-circle-fill fs-7 me-2"></i>Valley
        </div>
        <div className="d-flex align-items-center text-primary fs-6">
          <i className="bi bi-circle-fill fs-7 me-2"></i>Newyork
        </div>
        <div className="d-flex align-items-center text-danger fs-6">
          <i className="bi bi-circle-fill fs-7 me-2"></i>Kansas
        </div>
      </div>
    </DashCard>
  );
};

export default Map;
