import React, { useCallback, useRef } from 'react';
import VectorMap, { Layer, Tooltip, Label } from 'devextreme-react/vector-map';
import * as mapsData from 'devextreme-dist/js/vectormap-data/world.js';
import './VectorMap.css';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import { pangaeaBorders, pangaeaContinents } from './data.js';
import ComponentCard from '../../components/ComponentCard';

const markers = [
  {
    coordinates: [-0.1262, 51.5002],
    attributes: {
      name: 'London',
    },
  },
  {
    coordinates: [149.1286, -35.282],
    attributes: {
      name: 'Canberra',
    },
  },
  {
    coordinates: [139.6823, 35.6785],
    attributes: {
      name: 'Tokyo',
    },
  },
  {
    coordinates: [-77.0241, 38.8921],
    attributes: {
      name: 'Washington',
    },
  },
  {
    coordinates: [-75.6794, 45.4214],
    attributes: {
      name: 'Ottawa',
    },
  },
  {
    coordinates: [37.617778, 55.751667],
    attributes: {
      name: 'Moscow',
    },
  },
  {
    coordinates: [116.4, 39.933333],
    attributes: {
      name: 'Beijing',
    },
  },
  {
    coordinates: [12.5, 41.9],
    attributes: {
      name: 'Rome',
    },
  },
  {
    coordinates: [23.716667, 38],
    attributes: {
      name: 'Athens',
    },
  },
  {
    coordinates: [2.333333, 48.833333],
    attributes: {
      name: 'Paris',
    },
  },
  {
    coordinates: [-3.683333, 40.4],
    attributes: {
      name: 'Madrid',
    },
  },
  {
    coordinates: [-47.866667, -15.798889],
    attributes: {
      name: 'Brasilia',
    },
  },
];

// 1
const bounds = [-180, 85, 180, -60];
const customizeTooltip = (arg) => {
  if (arg.layer.type === 'marker') {
    return { text: arg.attribute('name') };
  }
  return null;
};
const markerClick = ({ target, component }) => {
  if (target?.layer.type === 'marker') {
    component.center(target.coordinates()).zoomFactor(10);
  }
};

// 2
const projection = {
  to: ([l, lt]) => [l / 100, lt / 100],
  from: ([x, y]) => [x * 100, y * 100],
};
const customizeLayer = (elements) => {
  elements.forEach((element) => {
    element.applySettings({
      color: element.attribute('color'),
    });
  });
};

const CustomVectorMap = () => {
  const vectorMapRef = useRef(null);

  return (
    <>
      <BreadCrumbs />
      <ComponentCard title="World Map">
        <VectorMap
          ref={vectorMapRef}
          backgroundColor="transparent"
          id="vector-map"
          onClick={markerClick}
          bounds={bounds}
        >
          <Layer dataSource={mapsData.world} hoverEnabled={false} />
          <Layer dataSource={markers} />
          <Tooltip enabled={true} customizeTooltip={customizeTooltip} />
        </VectorMap>
      </ComponentCard>
      <ComponentCard title="Pangaea Map">
        <VectorMap id="vector-map" maxZoomFactor={2} projection={projection}>
          <Layer
            dataSource={pangaeaBorders}
            hoverEnabled={false}
            name="pangaea"
            color="#bb7862"
          ></Layer>
          <Layer dataSource={pangaeaContinents} customize={customizeLayer}>
            <Label enabled={true} dataField="name"></Label>
          </Layer>
        </VectorMap>
      </ComponentCard>
    </>
  );
};

export default CustomVectorMap;
