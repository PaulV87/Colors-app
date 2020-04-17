import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { Link } from 'react-router-dom';

class PaletteList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { palettes } = this.props;
    return(
      <div>
        <h1>Palette List goes here</h1>
        {palettes.map(palette => (
          <MiniPalette {...palette} />          
        ))}
      </div>
    )
  }
}

export default PaletteList;