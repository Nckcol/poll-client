import React, { Component } from 'react'
import classNames from 'classnames'
import './RadioGroup.css'

class RadioGroup extends Component {

  // getChildContext() {
  //   const {name, selectedValue, onChange} = this.props;
  //   return {
  //     radioGroup: {
  //       name, selectedValue, onChange
  //     }
  //   }
  // }

  clickHandler = (event) => {
    //event.preventDefault();

    this.setState({
      checked: true
    })

    if(typeof this.props.onChange === 'function') {
      this.props.onChange()
    }
  }

  render() {
    return (
      <div
        className={classNames('RadioGroup', this.props.className)}
        role='radiogroup'
        aria-labelledby={''}
      >
        {this.props.children}
      </div>
    )
  }
}

export default RadioGroup