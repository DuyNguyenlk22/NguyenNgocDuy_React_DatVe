import React, { Component } from "react";
import { connect } from "react-redux";

class SoGhe extends Component {
  renderSoGhe = () => {
    return this.props.item.map((item, index) => {
      let gheDaDat = "";
      // ghế đã đặt
      if (item.daDat) {
        gheDaDat = "gheDuocChon";
      }
      // ghế đang chọn
      let cssGheDangDat = "";
      let disabled = false;
      let indexGheDangChon = this.props.cartTicket.findIndex(
        (gheDangDat) => gheDangDat.soGhe === item.soGhe,
      );
      if (indexGheDangChon !== -1) {
        cssGheDangDat = "gheDangChon";
        disabled = true;
      }
      return (
        <button
          disabled={disabled}
          onClick={() => {
            this.props.handleAddTicket(item);
          }}
          className={`ghe m-1 ${gheDaDat} ${cssGheDangDat} `}
          key={index}
        >
          {item.soGhe}
        </button>
      );
    });
  };
  renderHangSo = () => {
    return this.props.item.map((item, index) => {
      return (
        <span className='rowNumber' key={index}>
          {item.soGhe}
        </span>
      );
    });
  };
  renderGhe = () => {
    if (this.props.index === 0) {
      return <div style={{ marginLeft: "-26px" }}>{this.renderHangSo()}</div>;
    } else {
      return <div>{this.renderSoGhe()}</div>;
    }
  };
  render() {
    // return <div>{this.renderSoGhe()}</div>;
    return <div>{this.renderGhe()}</div>;
  }
}
let mapStateToProps = (state) => {
  return {
    cartTicket: state.bookingReducer.cartTicket,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    handleAddTicket: (item) => {
      dispatch({
        type: "ADD_TICKET",
        payload: item,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SoGhe);
