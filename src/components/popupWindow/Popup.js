import React from "react";
import "./popup.css";

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
      <div className="popupWrapper">
        <div
          className="closePopupOuter"
          onClick={() => this.state.closePopup()}
        ></div>
        <form className="popupForm">
          <div className="popupFormWrapper">
            <button
              className="closePopupButton"
              onClick={() => this.state.closePopup()}
            >
              X
            </button>
            <label className="popupElement">
              <img
                className="userPictureLarge"
                src={this.state.user.picture.large}
                alt="user"
              />
            </label>
            <label className="popupElement">
              {this.state.user.location.street}
            </label>
            <label className="popupElement">
              {this.state.user.location.city}
            </label>
            <label className="popupElement">
              {this.state.user.location.state}
            </label>
            <label className="popupElement">{this.state.user.email}</label>
            <label className="popupElement">{this.state.user.phone}</label>
          </div>
        </form>
      </div>
    );
  }
}
export default Popup;
