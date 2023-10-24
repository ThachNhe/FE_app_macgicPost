import React, { Component } from 'react';

class Test extends Component {
     constructor(props) {
          super(props);

          this.state = {
               users: [
                    { Name: 'Thach', age: '20', gender: 'Nam' },
                    { Name: 'Alice', age: '25', gender: 'Nữ' },
                    { Name: 'Bob', age: '30', gender: 'Nam' },
                    { Name: 'Catherine', age: '28', gender: 'Nữ' },
                    { Name: 'David', age: '35', gender: 'Nam' },
                    { Name: 'Eva', age: '24', gender: 'Nữ' },
                    { Name: 'Frank', age: '29', gender: 'Nam' },
                    { Name: 'Grace', age: '27', gender: 'Nữ' },
                    { Name: 'Henry', age: '32', gender: 'Nam' },
                    { Name: 'Ivy', age: '22', gender: 'Nữ' },
               ],
               currentPage: 0, // Trang hiện tại
               columnsPerPage: 5, // Số cột mỗi trang
          };
     }

     render() {
          const { users, currentPage, columnsPerPage } = this.state;

          // Xác định số cột cần hiển thị trên trang hiện tại
          const startIndex = currentPage * columnsPerPage;
          const endIndex = startIndex + columnsPerPage;
          const columnsOnPage = Object.keys(users[0]).slice(startIndex, endIndex);

          // Xác định số dòng cần hiển thị trên trang hiện tại
          const startIndexRow = currentPage * columnsPerPage;
          const endIndexRow = startIndexRow + columnsPerPage;
          const usersOnPage = users.slice(0, users.length);

          return (
               <div>
                    <table className="table">
                         <thead>
                              <tr>
                                   {columnsOnPage.map((column, index) => (
                                        <th key={index}>{column}</th>
                                   ))}
                              </tr>
                         </thead>
                         <tbody>
                              {usersOnPage.map((user, userIndex) => (
                                   <tr key={userIndex}>
                                        {columnsOnPage.map((column, columnIndex) => (
                                             <td key={columnIndex}>{user[column]}</td>
                                        ))}
                                   </tr>
                              ))}
                         </tbody>
                    </table>
                    <div>
                         <button onClick={this.handlePreviousPage} disabled={currentPage === 0}>
                              Trang trước
                         </button>
                         <button onClick={this.handleNextPage} disabled={endIndex >= Object.keys(users[0]).length}>
                              Trang tiếp
                         </button>
                    </div>
               </div>
          );
     }

     handleNextPage = () => {
          this.setState((prevState) => ({
               currentPage: prevState.currentPage + 1,
          }));
     };

     handlePreviousPage = () => {
          this.setState((prevState) => ({
               currentPage: prevState.currentPage - 1,
          }));
     };
}

export default Test;
