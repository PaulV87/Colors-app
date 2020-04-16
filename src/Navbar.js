import React, { Component } from 'react';
import Slider from 'rc-slider/lib/Slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import 'rc-slider/assets/index.css';
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({ format: evt.target.value });
    this.props.handleChange(evt.target.value);
  }
  render() {
    const { level, changeLevel } = this.props;
    const { format } = this.state;
    return(
      <header className="Navbar">
        <div className="logo">
          <a href='#'>React Color Palette</a>
        </div>
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">         
            <Slider 
              defaultValue={level} 
              min={100} 
              max={900} 
              onAfterChange={changeLevel} 
              step={100} 
            />
          </div>
        </div>
        <div className="select-container">
          <Select value={format} onChange={this.handleChange}>
            <MenuItem value="hex">Hex - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - RGBA(255,255,255, 1.0)</MenuItem>
          </Select>
        </div>
      </header>
    )
  }
}

export default Navbar;