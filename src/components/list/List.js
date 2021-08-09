import React from "react";
import Popup from "../popupWindow/Popup";
import "./list.css";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: props.users,
      sortAscending: true,
      showPopup: false,
      user: null,
    };
  }

  sortList() {
    const sortUsers = (a, b) => {
      if (this.state.sortAscending) {
        return a.name.last.localeCompare(b.name.last);
      } else {
        return b.name.last.localeCompare(a.name.last);
      }
    };

    this.setState({
      sortAscending: !this.state.sortAscending,
      users: this.state.users.sort(sortUsers),
    });
  }

  closePopup() {
    this.setState({ showPopup: !this.state.showPopup });
  }

  popupHandler(index) {
    this.setState({
      user: this.state.users[index],
      showPopup: true,
    });
  }

  render() {
    return (
      <div className="list">
        <div className="listWrapper">
          {this.state.showPopup ? (
            <Popup
              user={this.state.user}
              closePopup={() => this.closePopup()}
            />
          ) : (
            <div></div>
          )}
          <table className="table">
            <tbody className="tableWrapper">
              <tr className="tableHead">
                <td className="tableHeadTitle">Photo</td>
                <td className="tableHeadTitle">Title</td>
                <td className="tableHeadTitle">First Name</td>
                <td className="tableHeadTitle">
                  Last Name
                  <button
                    className="sortButton"
                    type="button"
                    onClick={() => this.sortList()}
                  >
                    Sort
                  </button>
                </td>
              </tr>
              {this.state.users.map((user, index) => (
                <tr className="innerTable" key={index}>
                  <td className="listCell">
                    <img
                      className="userPictureMedium"
                      src={user.picture.medium}
                      alt="user"
                      onClick={() => this.popupHandler(index)}
                    />
                  </td>
                  <td className="listCell">{user.name.title}</td>
                  <td className="listCell">{user.name.first}</td>
                  <td className="listCell">{user.name.last}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default List;
