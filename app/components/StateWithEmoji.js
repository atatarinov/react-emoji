import React from 'react';
import EmojiPicker from 'emoji-picker-react';

import Message from './Message';
import WelcomeTitle from './WelcomeTitle';

export default function StateWithEmoji(props) {

  const { text, items, handleChange, handleEmojiClick, handleSubmit, toogleEmojiState } = props;

  return (
    <div className="container">
      <WelcomeTitle />
      <div className="messages">
        <Message
          items={items}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <input className="input" onChange={handleChange} value={text} placeholder="Type your text..." />
        <button className="submit">{'Send'}</button>
      </form>
      <button className="show-emoji" onClick={toogleEmojiState}>{'Emoji'}</button>
      <div className="emoji-table">
        <EmojiPicker onEmojiClick={handleEmojiClick} />
      </div>
    </div>
  );
}
