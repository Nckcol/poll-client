import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class TestList extends Component {
  renderItem(item) {
    return (
      <li>
        <Link to={`/test/${item.id}`}>{ item.title }</Link>
      </li>
    )
  }
  render() {
    return (
      <ul>
        { this.props.list.map(this.renderItem) }
      </ul>
    )
  }
}

export default TestList