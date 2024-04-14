import IdleTimer from "react-idle-timer";
import { useRef, useState } from "react";
import SessionModal from "./SessionModal";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { useNavigate } from 'react-router-dom';

import Timer from "./Timer";

const IDLE_TIMEOUT = 6000;
const FINAL_TIMEOUT = 5;
function RBIdleTimer({ children }) {
    const location = window.location.href;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isClick, setIsClick] = useState(false);

  const navigate = useNavigate();


  const timeoutRef = useRef(null);
  const timerRef = useRef();

  const handleLogout = () => {
    if (!location.includes("/login")) {
        clearTimeout(timeoutRef.current);
        handleClose();
        navigate('/login');
        console.log("logout");
    }
    // navigate('/login');

  };

  const handleStayConnected = () => {
    clearTimeout(timeoutRef.current);
    timerRef.current.reset();
    handleClose();
    setIsClick(false);
    console.log("reset session");
  };

  const handleOnIdle = (event) => {
    if (!location.includes("/login")) {
        setIsClick(false);
        handleShow();
        timeoutRef.current = setTimeout(handleLogout, FINAL_TIMEOUT * 1000);
        // console.log("user is idle", event);
    }


  };

  const handleOnAction = (event) => {
    // console.log(event);
    if (isClick) {
      handleStayConnected();
    }
  };

  const handleOnActive = (event) => {
    console.log(event);
  };

  return (
    <div>
        <Modal show={show}>
          <Modal.Header>
            <Modal.Title>You have been idle for too long.</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6>
              You're being timed out due to inactivity. Please choose to stay
              signed in or to logout. Otherwise, you will be logged off
              automatically.
            </h6>

            <p>
              Time remaining : <Timer timeInSecs={FINAL_TIMEOUT} />
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleLogout}>
              Logout
            </Button>
            <Button variant="primary" onClick={handleStayConnected}>
              Keep me signed in
            </Button>
          </Modal.Footer>
        </Modal>

        <IdleTimer
      ref={timerRef}
      timeout={IDLE_TIMEOUT}
      onIdle={handleOnIdle}
      onAction={handleOnAction}
      onActive={handleOnActive}
        //   debounce={500}
      />
      

      </div>

  );
}

export default RBIdleTimer;


// import React, { useState, useRef } from 'react';
// import IdleTimer from 'react-idle-timer';
// import Modal from 'react-bootstrap/Modal';
// import { useNavigate } from 'react-router-dom';

// const IdleTimerContainer = (props) => {
//     // const { loading: isKeyLoading, data: timeData } = useQuery(
//     //     GET_SETTINGS,
//     //     {
//     //         variables: {
//     //             filterInput: {
//     //                 and: [{ key: { eq: "LogoutTime" } }],
//     //             },
//     //         },
//     //         fetchPolicy: 'network-only'
//     //     }
//     // )
//     console.log("18 compo")
    

//     const timeData = 600;
//     const t = timeData;
//     const [isLoggedIn, setIsLoggedIn] = useState(true);
//     const [showModal, setShowModal] = useState(false);
//     const sessionTimeOut = useRef(0);
//     const navigate = useNavigate();
//     const location = window.location.href;
//     let timeOut = 600000;
//     // if (timeData != null && timeData != undefined) {
//     //     if (timeData.allSettingsList.length > 0) {
//     //         timeOut = parseInt(timeData.allSettingsList[0].value, 10);
//     //     }
//     // }
//     const onIdle = () => {
//         if (!location.includes("/login") || true) {
//             setIsLoggedIn(false);
//             setShowModal(true);
//             sessionTimeOut.current = setTimeout(logOut, 15000);
//             console.log("18 compo 39")
//         }
//         else {
//             setIsLoggedIn(true);
//             setShowModal(false);
//         }

//     };

//     const stayActive = () => {
//         console.log("18 compo 49")
//         setIsLoggedIn(true);
//         setShowModal(false);
//         if (sessionTimeOut.current !== null) {
//             window.clearTimeout(sessionTimeOut.current);
//         }
//     };

//     const logOut = () => {
//         console.log("18 compo 58")
//         setIsLoggedIn(false);
//         setShowModal(false);
//         clearTimeout(sessionTimeOut.current);
//         navigate('/login');
//     };

//     const toggleModal = () => {
//         setShowModal(false);
//     };

//     return (
//         <div>

//             <Modal show={true} onHide={toggleModal} dialogClassName="my-modal">
//                 <Modal.Header>
//                     <Modal.Title>Inactivity Alert</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <p>You will be logged out soon. </p>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <button onClick={stayActive} className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base btn btn-success">
//                         Keep me signed in
//                     </button>
//                 </Modal.Footer>
//             </Modal>

//             <IdleTimer
//                 ref={(ref) => {
//                     if (ref) {
//                         console.log("18 compo 89", ref)
//                         ref.reset();
//                     }
//                 }}
//                 timeout={timeOut}
//                 onIdle={onIdle}
//                 events={['mousemove', 'keydown', 'wheel', 'scroll']}
//             />
//         </div>


//     );
// };

// export default IdleTimerContainer;