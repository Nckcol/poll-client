import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {List} from 'semantic-ui-react'

class TestList extends Component {
  renderItem(item) {
    return (
      <List.Item>
        <List.Content as={Link} to={`/test/${item.id}`}>
          <List.Header>{item.title}</List.Header>
        </List.Content>
      </List.Item>
    )
  }
  render() {
    return (
      <List selection verticalAlign='middle'>
        {this
          .props
          .list
          .map(this.renderItem)}
      </List>
    )
  }
}

export default TestList