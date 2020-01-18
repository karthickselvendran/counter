import React, { Component } from "react";
import { AppBar, Toolbar, TextField, Typography, Button } from '@material-ui/core'

class Counter extends Component {
  state = {
    text1: '0',

  }
  inc = () => {
    this.setState({
      text1: parseInt(this.state.text1) + 1
    })
  }
  dec = () => {
    this.setState({
      text1: parseInt(this.state.text1) - 1
    })
  }
  sets = (e) => {
    let value = e.target.value;
    if (!value || isNaN(value)) value = 0;

    this.setState({
      text1: value
    })
  }
  render() {
    console.log(this.state.text1)
    return (
      <div>
        <AppBar position="static" align="center" color="secondary">
          <Toolbar>

            <Typography variant="h6" >
              Counter Application
         </Typography>
          </Toolbar>
        </AppBar>

        <div style={{ marginLeft: "40%", marginTop: "8%" }}>
          <TextField id="text1" label="Input Value" variant="outlined"
            onChange={(e) => this.sets(e)}

            value={this.state.text1} />
          <br />
          <br />
          <Button variant="contained" onClick={() => this.inc()}
            color="secondary">
            Increment
          </Button>
          <br />
          <br />
          <Button variant="contained" onClick={() => this.dec()}
            color="secondary">
            Decrement
           </Button>

        </div>
      </div>
    )
  }
}
export default Counter;