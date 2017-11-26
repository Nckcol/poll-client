import React, { Component } from 'react'
import Question from './Question'
import { Form, Button } from 'semantic-ui-react'

class Test extends Component {

  renderQuestion = (question) => {
    return (
      <div className='Test-questionItem' key={question.id}>
        <Question question={question} />
      </div>
    )
  }

  submitHandler = (event) => {
    event.preventDefault()
    const data = new FormData(this.form)
    console.log(data.entries(), this.form)
  }

  render() {
    return (
      <div className='Test'>
        <Form onSubmit={this.submitHandler}>
          <h1 className='Test-title'>{this.props.test.title}</h1>
          <div className='Test-questions'>
            { this.props.test.questions.map(this.renderQuestion) }
          </div>
          <div className='Test-actions'>
            <Button primary>Submit</Button>
          </div>
        </Form>
      </div>
    )
  }
}

export default Test