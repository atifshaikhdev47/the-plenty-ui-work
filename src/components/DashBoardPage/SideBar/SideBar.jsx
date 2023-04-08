import React, { useState } from "react";
import "iconify-icon";
import { Link } from "react-router-dom";
import LOGO_TEXT from "../../../assets/images/logo_text.svg";
import LOGO_ICON from "../../../assets/images/logo_icon.svg";

const SideBar = () => {
  const [toggled, setToggled] = useState(false);

  const handleToggled = () => {
    setToggled((prev) => !prev);
  };

  return (
    <div
      className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${
        toggled && "toggled"
      }`}
      id="accordionSidebar"
    >
      {/* <!-- Sidebar - Brand --> */}
      <div
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div className="top_logo">
          <div className="logo_icon">
            <Link to="/">
              <img src={LOGO_ICON} />
            </Link>
          </div>
          <div className="logo_text">
            <div className="dropdown">
              <a
                className="dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="logo_in">
                  <img src={LOGO_TEXT} />
                </span>
                <span className="email">abc@example.com</span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ul className="top_list">
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <i className="fas fa-fw fa-cog"></i>
            <span>Personal</span>
          </a>
          <div className="collapse" id="collapseExample">
            <div className="bg-dark-green py-2 collapse-inner rounded">
              <a className="collapse-item" href="#">
                <iconify-icon
                  icon="mdi:user"
                  width= "24" height= "24"
                  style={{ color: "white",}}
                ></iconify-icon>
                <span>Information</span>
              </a>
              <a className="collapse-item" href="#">
                <iconify-icon
                  icon="mdi:file-document-multiple"
                  width= "24" height= "24"
                  style={{ color: "white",}}
                ></iconify-icon>
                <span>Wills/Trusts</span>
              </a>
              <a className="collapse-item" href="#">
                <iconify-icon
                  icon="mdi:wand"
                  width= "24" height= "24"
                  style={{ color: "white",}}
                ></iconify-icon>
                <span>Last Wishes</span>
              </a>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-toggle="collapse"
            href="#collapseExample2"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample2"
          >
            <i className="fas fa-fw fa-wrench"></i>
            <span>Assets</span>
          </a>
          <div className="collapse" id="collapseExample2">
            <div className="bg-dark-green  py-2 collapse-inner rounded">
              <a className="collapse-item" href="#">
                <iconify-icon
                  icon="mdi:bank"
                  width= "24" height= "24"
                  style={{ color: "white",}}
                ></iconify-icon>
                <span>Banking</span>
              </a>
              <a className="collapse-item" href="#">
                <iconify-icon
                  icon="bi:houses-fill"
                  width= "24" height= "24"
                  style={{ color: "white",}}
                ></iconify-icon>
                <span>Real Estate</span>
              </a>
              <a className="collapse-item" href="#">
                <iconify-icon
                  icon="simple-icons:bitcoin"
                  width= "24" height= "24"
                  style={{ color: "white",}}
                ></iconify-icon>
                <span>Digital Currency</span>
              </a>
              <a className="collapse-item" href="#">
                <iconify-icon
                  icon="healthicons:money-bag"
                  width= "24" height= "24"
                  style={{ color: "white",}}
                ></iconify-icon>
                <span>Retirement</span>
              </a>
              <a className="collapse-item" href="#">
                <iconify-icon
                  icon="mingcute:safety-certificate-fill"
                  width= "24" height= "24"
                  style={{ color: "white",}}
                ></iconify-icon>
                <span>Insurance</span>
              </a>
              <a className="collapse-item" href="#">
                <iconify-icon
                  icon="material-symbols:potted-plant"
                  width= "24" height= "24"
                  style={{ color: "white",}}
                ></iconify-icon>
                <span>Investments</span>
              </a>
              <a className="collapse-item" href="#">
                <iconify-icon
                  icon="healthicons:i-note-action"
                  width= "24" height= "24"
                  style={{ color: "white",}}
                ></iconify-icon>
                <span>Notes</span>
              </a>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-toggle="collapse"
            href="#collapseExample3"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample3"
          >
            <i className="fas fa-fw fa-cog"></i>
            <span>Liabilities</span>
          </a>
          <div className="collapse" id="collapseExample3">
            <div className="bg-dark-green py-2 collapse-inner rounded">
              <a className="collapse-item" href="#">
                <iconify-icon
                  icon="fa6-solid:money-bills"
                  width= "24" height= "24"
                  style={{ color: "white",}}
                ></iconify-icon>
                <span>Bills</span>
              </a>
              <a className="collapse-item" href="#">
                <iconify-icon
                  icon="eos-icons:subscription-management"
                  width="24"
                  height="24"
                  style={{ color: "white" }}
                ></iconify-icon>
                <span>Subscriptions</span>
              </a>
              <a className="collapse-item" href="#">
                <iconify-icon
                  icon="game-icons:receive-money"
                  width="24"
                  height="24"
                  style={{ color: "white" }}
                ></iconify-icon>
                <span>Loans</span>
              </a>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            data-bs-toggle="collapse"
            href="#collapseExample4"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample4"
          >
            <i className="fas fa-fw fa-cog"></i>
            <span>Shared</span>
          </a>
          <div className="collapse" id="collapseExample4">
            <div className="bg-dark-green py-2 collapse-inner rounded">
              <a className="collapse-item" href="#">
                <iconify-icon
                  icon="fluent:learning-app-20-filled"
                  width="24"
                  height="24"
                  style={{ color: "white" }}
                ></iconify-icon>
                <span>How it Works</span>
              </a>
              <a className="collapse-item" href="#">
                <iconify-icon
                  icon="simple-icons:trustpilot"
                  width="24"
                  height="24"
                  style={{ color: "white" }}
                ></iconify-icon>
                <span>Beneficiaries</span>
              </a>
            </div>
          </div>
        </li>
      </ul>
      <ul className="btm_list">
        <hr />
        <li className="nav-item ">
          <a
            href=""
            className="nav-link2 bg-dark-green py-2 collapse-inner rounded collapse"
          >
            <iconify-icon
              icon="fluent:gift-24-filled"
              width="24"
              height="24"
              style={{ color: "white" }}
            ></iconify-icon>
            <span> Love The-plenty? Send as a gift </span>
          </a>
        </li>
        <li className="nav-item mt-2">
          <a
            href=""
            className="nav-link2 bg-dark-green py-2 collapse-inner rounded collapse"
          >
            <iconify-icon
              icon="bi:question-circle-fill"
              width="24"
              height="24"
              style={{ color: "white" }}
            ></iconify-icon>
            <span> Have a Question? Find it here </span>
          </a>
        </li>
      </ul>
      {/* <!-- Sidebar Toggler (Sidebar) --> */}
      <div
        onClick={handleToggled}
        className="sidebar_toggle text-center d-none d-md-inline"
        id="sidebarToggle"
      >
        <span>COMPACT VIEW</span>
      </div>
    </div>
  );
};

export default SideBar;
