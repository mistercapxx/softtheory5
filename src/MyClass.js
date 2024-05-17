import React from "react";

///// STATEEE 

class MyClass extends React.Component{
    constructor(props) {
     super(props);
     this.state = { someData: 'some value'};
    }


    updateState =() => {
        this.setState({someData:"new value"});
    }
    render() {
        return (
          <div>
            {/* Отображение текущего значения состояния */}
            <p>Current State: {this.state.someData}</p>
            {/* Кнопка для обновления состояния */}
            <button onClick={this.updateState}>Update State</button>
          </div>
        );
      }
  }
  export default MyClass;

  