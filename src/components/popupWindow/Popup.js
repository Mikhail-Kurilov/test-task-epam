import React from "react";

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      closePopup: props.closePopup,
    };
  }

  render() {
    return (
      <div>
        <div onClick={() => this.state.closePopup()}></div>
        <form>
          <button onClick={() => this.state.closePopup()}>X</button>
          <p>
            <img src={this.state.user.picture.large} alt="user" />
          </p>
          <p>{this.state.user.location.street}</p>
          <p>{this.state.user.location.city}</p>
          <p>{this.state.user.location.state}</p>
          <p>{this.state.user.email}</p>
          <p>{this.state.user.phone}</p>
        </form>
      </div>
    );
  }
}
export default Popup;
