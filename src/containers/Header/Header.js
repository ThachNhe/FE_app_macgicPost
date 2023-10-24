import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import Navigator from '../../components/Navigator';
import { adminMenu } from './menuApp';
import './Header.scss';
class Header extends Component {
     constructor(props) {
          super(props);
          this.state = {
               menuApp: [],
          };
     }

     componentDidMount() {
          let { userInfo } = this.props;
     }
     render() {
          const { processLogout, userInfo } = this.props;
          return (
               <div className="header-container">
                    <div className="header-logo"></div>
                    <div className="header-tabs-container">
                         <Navigator menus={adminMenu} />
                    </div>
                    <div className="languages">
                         <span className="welcome">
                              {/* <FormattedMessage id="home-header.welcome" />{' '} */}
                              {userInfo && userInfo.firstName ? userInfo.firstName : ' '}!
                         </span>

                         <div className="btn btn-logout" onClick={processLogout} title="Log out">
                              <i className="fas fa-sign-out-alt"></i>
                         </div>
                    </div>
               </div>
          );
     }
}

const mapStateToProps = (state) => {
     return {
          isLoggedIn: state.user.isLoggedIn,

          userInfo: state.user.userInfo,
     };
};

const mapDispatchToProps = (dispatch) => {
     return {
          processLogout: () => dispatch(actions.processLogout()),
     };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
