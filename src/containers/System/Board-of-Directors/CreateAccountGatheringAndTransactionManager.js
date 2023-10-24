import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CreateAccountGatheringAndTransactionManager.scss';

class CreateAccountGatheringAndTransactionManager extends Component {
     constructor(props) {
          super(props);
          this.state = {};
     }

     render() {
          return (
               <div className="board-of-director-container">
                    <div className="title-board-of-director">Tạo tài khoản</div>
                    <div className="btn-director-add-new-user-container">
                         <button className="btn-create-new-user">
                              <i className="fas fa-plus"></i>
                              <span>Thêm người dùng</span>
                         </button>
                    </div>
               </div>
          );
     }
}

const mapStateToProps = (state) => {
     return {
          language: state.app.language,
     };
};

const mapDispatchToProps = (dispatch) => {
     return {
          // userDefaultClassSuccess: (userInfo) => dispatch(actions.userDefaultClassSuccess(userInfo)),
     };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccountGatheringAndTransactionManager);
