import mapboxgl from "@neshan-maps-platform/mapbox-gl";
import "@neshan-maps-platform/mapbox-gl/dist/NeshanMapboxGl.css";
import { useEffect, useRef } from "react";

function Map_showLoc({ position }) {
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (mapContainerRef.current) {
      mapRef.current = new mapboxgl.Map({
        mapType: mapboxgl.Map.mapTypes.neshanVector,
        container: mapContainerRef.current,
        zoom: 12,
        pitch: 0,
        center: position,
        minZoom: 2,
        maxZoom: 21,
        trackResize: true,
        mapKey: "web.3c1e919c4bbd46549db529eb9dd0b31b",
        poi: false,
        traffic: false,
        mapTypeControllerOptions: {
          show: false,
        },
      });

      // اضافه کردن مارکر ثابت به موقعیت اولیه
      new mapboxgl.Marker({ color: "#005DAD" })
        .setLngLat(position)
        .addTo(mapRef.current);
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, [position]);

  return (
    <div dir="rtl" className="flex-col flex justify-center gap-2 items-center">
      <div className="w-full relative flex flex-col items-center">
        <div
          className="w-full h-full rounded-xl"
          style={{ height: "250px" }}
          ref={mapContainerRef}
        >
          map
        </div>
      </div>
    </div>
  );
}

export default Map_showLoc;