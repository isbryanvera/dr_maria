import { useEffect, useRef } from 'react';

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    new window.google.maps.Map(mapRef.current, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }, []);

  return <div ref={mapRef} style={{ height: '400px', width: '100%' }} />;
};

export {Map};
