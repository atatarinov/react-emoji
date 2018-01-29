import React from 'react';

import Message from './Message';
import WelcomeTitle from './WelcomeTitle';

export default function StateWithEmoji(props) {

  const { text, items, handleChange, handleSubmit, toogleEmojiState } = props;

  return (
    <div className="container">
      <WelcomeTitle />
      <div className="messages">
        <Message
          items={items}
        />
      </div>

      <div className="form">
        <form onSubmit={handleSubmit}>
          <input className="input" onChange={handleChange} value={text} placeholder="Type your text..." />
          <button className="submit">{'Send'}</button>
        </form>
      </div>
      <span id="show-emoji-no" onClick={toogleEmojiState}>{'😎'}</span>
    </div>
  );
}
