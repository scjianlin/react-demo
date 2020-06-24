import React, { Component } from 'react';

class TodoItem extends Component {

  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  //  子组件要和父组件通信，子组件要调用父组件传递过来的方法。
  handleItemClick() {
    const { del, index } = this.props;
    del(index);  //调用父组件的方法;
  }
  render() {
    const { content } = this.props;
    return (
      <div style={{ color: 'green' }} onClick={this.handleItemClick}> {content} </div> //子组件通过props接收父组件传递的参数
    )
  }
}

export default TodoItem