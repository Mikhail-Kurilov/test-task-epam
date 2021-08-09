import React from "react";
import Popup from "../popupWindow/Popup";

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

  popupHandler() {
    this.setState({
      user: this.state.user,
      showPopup: true,
    });
  }

  render() {
    return (
      <div>
        {this.state.showPopup ? (
          <Popup user={this.state.user} closePopup={() => this.closePopup()} />
        ) : (
          <div></div>
        )}
        <table>
          <tbody>
            <tr>
              <td>Photo</td>
              <td>Title</td>
              <td>First Name</td>
              <td>
                Last Name
                <button type="button" onClick={() => this.sortList()}>
                  Sort
                </button>
              </td>
            </tr>
            {this.state.users.map((user, index) => (
              <tr key={index}>
                <td>
                  <img
                    key={index}
                    src={user.picture.medium}
                    alt="user"
                    onClick={() => this.popupHandler()}
                  />
                </td>
                <td>{user.name.title}</td>
                <td>{user.name.first}</td>
                <td>{user.name.last}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default List;
