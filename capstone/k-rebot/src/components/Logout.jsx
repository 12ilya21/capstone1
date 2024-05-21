import React from 'react';
import { useNavigate } from 'react-router-dom';
import axiosClient from '../api/api_client'; // axiosClient import

const Logout = () => {
  const navigate = useNavigate();

  const onLogoutHandler = () => {
    navigate('/Login');


    // axiosClient
    //   .post('/api/logout') // 서버로 로그아웃 요청 보내기
    //   .then((response) => {
    //     console.log('로그아웃 성공:', response);
    //     // 성공적으로 로그아웃 처리되면 클라이언트의 상태 초기화 등의 작업 수행
    //     // 예: 사용자 정보 초기화, 인증 토큰 삭제 등

    //     // 사용자를 로그인 페이지로 리디렉션
    //     navigate('/Login');
    //   })
    //   .catch((error) => {
    //     console.error('>>> [로그아웃] 🤬 ERROR >>>', error);
    //     // 로그아웃 실패 처리
    //     // 예: 에러 메시지 표시 등
    //   });
  };

  return(
    {onLogoutHandler}

  );

};

export default Logout;
