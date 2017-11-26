import React, { Component } from 'react'
import Answer from './Answer'
import './Question.css'

class Question extends Component {

  letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N']
  
  state = {
    selected: null
  }

  handleChange = (answerId, e) => {
    return this.setState({
      selected: answerId
    })
  }

  renderAnswer = (answer, index) => {
    return (
      <div className='Question-answerItem' key={answer.id}>
        <Answer 
          answer={answer}
          questionId={this.props.question.id}
          option={this.letters[index]}
          checked={this.state.selected === answer.id}
          onChange={this.handleChange.bind(this, answer.id)}
          />
      </div>
    )
  }

  render() {
    const {
      question,
    } = this.props

    return (
      <div className='Question'>
        <h3 className='Question-text'>{question.text}</h3>
        <div className='Question-answerList'>
          { question.answers.map(this.renderAnswer) }
        </div>
      </div>
    )
  }
}

export default Question