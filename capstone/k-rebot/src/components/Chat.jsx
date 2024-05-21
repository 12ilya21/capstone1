import './../styles/Chat.css';
import React from 'react';
import Logout from './Logout';
import { useNavigate } from 'react-router-dom';

import {Wrapper, Status } from "@googlemaps/react-wrapper";
import Mapcustom from './Mapcustom';
import robotImg from './../food-serving (2).png';
import useImg from './../user.png'

export default function Chat() {
  const navigate = useNavigate(); 

  const onLogoutHandler = () => {
    navigate('/Login');
  };

  const render = (status) => {
    switch (status) {
      case Status.LOADING:
        return <>로딩중...</>;
      case Status.FAILURE:
        return <>에러 발생</>;
      case Status.SUCCESS:
        return <>로드 성공</>;
    }
  };

  return (
    
    <body>
      {/* <div id="googleMap" style="width: 100%;height: 700px;"></div>

  <script>
   function myMap(){
      var mapOptions = { 
            center:new google.maps.LatLng(51.508742, -0.120850),
            zoom:5
      };
 
      var map = new google.maps.Map( 
             document.getElementById("googleMap") 
            , mapOptions );
   }
</script> 
<script src="https://maps.googleapis.com/maps/api/js?key=API_KEY&callback=myMap"></script> */}

      
      <header>
        <div className='header__text-box'>
        <p className='header__k-rebot font'>K-REBOT</p>

        </div>
        <div className='header__text-box02'>
        <p className='header__logout font' onClick={onLogoutHandler}>LOGOUT</p>

        </div>
      </header>
      <div className='chat__container'>
      <aside className='lank'>
        <div className='lank__box'>
        <div className='lank__text-box'>
            {/* <p className='lank__text font'>Last week's hottest restaurants</p> */}
            <p className='lank__text font'>Map</p>
        </div>
        <Wrapper apiKey={"AIzaSyDUzFkPYEmC_-khUwbIA1HjXXhbobh7nZ0"} render={render} language='en'>
          <Mapcustom value={1} />
        </Wrapper>
        </div>



      </aside>
      <main className='main'>
        <div className='main__conversation-container'>

          <img className='main__bot-icon' src={robotImg}></img> 
          <div className='main__conversation-box'>Artificial Intelligence (AI) offers numerous advantages and has the potential to revolutionize various aspects of our lives. Here are some key advantages of AI:

Automation: AI can automate repetitive and mundane tasks, saving time and effort for humans. It can handle large volumes of data, perform complex calculations, and execute tasks with precision and consistency. This automation leads to increased productivity and efficiency in various industries.</div>
        </div> 
        <div className='main__conversation-container'>

          <div className='main__conversation-box'>hi</div>
          <img className='main__user-icon' src={useImg}></img> 

        </div> 

      </main>
      <aside className='bookmark'>
      <div className='bookmark__text-box'>
                <p className='bookmark__text font'>Bookmark</p>
                </div>
        <div className='bookmark__box'>
            
        </div>
      </aside>
      </div>
    </body>
    
  );
}