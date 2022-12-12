import '../App.css';
import React from 'react';
import Btn from "./Button/Btn";
import TodoItem from "./TodoItem/TodoItem";

const todo = [
  { name: 'test', cheked: false, id: 1 },
  { name: 'test2', cheked: false, id: 2 },
  { name: 'test3', cheked: false, id: 3 },
]



class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      elements: [
      ],
    };

    this.handleClick = this.handleClick.bind(this);
  };

  componentDidMount() {
    this.setState({ elements: todo });
  };

  handleCheck = ({ name, checked, id }) => {
    const time = new Date();
    console.log(`Action '${name}' was changed at ${time.toLocaleTimeString()}`);

    const elems = this.state.elements.map(item =>
      item.id === id ? { ...item, checked: !checked } : item,
    );

    this.setState({ elements: elems });
  };

  handleClick() {
    let count = 0;
    this.state.elements.forEach(item => item.checked && count++);
    console.log(`Finished tasks: ${count}`);
  };

  onChangeInput = (event) => {
    this.setState({
      inputValue: event.target.value,
    })
  };

  onClickBtn = () => {
    const { inputValue, elements } = this.state;
    this.setState({
      elements: [inputValue, ...elements],
    })
    this.setState({
      inputValue: '',
    })
  };

  onRemoveTodo = (todoName) => {
    // this.setState(prevState => ({
    //   elements: prevState.elements.filter(item => item.name !== item.name)
    // }));

    const { elements } = this.state;

    const todoIndex = elements.findIndex((str) => str === todoName);
    console.log('индекс', todoIndex);


    //   this.setState({
    //    elements: newElements
    // })
  };



  render() {
    const { inputValue, elements } = this.state;
    return (
      <>

        <div className='header'>
          <h1>To Do List...</h1>
        </div>
        <main className='control'>
          {elements.map(item => (
            <TodoItem
              name={item.id}
              key={item.id}
              handleCheck={this.handleCheck}
              remove={this.onRemoveTodo}
            >
              {item}
            </TodoItem>

          ))}
          < Btn
            name='Check List'
            handleClick={this.handleClick} />
        </main>
      </>
    );
  }
}


export default TodoList;
