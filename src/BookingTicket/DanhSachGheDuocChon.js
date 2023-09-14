import React, { Component } from "react";
import { connect } from "react-redux";

class DanhSachGheDuocChon extends Component {
  renderCartTicket = () => {
    return this.props.cartTicket.map((item, index) => {
      return (
        <tr key={index} style={{ color: "#FBBD13" }}>
          <td>{item.soGhe}</td>
          <td>{item.gia}</td>
          <td>
            <button
              onClick={() => {
                this.props.handleRemove(item.soGhe);
              }}
              className='btn btn-danger'
            >
              Cancel
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        <h2 className='text-white'>DANH SÁCH GHẾ BẠN CHỌN</h2>
        <div className='row'>
          <div
            style={{
              height: "20px",
              width: "20px",
              background: "#FEA500",
              marginRight: "8px",
            }}
          ></div>
          <span className='text-white'>Ghế đã đặt</span>
        </div>
        <div className='row'>
          <div
            style={{
              height: "20px",
              width: "20px",
              background: "#6DEE6D",
              marginRight: "8px",
            }}
          ></div>
          <span className='text-white'>Ghế đang chọn</span>
        </div>
        <div className='row'>
          <div
            style={{
              height: "20px",
              width: "20px",
              background: "#fff",
              border: "2px solid orange",
              marginRight: "8px",
            }}
          ></div>
          <span className='text-white'>Ghế chưa đặt</span>
        </div>
        <div
          className='tableList'
          style={{
            overflowY: "auto",
            width: "100%",
            height: "500px",
            marginTop: "40px",
          }}
        >
          <table className='table border'>
            <thead className='text-white'>
              <tr>
                <th>Số ghế</th>
                <th>Giá</th>
                <th>Huỷ</th>
              </tr>
            </thead>
            <tbody>{this.renderCartTicket()}</tbody>
            <tfoot>
              <tr>
                <td className='text-white'>Tổng tiền</td>
                <td style={{ color: "#FBBD13" }}>{this.props.total}</td>
                <td>
                  <button
                    onClick={this.props.handlePay}
                    className='btn btn-success'
                  >
                    Purchase
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    cartTicket: state.bookingReducer.cartTicket,
    total: state.bookingReducer.total,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    handleRemove: (soGhe) => {
      dispatch({
        type: "DELETE_TICKET",
        payload: soGhe,
      });
    },
    handlePay: () => {
      dispatch({
        type: "PAY",
      });
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DanhSachGheDuocChon);
