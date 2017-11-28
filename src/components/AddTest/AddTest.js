import React, { Component } from 'react'
import { Input, Label, Button } from 'semantic-ui-react'

class AddTest extends Component {

    letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']

    state = {
        questions: []
    }

    addQuestion = (event) => {
        this.setState((state) => ({
            questions: [
                ...state.questions,
                {
                    text: '',
                    answers: []
                }
            ]
        }))
    }

    addAnswer = (event, index) => {
        this.setState( (state) => {
            
            state.questions[index].answers.push({
                text: ''
            })

            return state
        })
    }

    renderAnswer = (answer, index) => {
        return (
            <div>
                <Input labelPosition='left' type='text' placeholder='Enter answer text'>
                    <Label basic>{this.letters[index]}.</Label>
                    <input value={answer.text} />
                </Input>
            </div>
        )
    }

    renderQuestion = (question, index) => {
        const rootStyle = {
            border: '1px solid #eee',
            padding: '20px'
        }
        return (
            <div style={rootStyle}>
                <span>{index + 1}.</span> 
                <Input type='text' placeholder='Enter question' value={question.text} />
                { question.answers.map(this.renderAnswer) }
                <br />
                <Button content='Add answer' onClick={(e) => this.addAnswer(e, index)} />
            </div>
        )
    }

    render() {
        return (
            <div>
                <div className="addTest-list">
                { this.state.questions.map(this.renderQuestion) }
                </div>
                <Button primary content='Submit' />
                <Button content='Add question' icon='plus' labelPosition='left' onClick={this.addQuestion} />
            </div>
        )
    }
}

export {
    AddTest
}