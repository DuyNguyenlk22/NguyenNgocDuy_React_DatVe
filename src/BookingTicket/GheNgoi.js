import React, { Component } from "react";
import { connect } from "react-redux";
import SoGhe from "./SoGhe";

class GheNgoi extends Component {
  renderListChair = () => {
    return this.props.dataBooking.map((item, index) => {
      return <SoGhe key={index} item={item.danhSachGhe} index={index} />;
    });
  };
  renderHangGhe = () => {
    return this.props.dataBooking.map((item, index) => {
      return (
        <div className='firstChar my-1' key={index}>
          {item.hang}
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <h3 className='title' style={{ color: "#FDBF05" }}>
          ĐẶT VÉ XEM PHIM
        </h3>
        <p className='text-white m-0'>Màn hình</p>
        <div className='screen'></div>
        <div
          className='container'
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "relative",
          }}
        >
          <div
            className='left'
            style={{ position: "absolute", top: "60px", left: "20px" }}
          >
            {this.renderHangGhe()}
          </div>
          <div className='right mt-3'>{this.renderListChair()}</div>
        </div>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    dataBooking: state.bookingReducer.dataBooking,
  };
};
export default connect(mapStateToProps)(GheNgoi);
