import { createSelector } from 'reselect'

const selectExample = state => state.example

export const makeSelectExample = createSelector(selectExample)
