import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PaletteMetaForm from './PaletteMetaForm';
import classNames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AddToPhotos from "@material-ui/icons/AddToPhotos";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import styles from './styles/PaletteFormNavStyles';



class PaletteFormNav extends Component {
  constructor(props){
    super(props);
    this.state = { formShowing: false };  
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this); 
  }

  hideForm() {
    this.setState({ formShowing: false });
  }

  showForm() {
    this.setState({ formShowing: true });
  }

  render() {
    const { classes, open, palettes, handleSubmit } = this.props;
    const { newPaletteName} = this.state;
    return(
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position='fixed'
          color="default"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color='inherit'
              aria-label='Open drawer'
              onClick={this.props.handleDrawerOpen}
              className={classNames(classes.menuButton, 
                {[classes.hide]: open 
              })}
            >
            <AddToPhotos />
            </IconButton>
            <Typography variant='h6' color='inherit' noWrap>
              Create a palette
            </Typography>
            
          </Toolbar>
            <div className={classes.navBtns}>             
              <Link to="/">
                <Button variant="contained" color="secondary" className={classes.button}>Go Back</Button>
              </Link>    
              <Button variant="contained" color="primary" onClick={this.showForm} className={classes.button}>
                Save
              </Button>
            </div>      
        </AppBar>
        {this.state.formShowing && (
          <PaletteMetaForm palettes={palettes} handleSubmit={handleSubmit} hideForm={this.hideForm}/> 
        )}
      </div>
    )
  }
}

export default withStyles(styles, {withTheme: true })(PaletteFormNav);