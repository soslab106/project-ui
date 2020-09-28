import React, { Component } from "react";

class CycleganPlayground extends Component {
  render() {
    return (
      <div className="panel w-100">
        <div className="container py-5">
          <div className="secondary-title">風格轉換</div>
          <div className="d-flex row mt-5">
            <div className="col-4">
                <div className="info-title">模型選擇</div>
            </div>

            {/* result */}
            <div className="col-8">
                <div className='box'>
                <div className="info-title text-center">上傳欲轉換圖片</div>

                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CycleganPlayground;
