import React, { Component } from "react";
import "../asset/bookingTicket.css";
import GheNgoi from "./GheNgoi";
import DanhSachGheDuocChon from "./DanhSachGheDuocChon";
export default class BaiTapDatVe extends Component {
  render() {
    return (
      <div className='bookingMovie'>
        <div className='filter'>
          <div className='container-fluid '>
            <div className='row' style={{ justifyContent: "space-between" }}>
              <div className='col-6'>
                <GheNgoi />
              </div>
              <div className='col-4'>
                <DanhSachGheDuocChon />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
