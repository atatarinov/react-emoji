import React from 'react';

export default function Message(props) {
  const { items } = props;

  return (
    <ul>
      {
        items.map(item => (
          <li className="message" key={item.id}>
            <img src={require('../../public/cat-avatar-small.png')} className="avatar" />
            <p className="message-body"> {item.text}</p>
          </li>
        ))
      }
    </ul>
  );
}
