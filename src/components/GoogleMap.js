import React from 'react';
import GoogleMapReact from 'google-map-react';
import EczaneImg from '../eczane.png'


const MarkerComponent = ({ text }) => 
text === "" ? <div></div>:
    <div><img src={EczaneImg} style={{height:"40px",width:"40px"}}  alt="..."/></div>;

const GoogleMap = (props) => {

  const {pharmacy}=props;

 
 
  const defaultProps = {
    center: {
      lat: 41.66661911873516,
      lng: 26.584489657789838
    },
    zoom: 14
  };
  
    return (
      <div style={{ height: '90vh', width: '90%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDy9eRYpa7luz3gC3-MrT-psHyHmaKSbWw" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
         
        >
          <MarkerComponent
            lat={pharmacy.lat}
            lng={pharmacy.lng}
            text={pharmacy.eczaneAdi}
          />
        </GoogleMapReact>
      </div>
    );
  
  };

export default GoogleMap;