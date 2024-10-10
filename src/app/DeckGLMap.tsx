"use client"

import DeckGL from '@deck.gl/react/typed';
import { LineLayer, IconLayer } from '@deck.gl/layers/typed';
import { Map } from 'react-map-gl';

const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1Ijoid2FhcnJrIiwiYSI6ImNscW8wZWNlcTNvZ3kyam1kcWpxbDdhM28ifQ.KfFH5JK6dlfM_Xsp52GEGw';

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: 129.8877,
  latitude: 32.7435,
  zoom: 10,
  pitch: 0,
  bearing: 0
};

export default function DeckGLMap(data: any) {
  const lineLayer = new LineLayer({ id: 'line-layer', data });
  
  const iconLayer = new IconLayer({
    id: 'icon-layer',
    data: [{ position: [129.8694, 32.7335] }],
    pickable: true,
    iconAtlas: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png',
    iconMapping: {
      marker: { x: 0, y: 0, width: 128, height: 128, anchorY: 128, mask: true }
    },
    getIcon: (d: any) => 'marker',
    sizeScale: 15,
    getPosition: (d: any) => d.position,
    getSize: (d: any) => 2,
    getColor: (d: any) => [Math.sqrt(d.exits), 140, 0],
  });

  const layers = [lineLayer, iconLayer];

  return (
    <div className='w-full h-full relative'>
      <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={layers}
      >
        <Map
          mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
          style={{ width: '100%', height: '100%' }}
          mapStyle="mapbox://styles/mapbox/dark-v9"
        />
      </DeckGL>
    </div>
  );
}
