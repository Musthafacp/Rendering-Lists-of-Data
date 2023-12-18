import React, { Component } from 'react'

export default class HigherOrderComponent extends Component {
    constructor(){
        super();
        this.state = {
            userData : [
                {
                    id:'1',
                    name: 'Joe', 
                    user_type: 'Developer', 
                    age:31, 
                    years:11
                },
                {
                    id: '2', 
                    name: 'Hill', 
                    user_type: 'Designer', 
                    age:26, 
                    years:4 
                },
                {
                    id: '3', 
                    name: 'John', 
                    user_type: 'Teacher', 
                    age:24, 
                    years: 2
                },
                {
                    id: '4', 
                    name: 'Sam', 
                    user_type: 'Entreprenuer', 
                    age:58,
                    years:25
                },
                {   
                    id: '5',
                    name: 'Jack',
                    user_type: 'Designer',
                    age:43,
                    years: 18
                }
            ]
        }
    }

    renderAllItems = () => {
        const data = this.state.userData;
        const mapRows = data.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>Name : {item.name}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>User Type: {item.user_type} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
               </li>
            </React.Fragment>
        ));
        return mapRows;
    };


    renderBasedonUsertype = () => {
        const desireduserType = 'Designer';
        const data = this.state.userData;
      
        return data
          .filter(user => user.user_type === desireduserType)
          .map(user => {
            return (
                <React.Fragment key={user.id}>
                    <li className="list-elements">
                        <span>Id: {user.id} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>Name : {user.name}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>User Type: {user.user_type} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </li>
                </React.Fragment>
            );
          });
      };      

      filterItemsStartingwithJ = () => {
        const data = this.state.userData;
        const desiredFirstLetter = 'J';
      
        return data
          .filter((user) => user.name.charAt(0).toUpperCase() === desiredFirstLetter.toUpperCase())
          .map((user) => (
            <React.Fragment key={user.id}>
              <li className="list-elements">
                <span>Id: {user.id} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>Name : {user.name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>User Type: {user.user_type} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              </li>
            </React.Fragment>
          ));
      };


      filterAccordingToAge = () => {
        const data = this.state.userData;
      
        return data
          .filter((user) => user.age > 20 && user.age <= 50)
          .map((user) => (
            <React.Fragment key={user.id}>
              <li className="list-elements">
                <span>Id: {user.id} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>Name: {user.name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>User Type: {user.user_type} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              </li>
            </React.Fragment>
          ));
      };
      
      filterAccordingToExperience = () => {
        const desiredUserType = 'Designer';
        const data = this.state.userData;
    
        let filteredUsers = data.filter(user => user.user_type === desiredUserType);
    
        let totalExperience = filteredUsers.reduce((accumulator, user) => accumulator + user.years, 0);
    
        return (
            <li key={filteredUsers[0].id} className="list-elements">
                <span>Total Experience of {desiredUserType}'s: {totalExperience} years</span>
            </li>
        );
    };
    
    render() {
        return (
            <>
                <h1>Display all items</h1>
                <div className="display-box">
                    <ul>
                        {this.renderAllItems()}
                    </ul>
                </div>
                <h1>Display based on the user type</h1>
                <div>
                    <ul>
                        {this.renderBasedonUsertype()}
                    </ul>
                </div>

                <h1>Filtered by the first letter </h1>
                <div>
                    <ul>
                        {this.filterItemsStartingwithJ()}
                    </ul>
                </div>

                <h1>Filterd by age between 28 and 50</h1>
                <div>
                    <ul>
                        {this.filterAccordingToAge()}
                    </ul>
                </div>

                <h1>Filtered by Experiance</h1>
                <div>
                    <ul>
                        {this.filterAccordingToExperience()}
                    </ul>
                </div>
            </>
        )
    }
}
