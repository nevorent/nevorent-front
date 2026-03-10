import { MapContainer, TileLayer, useMapEvent, Marker, useMapEvents, Popup } from 'react-leaflet';
import React, { useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import { Box } from '@mui/material';
import L from 'leaflet';
import AdsItem from '../ads/AdsItem';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});
function SetViewOnClick({ animateRef }) {
    useMapEvent('click', (e) => {
        e.setView(e.latlng, e.target.getZoom(), {
            animate: animateRef.current || false,
        })
    });

    return null;
}
//functia aceasta ma duce exact unde sunt dupa locatia mea -> harta deocamdata e pe Oradea
//ar trebui folosita
function MyComponent() {

    const map = useMapEvents({
        click: () => {
            map.locate();
        },
        locationfound: (location) => {
            console.log('location found:', location);
            map.flyTo(location.latlng, map.getZoom()); // Mută camera la locația găsită
        },
    });
    return null;

}
function MapBoundsListener({ ads, onBoundsChange }) {
    const map = useMapEvents({
        moveend: () => {
            const bounds = map.getBounds();
            const visibleAds = ads.filter(ad => {
                if (!ad.coordinates) return false;
                return bounds.contains([ad.coordinates.lat, ad.coordinates.lng])
            })
            if (onBoundsChange) {
                onBoundsChange(visibleAds);
            }
        }
    });
    return null;
}

const MapView = ({ ads, onBoundsChange }) => {
    const animateRef = useRef(false)
    return (

        <MapContainer
            center={[47.0467, 21.9189]}
            zoom={13}
            style={{ height: "100%", width: "100%" }}
        >
            {/* <TileLayer
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            /> */}
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <MapBoundsListener ads={ads} onBoundsChange={onBoundsChange} />
            {/* <MyComponent /> */}
            <SetViewOnClick animateRef={animateRef} />
            {ads && ads.map((ad) => (
                ad.coordinates && (
                    <Marker
                        key={ad.id}
                        position={[ad.coordinates.lat, ad.coordinates.lng]}
                    >
                        <Popup>
                            <div style={{ textAlign: 'center', maxWidth: '150px' }}>
                                {/* <img
                                    src={ad.imageUrl || 'https://via.placeholder.com/100'}
                                    alt={ad.title}
                                    style={{ width: '100%', borderRadius: '4px', marginBottom: '5px' }}
                                />
                                <div style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{ad.title}</div>
                                <div style={{ color: '#1976d2', fontWeight: 'bold', marginTop: '3px' }}>
                                    {ad.price} €
                                </div> */}
                                <AdsItem ad={ad}></AdsItem>
                            </div>
                        </Popup>
                    </Marker>
                )
            ))}
        </MapContainer>

    );
}

export default MapView;