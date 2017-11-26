import React, { Component } from 'react'
import { Form, Radio } from 'semantic-ui-react'

class Answer extends Component {
  render() {
    return (
        <Form.Field>
          <Radio
          label={`${this.props.option}. ${this.props.answer.text}`}
          name={`question-${this.props.questionId}`}
          value={this.props.answer.id}
          checked={this.props.checked}
          onChange={this.props.onChange}
          />
        </Form.Field>
    )
  }
}

export default Answer