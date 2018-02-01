import React from 'react';

export default function Message(props) {
  const { items } = props;

  return (
    <ul>
      {
        items.map(item => (
          <li className="message" key={item.id}>
            <img src={require('../../public/avatar.png')} className="avatar" />
            <div className="messageContent">
              <h5 className="posted-time">2:45 PM</h5>
              <p className="message-body">{item.text}</p>
            </div>
          </li>
        ))
      }
    </ul>
  );
}
