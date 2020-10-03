import React, { Component } from "react";

class ModelCheckboxExclusive extends Component {

  render() {
    return (
      <div style={{marginTop: '20px'}}>
        <label id={this.props.id} className={'container model-checkbox d-flex justify-content-between align-items-center '+this.props.className}>
          {this.props.modelName}
          <div className='mr-3'><div class="check"></div></div>
        </label>
      </div>
    );
  }
}

export default ModelCheckboxExclusive;
