import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import 'emoji-mart/css/emoji-mart.css';
import data from 'emoji-mart/data/emojione.json';
import { NimblePicker } from 'emoji-mart';

class App extends Component {
  render() {
    return (
      <NimblePicker set='emojione' data={data} />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
