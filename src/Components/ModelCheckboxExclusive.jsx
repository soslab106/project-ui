import React, { Component } from "react";

class ModelCheckboxExclusive extends Component {

  render() {
    return (
        <label id={this.props.id} style={{cursor:'pointer'}} className={'container model-checkbox d-flex justify-content-between align-items-center '+this.props.className}>
          <div style={{fontSize:'18px'}}>{this.props.modelName}</div>
          <div className='mr-3'><div class="check"></div></div>
        </label>
    );
  }
}

export default ModelCheckboxExclusive;
