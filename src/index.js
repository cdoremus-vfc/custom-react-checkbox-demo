import React from 'react';
import { render } from 'react-dom';
import CustomCheckbox from './CustomCheckbox';

class App extends React.Component {
  state = { checked: false };
  message = 'Native checkbox checked value: ';

  handleCheckboxChange = event => {
    this.setState({ checked: event.target.checked });
    console.log(`this.state.checked ${this.state.checked}`);
    const checkboxInput = document.querySelector('input[type=checkbox]');
    console.log(`${this.message} ${checkboxInput.checked}`);
    document.getElementById('CheckboxStateMessage').innerHTML = `${
      this.message
    } ${checkboxInput.checked}`;
  };

  render() {
    return (
      <div style={{ fontFamily: 'system-ui' }}>
        <label>
          <CustomCheckbox
            checkedColor={'blue'}
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
          />
          <span style={{ marginLeft: 8 }}>Label Text</span>
        </label>
        <h2 id="CheckboxStateMessage">{this.message} false</h2>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
