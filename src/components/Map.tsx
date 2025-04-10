
import { useEffect, useRef } from 'react';
import { useLocale } from '../context/LocaleContext';

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const { locale } = useLocale();

  useEffect(() => {
    if (!mapRef.current) return;
    
    const mapUrl = locale === 'en' 
      ? "https://yandex.ru/map-widget/v1/?ll=38.971909%2C45.029457&z=17&l=map&pt=38.971909%2C45.029457" 
      : "https://yandex.ru/map-widget/v1/?ll=38.971909%2C45.029457&z=17&l=map&pt=38.971909%2C45.029457&lang=ru_RU";
    
    const mapContainer = mapRef.current;
    mapContainer.innerHTML = `
      <iframe 
        src="${mapUrl}" 
        width="100%" 
        height="100%" 
        frameborder="0"
        style="border:0;"
        allowfullscreen
      ></iframe>
    `;
  }, [locale]);

  return (
    <div ref={mapRef} className="w-full h-[500px] rounded-lg overflow-hidden" />
  );
};

export default Map;
