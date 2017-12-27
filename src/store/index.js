import { createStore, combineReducers } from 'redux'
import * as ducks from '../ducks'

export default createStore(
    combineReducers({
        tests: ducks.tests,
        subjects: ducks.subjects
    })
)