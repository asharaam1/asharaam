import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../leaflet-fix.css'; // Changed from 'leaflet/dist/leaflet.css'
import L from 'leaflet';

// Fix for default marker icon issue in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapComponent = ({ position = [24.8607, 67.0011], zoom = 13 }) => { // Default to Karachi coordinates
  return (
    <div className="h-[400px] w-full rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800">
      <MapContainer 
        center={position} 
        zoom={zoom} 
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            My Location
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;