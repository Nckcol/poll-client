import React, { Component } from 'react'
import TestList from '../TestList/TestList'
import { SubjectService } from '../../services/SubjectService'

class SubjectPage extends Component {

  constructor (props, state) {
    super(props, state)

    this.state = {
      tests: null
    }

    this.subjectService = new SubjectService()

    this.fetchData()
  }

  fetchData() {
    this.subjectService.getItem(this.props.match.params.id).then((data) => {
      this.setState({
        tests: data.tests
      })
    })
      .catch((error) => {
        console.error(error)
        this.setState({
          error: error
        })
      })
  }

  render() {
    return (
      <div>
      {
        this.state.error
        ? (<div>Error: {this.state.error.message}. Try to reload page</div>)
        : this.state.tests
          ? (<TestList list={this.state.tests} />)
          : (<div>Loading...</div>)
      }
      </div>
    )
  }
}

export default SubjectPage