import React from 'react';
import MyClass from './MyClass';
import AnotherComponent from './AnotherComponent';


export default class App extends React.Component {
state = {
  someList: [
    {id:1,text:'one'},
    {id:2,text:'two'},
    {id:3,text:'three'},
    {id:4,text:'four'},
  ]
}
    ///класовый ретурн
    render() {
      return (
        <div>
          {/* <Tool/> */}
          <ul>
            {this.state.someList.map(el => (
              <ListElement key={el.id} item={el}/>
            ))}
          </ul>
        </div>
      );
    }
}

/// функциональная часть


// function App() {

// ////////////     KEYYY
//   const someData = [
//     { id: 1, text: 'Погладить кота' },
//     { id: 2, text: 'Сходить в магазин' },
//     { id: 3, text: 'Почистить зубы' }
// ];

// const data1 = someData.map(item => (
//     <li key={item.id}>
//         {item.text}
//     </li>
// ));

// ///no stable ids
// const noIds = someData.map((item,idx)  =>(
// <li key={idx}>
//   {item.text}
// </li>
// ));

// const dataInList = (
//   <ul>
//     {someData.map(item => <li key={item.id}>{item.text}</li>)}
//   </ul>
// );

// const dataInDiv = (
//   <div>
//     {someData.map(item =>
//        <p key={item.id}>{item.text}</p>)
//        }
//   </div>
// );

// ///PROPS BOONUS

// function Greeting(props) {
//   return <h1>Hello, {props.name}!</h1>;
// }

/// фукнциональний ретурн

  // return (
  //  <div>
  //       {/* <h2>Список задач:</h2> */}
  //       {/* <ul> */}
  //           {/* {someData} */}
  //           {dataInList}
  //           {/* {noIds} */}
  //       {/* </ul> */}
  //       <hr/>
  //       {dataInDiv}
  //       <Greeting name="John" />
  //     <Greeting name="Alice" />
  //     <Greeting name="Bob" />
  //     <Tool/>
  //     <AnotherComponent/>
  //     <Tool/>
  //     <ul>
  //       {this.state.someList.map(el => (
  //         <ListElement key={el.id} item = {el.text}/>
  //       ))}
  //     </ul>
  //   </div>
  // );

// }

//// prikol vmesto <li>

// function ListElement(china)
// {
//   return <li>{china.item}</li>;
// }

class ListElement extends React.Component {
  render() {
    return <li>{this.china.item.text}</li>
  }
}
// export default App;
