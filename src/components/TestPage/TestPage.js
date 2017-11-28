import React, {Component} from 'react'
import {Test} from '../Test'
import {TestService} from '../../services/TestService'
import {Dimmer, Loader} from 'semantic-ui-react'

class TestPage extends Component {
  constructor(props, state) {
    super(props, state)

    this.state = {
      test: null
    }

    this.testService = new TestService()
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    this
      .testService
      .getItem(this.props.match.params.id)
      .then((data) => {
        console.log(data)

        this.setState({test: data})
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render() {
    return (
      <div>
        {this.state.test
          ? <Test onSubmit={this.props.onTestSubmit} test={this.state.test}/>
          : (
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
          )
}
      </div>
    )
  }
}

export default TestPage