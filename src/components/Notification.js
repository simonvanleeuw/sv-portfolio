import React from 'react';

const Notification = () => {
    const warningMessage = "The website is currently under re-construction. All portfolio cases will be available again soon.";
    const confirm = 'Ok';

    return(
        <div className="notification">
            <p>{warningMessage}</p>
            <button className="link">{confirm}</button>
        </div>
    )
}

export default Notification;