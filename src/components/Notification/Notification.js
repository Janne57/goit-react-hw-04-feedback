import css from './/Notification.module.css';

function Notification ({ message })  {
  
    return (
      <div className={css.notmessage}>
        <span>{message}</span>
      </div>
    );
  }

export default Notification;
