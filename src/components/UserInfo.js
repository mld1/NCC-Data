import React from "react";
import "./UserInfo.css";
import moment from "moment";

class UserInfo extends React.Component {
  state = {
    dropdownNotif: false,
    showModal: false
  };

  handleDropdownNotif = () => {
    if (this.state.dropdownNotif === false) {
      this.setState({
        dropdownNotif: true
      });
    } else {
      this.setState({
        dropdownNotif: false
      });
    }
  };
  // shows modal
  handleClick = () => {
    this.setState({
      showModal: true
    });
    console.log(this.state.showModal);
  };

  // hides modal
  handleModalDismiss = () => {
    this.setState({
      showModal: false
    });
  };

  render() {
    return (
      <div className="row">
        <div className="col-4">
          {" "}
          <span>
            <h3 className="margin">
              <span>
                {this.props.data.user.displayName}{" "}
                <button
                  type="button"
                  className="btn gift ml-2"
                  onClick={this.handleClick}
                >
                  <i className="fa fa-user"></i>
                </button>
              </span>{" "}
            </h3>{" "}
          </span>
        </div>
        <div
          className={this.state.showModal ? "modal isVisible" : "modal"}
          id="modalEditForm"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header text-center">
                <span className="">User Info</span>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={this.handleModalDismiss}
                >
                  <span aria-hidden="true" className="makeItPink">
                    &times;
                  </span>
                </button>
              </div>
              <div className="modal-body mx-3">
                <p>
                  User Name: {this.props.data.user.displayName}
                  <br></br>
                  User Email: {this.props.data.user.email}
                </p>{" "}
              </div>
              <div className="modal-footer d-flex justify-content-center">
                <button
                  className="btn btn-unique done-button"
                  onClick={this.handleModalDismiss}
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6"></div>
        <div className="col-2">
          {/* <span> */}
          <div className="btn-group dropleft">
            <button
              type="button"
              className="btn btn-danger margin dropdown-toggle"
              data-toggle="dropdown"
              onClick={this.handleDropdownNotif}
              aria-haspopup="true"
              aria-expanded="false"
            >
              Notifications: {/* <span class="badge badge-light"> */}
              {this.props.data.user.notifications.length}
              {/* </span> */}
            </button>

            <div
              className="dropdown-menu"
              style={{
                display: this.state.dropdownNotif ? "inline" : "none"
              }}
            >
              {this.props.data.user.notifications.map(notif => {
                return (
                  <ul>
                    <li>ID: {notif.id}</li>
                    <li>Message: {notif.message}</li>
                    <li>Read: {notif.read.toString()}</li>
                    <li>
                      Date: {moment(notif.date).format("YYYY-MM-DD HH:mm:ss")}
                    </li>
                  </ul>
                );
              })}
            </div>
            {/* </span> */}
          </div>
        </div>
      </div>
    );
  }
}

export default UserInfo;
