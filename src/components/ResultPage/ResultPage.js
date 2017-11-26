import React, { Component } from 'react'

class ResultPage extends Comment {
    render () {
        return (
            <div>
                <div>Your score is</div>
                <h2>{this.state.score.current}/{this.state.score.max}</h2>
            </div>
        )
    }
}