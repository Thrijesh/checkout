import {
	GoogleMap,
	withScriptjs,
	withGoogleMap,
	Marker,
} from 'react-google-maps';
import React from 'react'

function Map({ location }: any) {
	return (
		<React.Fragment>
			<GoogleMap
				defaultZoom={10}
				defaultCenter={{
					lat: location ? location.lat : 22,
					lng: location ? location.lng : 88,
				}}
			>
				{location && <Marker position={{ ...location }} draggable />}
			</GoogleMap>
		</React.Fragment>
	);
}

export const MapContainer = withScriptjs(withGoogleMap(Map));
