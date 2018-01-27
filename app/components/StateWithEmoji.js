import React from 'react';
import EmojiPicker from 'emoji-picker-react';

import ChatItem from './ChatItem';
import WelcomeTitle from './WelcomeTitle';

export default function StateWithEmoji(props) {

  const { text, items, handleChange, handleEmojiClick, handleSubmit, toogleEmojiState } = props;

  return (
    <div className="container">
      <WelcomeTitle />
      <ChatItem
        items={items}
      />
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
