import React, {Component} from 'react'
import Question from './Question'
import {Form, Button} from 'semantic-ui-react'

class Test extends Component {

  renderQuestion = (question) => {
    return (
      <div className='Test-questionItem' key={question.id}>
        <Question question={question}/>
      </div>
    )
  }

  submitHandler = () => {
    // for (question in this.props.test.questions) {   if
    // (!this.props.test.questions.hasOwnProperty(question)) {     continue   }   if
    // (!this.state.questions[question.id] ||
    // !this.state.questions[question.id].answer) {     question.error   } } this
    // .props   .onSubmit(this.state.questions);
  }

  render() {
    return (
      <div className='Test'>
        <Form onSubmit={this.submitHandler}>
          <h1 className='Test-title'>{this.props.test.title}</h1>
          <div className='Test-questions'>
            {this
              .props
              .test
              .questions
              .map(this.renderQuestion)}
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