import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SubjectList extends Component {

  renderItem(item) {
    return (
      <li key={item.id}>
        <Link to={`/subject/${item.id}`}>{ item.title }</Link>
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

export default SubjectList