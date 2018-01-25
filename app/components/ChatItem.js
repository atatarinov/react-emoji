import React from 'react';

export default function ChatItem(props) {
  const { items } = props;

  return (
    <ul>
      {
        items.map(item => (
          <li className="chat-item" key={item.id}>
            <div className="text-posted"> {item.text}</div>
          </li>
        ))
      }
    </ul>
  );
}
