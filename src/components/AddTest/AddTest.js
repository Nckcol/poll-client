import React, { Component } from 'react'
import { Input, Button } from 'semantic-ui-react'
import './AddTest.css'
import { TestService } from '../../services/TestService';

class AddTest extends Component {

    letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']

    state = {
        title: '',
        editTitle: true,
        questions: []
    }

    constructor(...vars) {
        super(...vars)
        
        this.testService = new TestService()
    }

    addQuestion = (event) => {
        this.setState({
            addQuestionForm: {
                text: '',
                answers: [],
                newAnswer: {
                    text: '',
                }
            }
        })
    }

    renderAnswer = (answer, index) => {
        return (
            <div key={index}>
                <p>{this.letters[index]}. {answer.text}</p>
            </div>
        )
    }

    renderQuestion = (question, index) => {
        return (
            <div key={index} className='addTest-questionRow'>
                <h2><span>{index + 1}.</span> {question.text}</h2>
                { question.answers.map(this.renderAnswer) }
            </div>
        )
    }

    saveQuestion = (e) => {
        e.preventDefault()

        this.setState( (state) => {
            return {
                questions: [
                    ...state.questions,
                    {
                        text: state.addQuestionForm.text,
                        answers: [
                            ...state.addQuestionForm.answers
                        ]
                    }
                ],
                addQuestionForm: null
            }
        })
    }

    changeQuestionText = (e) => {
        const {
            value
        } = e.target

        this.setState(state => ({
            addQuestionForm: {
                text: value,
                answers: [
                    ...state.addQuestionForm.answers
                ],
                newAnswer: state.addQuestionForm.newAnswer
            }
        }))
    }

    saveAnswer = (e) => {
        e.preventDefault()

        this.setState( (state) => {
            return {
                addQuestionForm: {
                    text: state.addQuestionForm.text,
                    answers: [
                        ...state.addQuestionForm.answers,
                        {
                            text: state.addQuestionForm.newAnswer.text
                        }
                    ],
                    newAnswer: null
                }
            }
        })
    }

    changeAnswer = (e) => {
        const value = e.target.value
        this.setState( (state) => {
            return {
                addQuestionForm: {
                    text: state.addQuestionForm.text,
                    answers: [
                        ...state.addQuestionForm.answers,
                    ],
                    newAnswer: {
                        text: value
                    }
                }
            }
        })
    }

    addNewAnswer = () => {
        this.setState((state) => {
            return {
                addQuestionForm: {
                    text: state.addQuestionForm.text,
                    answers: [
                        ...state.addQuestionForm.answers
                    ],
                    newAnswer: {}
                }
            }
        })
    }

    renderAddQuestionForm () {
        return (
            <div className='addTest-questionRow addTest-questionRow--newForm'>
                <Input 
                    label={this.state.questions.length + 1 + '.'} 
                    type='text' 
                    placeholder='Enter question' 
                    onChange={e => this.changeQuestionText(e)}
                    value={this.state.addQuestionForm.text} />
                
                { 
                    this.state.addQuestionForm.answers
                    ? this.state.addQuestionForm.answers.map(this.renderAnswer)
                    : null
                }
                {
                    this.state.addQuestionForm.newAnswer
                    ? (
                        <div>
                            <Input 
                                label={this.letters[this.state.addQuestionForm.answers.length] + '.'} 
                                labelPosition='left' 
                                type='text' 
                                placeholder='Enter answer text'
                                onChange={e => this.changeAnswer(e)}
                                value={this.state.addQuestionForm.newAnswer.text}
                                />
                            <Button content='Save' onClick={(e) => this.saveAnswer(e)} />
                        </div>
                    )
                    :  <Button content='Add answer' icon='plus' labelPosition='left' onClick={this.addNewAnswer} />
                }
                <br />
                <Button content='Save' onClick={(e) => this.saveQuestion(e)} />
            </div>
        )
    }

    saveTitle (e) {
        e.preventDefault()
        this.setState({
            editTitle: false
        })
    }

    renderEditTitle() {
        return (
            <div className='addTest-titleHolder'>
                <div className='addTest-titleInput'>
                    <Input 
                        type='text' 
                        placeholder='Enter test title' 
                        value={this.state.title}
                        fluid
                        onChange={(e) => this.setState({ title: e.target.value })}
                        />
                </div>

                <div className='addTest-titleButton'>
                    <Button content='Save' onClick={(e) => this.saveTitle(e)} />
                </div>
            </div>
        )
    }

    submit (e) {
        const resp = this.testService.create({
            title: this.state.title,
            questions: [
                ...this.state.questions
            ]
        })

        console.log(resp)
    }

    render() {
        return (
            <div>
                { 
                    this.state.editTitle 
                    ? this.renderEditTitle()
                    : <h1>{this.state.title}</h1>
                }
                <div className="addTest-list">
                { this.state.questions.map(this.renderQuestion) }
                { 
                    this.state.addQuestionForm
                    ? this.renderAddQuestionForm()
                    : null
                }
                </div>
                <Button primary content='Submit' onClick={e => this.submit(e)}/>
                {
                    this.state.addQuestionForm
                    ? null
                    : <Button content='Add question' icon='plus' labelPosition='left' onClick={this.addQuestion} />
                }
            </div>
        )
    }
}

export {
    AddTest
}