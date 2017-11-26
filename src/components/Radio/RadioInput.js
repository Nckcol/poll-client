import React, { Component } from 'react'
import classNames from 'classnames'
import './RadioInput.css'

class RadioInput extends Component {
  constructor (props) {
    super(props)

    this.state = {
      checked: this.props.checked || false
    }
  }

  render() {
    return (
      <div className={classNames('RadioInput', this.props.className)}>
        <input type='radio' name={this.props.name} className='RadioInput-element'/>
        <label className='RadioInput-label'>
          <div className='RadioInput-appearance'/>
          {this.props.render(this.props)}
        </label>
      </div>
    )
  }
}

export default RadioInput