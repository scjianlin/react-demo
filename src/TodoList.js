import React, { Component, Fragment } from 'react';
import TotoItem from './TodiItem'


class TotoList extends Component {
  // 相当于vue中的生命周期函数create
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: '',
    };
    this.handleInputChang = this.handleInputChang.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleBtnClick() {
    if (this.state.inputValue) {  //如果内容为空,不提交
      this.setState({
        list: [...this.state.list, this.state.inputValue],
        inputValue: ''
      })
    }
  }

  handleInputChang(e) {
    this.setState({
      inputValue: e.target.value,
    })
  }

  handleDelete(i) {
    const list = [...this.state.list];
    list.splice(i, 1);
    this.setState({ list })
  }

  getTodoItem() {
    return (
      this.state.list.map((item, index) => {
        return (
          <TotoItem
            del={this.handleDelete}
            content={item}
            key={index}
            index={index}
          /> // 父组件通过参数的形式给子组件传递参数.
        )
      })
    )
  }

  //  类型于vue中的template
  render() {
    return (
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChang} />
          <button className='red-btn' onClick={this.handleBtnClick}>add</button>
        </div>
        <ul> {this.getTodoItem()} </ul>
      </Fragment>
    );
  }
}

export default TotoList;