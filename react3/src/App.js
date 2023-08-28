import React, {Component} from 'react';
import Table from './components/Transfer/Transfer'

export default class App extends Component {

  state = {
    list: [
      {
        id: 1,
        title: `Task 1`
      },
      {
        id: 2,
        title: `Task 2`
      },
      {
        id: 3,
        title: `Task 3`
      },
      {
        id: 4,
        title: `Task 4`
      }
    ]
  }

  render () {
    let {list} = this.state;

    return (
        <>
          <Table list={list}></Table>
        </>
    )
  }
}