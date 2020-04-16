import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500 };
    this.changeLevel = this.changeLevel.bind(this);
  }

  changeLevel(level) {
    this.setState({ level: level });
  }
  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorBoxes = colors[level].map(color => (
      <ColorBox background={color.hex} name={color.name} />
    ))
    return(
      <div className="Palette">
        <Slider default={level} min={100} max={900} onAfterChange={this.changeLevel} step={100} />
        {/* Navbar goes here */}
        <div className="Palette-colors">
          {/* Bunch of colors boxes go here */}
          {colorBoxes}
        </div>
        {/* Footer eventually */}
      </div>
    )
  }
}

export default Palette;