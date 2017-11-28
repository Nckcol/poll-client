import React, { Component } from 'react'
import SubjectList from '../SubjectList/SubjectList'
import { SubjectService } from '../../services/SubjectService'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

class HomePage extends Component {

  constructor (props, state) {
    super(props, state)

    this.state = {
      subjects: null
    }

    this.subjectService = new SubjectService()

    this.fetchData()
  }

  fetchData() {
    this.subjectService.getList().then((data) => {
      this.setState({
        subjects: data
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
            : this.state.subjects
              ? (<SubjectList list={this.state.subjects}/>)
              : (<div>Loading...</div>)
        }
        <Button primary content='Add new test' icon='plus' labelPosition='left' as={Link} to='/test/new' />
      </div>
    )
  }
}

export default HomePage