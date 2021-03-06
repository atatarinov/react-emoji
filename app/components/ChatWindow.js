import React, { Component } from 'react';

import JSEMOJI from 'emoji-js';

import StateWithEmoji from './StateWithEmoji';
import StateWithoutEmoji from './StateWithoutEmoji';

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

    if (this.state.emojiShown) {
      return (
        <div className="main-container">
          <div className="sidebar">
            <h3># Sample App</h3>
          </div>
          <StateWithEmoji
            text={text}
            items={items}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            toogleEmojiState={this.toogleEmojiState}
            handleEmojiClick={this.handleEmojiClick}
          />
          <div className="files" />
        </div>
      );
    } else {
      return (
        <div className="main-container">
          <div className="sidebar">
            <h3># Sample App</h3>
          </div>
          <StateWithoutEmoji
            text={text}
            items={items}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            toogleEmojiState={this.toogleEmojiState}
          />
          <div className="files" />
        </div>
      );
    }
  }
}
