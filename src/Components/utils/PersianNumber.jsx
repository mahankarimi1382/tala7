import { Component } from "react";

class PersianNumber extends Component {
  render() {
    // Convert number to Persian locale string (adds thousand separators)
    let en_number = Number(this.props.number).toLocaleString("fa-IR");

    return <span>{en_number}</span>;
  }
}

export default PersianNumber;
