import React from "react";
import "iconify-icon";
import toastr from "toastr";


import USER_ICON from "../../../assets/images/usericon.png";

const Content = (props) => {

  const handleLogOut=()=>{
    props.signOut()
    toastr.success("logged out successfully");
    // alert("logged out successfully")
  }
  return (
    // <!-- Content Wrapper -->
    <div id="content-wrapper" className="d-flex flex-column">
      {/* <!-- Main Content --> */}
      <div id="content">
        <nav className="navbar navbar-expand topbar mb-4 static-top">
          <button
            id="sidebarToggleTop"
            className="btn btn-link d-md-none rounded-circle mr-3"
          >
            <iconify-icon icon="material-symbols:menu"></iconify-icon>
          </button>
          <div className="top_bar d-flex">
            <p className="d-flex align-items-center">
              <iconify-icon
                icon="ant-design:info-circle-filled"
                style={{ color: "white", width: "24", height: "24" }}
              ></iconify-icon>
              <span className="ml-3">
                It's been _ _ days since you've updated your account, anything
                new to add?
              </span>
            </p>
            <div className="d-flex align-items-center">
              <div className="dropdown ">
                <a
                  className="dropdown d-flex align-items-center"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div
                    style={{
                      height: "40px",
                      width: "40px",
                      justifyContent: "center",
                    }}
                    className="rounded-circle bg-light d-flex align-items-center"
                  >
                    <img className="h-50 w-50" src={USER_ICON} alt="" />
                  </div>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      welcome {props.user.username.slice(0, 10)}...
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      My Profile
                    </a>
                  </li>
                  <li>
                    <p
                      onClick={()=>handleLogOut()}
                      className="dropdown-item text-dark"
                      href="#"
                    >
                      Sign-Out
                    </p>
                  </li>
                </ul>
              </div>

              <a href="#" className="btn btn-default-top">
                View Recommendations
              </a>
            </div>
          </div>
        </nav>
        <div className="container-fluid">
          <h1 className="h3 mb-4 text-gray-800">Blank Page</h1>
        </div>
      </div>
      {/* <!-- End of Main Content --> */}
    </div>
    // <!-- End of Content Wrapper -->
  );
};

export default Content;
