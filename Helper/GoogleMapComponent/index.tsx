import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { memo, useCallback, useState } from "react";
import { toast } from "react-toastify";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 21.0277644,
  lng: 105.8341598,
};

interface IGoogleMapComponent {
  handleTakeLatLng?: any;
  mapConfig?: any;
}

function GoogleMapComponent(props: IGoogleMapComponent) {
  const { handleTakeLatLng, mapConfig } = props;

  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAooXtTDymTYgxCaO68SpxWTlf6S2YnfeY",
  });

  const [map, setMap] = useState(null);
  const [position, setPosition] = useState(center);

  const onLoad = useCallback((map: any) => {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onMapClick = (event: any) => {
    setPosition({ lat: event.latLng.lat(), lng: event.latLng.lng() });
    if (typeof handleTakeLatLng == "function") {
      handleTakeLatLng({ lat: event.latLng.lat(), lng: event.latLng.lng() });
    }
  };
  const mapOptions = {
    draggingCursor: "move",
    draggableCursor: "crosshair",
    ...mapConfig,
  };

  const onUnmount = useCallback((map: any) => {
    setMap(null);
  }, []);

  if (loadError) {
    toast("Không tải được Map", {
      type: "error",
    });
    return <center className="text-danger fs-2">Error loading maps</center>;
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}
      onLoad={onLoad}
      onUnmount={onUnmount}
      onClick={onMapClick}
      options={mapOptions}
    >
      <Marker position={position} />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default memo(GoogleMapComponent);
