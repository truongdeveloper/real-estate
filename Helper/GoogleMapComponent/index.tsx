import {
  GoogleMap,
  InfoBox,
  InfoWindow,
  Marker,
  Polygon,
  useJsApiLoader,
} from "@react-google-maps/api";
import { isEmpty, uniqueId } from "lodash";
import { memo, useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { typeListRealEstate } from "../../Models/common";

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
  drawable?: boolean;
  positionProp?: {
    lat: any;
    lng: any;
  };
  listData?: typeListRealEstate[];
}

function GoogleMapComponent(props: IGoogleMapComponent) {
  const { handleTakeLatLng, mapConfig, drawable, positionProp, listData } =
    props;

  const [map, setMap] = useState<any>(null);
  const [position, setPosition] = useState(() => {
    if (positionProp) {
      return positionProp;
    } else {
      return center;
    }
  });

  const [usePolygon, setUsePolygon] = useState(false);
  const [path, setPath] = useState([
    {
      lat: 21.0877888,
      lng: 105.8641666,
    },
    {
      lat: 21.0277222,
      lng: 105.8941598,
    },

    {
      lat: 21.0277644,
      lng: 105.8341444,
    },
  ]);

  useEffect(() => {
    if (positionProp) {
      setPosition({ ...positionProp });
    }
  }, [positionProp]);

  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string,
  });

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
    draggable: !usePolygon,

    ...mapConfig,
  };

  const handleChange = () => {
    console.log("111");
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
    <div className="w-100 h-100 position-relative">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={positionProp ? position : center}
        zoom={positionProp ? 14 : 12}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={onMapClick}
        onCenterChanged={() => {}}
        options={mapOptions}
      >
        {positionProp && <Marker position={position} />}
        {handleTakeLatLng && <Marker position={position} />}
        {listData &&
          listData.map((item: typeListRealEstate) => {
            return (
              <Marker
                key={uniqueId()}
                position={{
                  lat: item.batDongSan?.viDo as any,
                  lng: item.batDongSan?.kinhDo as any,
                }}
                icon={{
                  url: "https://res.cloudinary.com/dfkh87pvy/image/upload/v1714303161/location-dot-solid_hvk12h.png",
                  scaledSize: new window.google.maps.Size(30, 40),
                }}
              >
                {/* <InfoWindow
                  position={{
                    lat: item.batDongSan?.viDo as any,
                    lng: item.batDongSan?.kinhDo as any,
                  }}
                >
                  <>
                    <div
                      style={{
                        backgroundColor: "green",
                        color: "white",
                        borderRadius: "1em",
                        padding: "0.2em",
                      }}
                    >
                      hihisdsd
                    </div>
                  </>
                </InfoWindow> */}
              </Marker>
            );
          })}

        <Polygon
          visible={usePolygon}
          options={{}}
          editable={true}
          path={path}
        />
      </GoogleMap>
      <div>
        <button
          className={`btn btn-primary position-absolute ${
            drawable ? "" : "d-none"
          }`}
          style={{ top: "1rem", right: "2rem " }}
          onClick={() => setUsePolygon(!usePolygon)}
        >
          {" "}
          Polygon{" "}
        </button>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default memo(GoogleMapComponent);
