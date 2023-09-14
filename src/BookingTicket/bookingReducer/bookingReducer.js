import { message, notification } from "antd";
import { dataBooking } from "../data";

const initialState = {
  dataBooking: dataBooking,
  cartTicket: [],
  total: 0,
};

export let bookingReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TICKET": {
      let cloneCart = [...state.cartTicket];
      let ticketInfo = { ...payload };
      cloneCart.push(ticketInfo);
      state.cartTicket = cloneCart;
      state.total = cloneCart.reduce(
        (total, ticket) => (total += ticket.gia),
        0,
      );
      return { ...state };
    }
    case "DELETE_TICKET": {
      let cloneCart = [...state.cartTicket];
      let index = cloneCart.findIndex((item) => item.soGhe === payload);

      cloneCart.splice(index, 1);
      state.cartTicket = cloneCart;
      return { ...state };
    }
    case "PAY": {
      let cloneCart = [...state.cartTicket];
      cloneCart.splice(0, cloneCart.length);
      state.cartTicket = cloneCart;
      state.total = 0;
      message.success("Thank you , have a good time!!");
      return { ...state };
    }
    default:
      return state;
  }
};
