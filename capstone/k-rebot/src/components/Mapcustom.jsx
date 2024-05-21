import { useState, useEffect, useRef } from "react"
import './../styles/Chat.css';

const Mapcustom = ({ value })=>{
    const [map, setMap] = useState(null);
    const ref = useRef();

    const restaurants = [
        [37.54629368361515, 127.05951755178427], // 코끼리 베이글
        [37.54734193857978, 127.04418165272178]  // 소녀방앗간
    ];
    useEffect(() => {
            const markerIndex = value - 1; // value 값에 따라 배열 인덱스 결정
            const markerLocation = {
                lat: restaurants[markerIndex][0],
                lng: restaurants[markerIndex][1]
            };
            const newMap = new window.google.maps.Map(ref.current, {   //지도가 한번만 로드되도록   
                center : markerLocation,
                zoom : 15,
                mapTypeId: window.google.maps.MapTypeId.ROADMAP
            });     
            
    
          const marker= new window.google.maps.Marker({
            position: markerLocation,
            title: "Hello World!",
          });
          
        //   const infowindow = new window.google.maps.InfoWindow({
        //     ariaLabel: "Uluru",
        //   });
          

        //   marker.addListener("click", () => {
        //     infowindow.open({
        //       anchor: marker,
        //       map,
        //     });
        //   });

          marker.setMap(newMap);


    },[]);

    

    return (
        <div ref={ref} id="map" className="map"></div>
    )
}

export default Mapcustom