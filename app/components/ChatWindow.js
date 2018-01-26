import React, { Component } from 'react';
import EmojiPicker from 'emoji-picker-react';
import JSEMOJI from 'emoji-js';

import ChatItem from './ChatItem';

//emoji set up
let jsemoji = new JSEMOJI();
// set the style to emojione (default - apple)
jsemoji.img_set = 'emojione';
// set the storage location for all emojis
jsemoji.img_sets.emojione.path = 'https://cdn.jsdelivr.net/emojione/assets/3.0/png/32/';

export default class ChatWindow extends Component {
  state = {
    items: [],
    text: '',
    emojiShown: false
  };

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState({
      items: [...this.state.items, newItem],
      text: ''
    });
  }
  //displays emoji inside the input window
  handleEmojiClick = (n, e) => {
    let emoji = jsemoji.replace_colons(`:${e.name}:`);
    this.setState({
      text: this.state.text + emoji
    });
  }

  toogleEmojiState = () => {
    this.setState({
      emojiShown: !this.state.emojiShown
    });
  }

  render() {
    const { items, text } = this.state;

    if (this.state.emojiShown === true) {
      return (
        <div className="container">
          <h1 id="title-main">Welcome to the Simple Chat App</h1>
          <ChatItem
            items={items}
          />
          <form onSubmit={this.handleSubmit}>
            <input className="input" onChange={this.handleChange} value={text} placeholder="Type your text..." />
            <button className="submit">{'Send'}</button>
          </form>
          <button className="show-emoji" onClick={this.toogleEmojiState}>{'Emoji'}</button>
          <div className="emoji-table">
            <EmojiPicker onEmojiClick={this.handleEmojiClick} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <h1 id="title-main">Welcome to the Simple Chat App</h1>
          <ChatItem
            items={items}
          />
          <form onSubmit={this.handleSubmit}>
            <input className="input" onChange={this.handleChange} value={text} placeholder="Type your text..." />
            <button className="submit">{'Send'}</button>
          </form>
          <button className="show-emoji" onClick={this.toogleEmojiState}>{'Emoji'}</button>
        </div>
      );
    }
  }
}
