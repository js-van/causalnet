import Rx from 'rx'
import {
  DATA_ADD_VARIABLE,
  DATA_CHANGE_BICLUSTERING_OPTION,
  DATA_CLEAR_EDGE_HIGHLIGHT,
  DATA_HIGHLIGHT_NEIGHBORS,
  DATA_LOAD,
  DATA_REMOVE_VARIABLE,
  DATA_SET_MODEL,
  DATA_TOGGLE_CELL,
  DATA_TOGGLE_LAYER,
  DATA_TOGGLE_VARIABLE_TYPE,
  DATA_TOGGLE_VERTEX_SELECTION,
  DATA_UPDATE_THRESHOLD
} from '../constants'

export const intentSubject = new Rx.Subject()

export const addVariable = (u) => {
  intentSubject.onNext({
    type: DATA_ADD_VARIABLE,
    u
  })
}

export const changeBiclusteringOption = (option) => {
  intentSubject.onNext({
    type: DATA_CHANGE_BICLUSTERING_OPTION,
    option
  })
}

export const clearEdgeHighlight = () => {
  intentSubject.onNext({
    type: DATA_CLEAR_EDGE_HIGHLIGHT
  })
}

export const highlightNeighbors = (u) => {
  intentSubject.onNext({
    type: DATA_HIGHLIGHT_NEIGHBORS,
    u
  })
}

export const loadDataFromFile = (file) => {
  const reader = new window.FileReader()
  reader.onload = (event) => {
    intentSubject.onNext({
      type: DATA_LOAD,
      data: JSON.parse(event.target.result)
    })
  }
  reader.readAsText(file)
}

export const removeVariable = (u) => {
  intentSubject.onNext({
    type: DATA_REMOVE_VARIABLE,
    u
  })
}

export const setModel = (U, L) => {
  intentSubject.onNext({
    type: DATA_SET_MODEL,
    U,
    L
  })
}

export const toggleCell = (name) => {
  intentSubject.onNext({
    type: DATA_TOGGLE_CELL,
    name
  })
}

export const toggleLayer = (name) => {
  intentSubject.onNext({
    type: DATA_TOGGLE_LAYER,
    name
  })
}

export const toggleVariableType = (name) => {
  intentSubject.onNext({
    type: DATA_TOGGLE_VARIABLE_TYPE,
    name
  })
}

export const toggleVertexSelection = (u) => {
  intentSubject.onNext({
    type: DATA_TOGGLE_VERTEX_SELECTION,
    u
  })
}

export const updateRThreshold = (rThreshold) => {
  intentSubject.onNext({
    type: DATA_UPDATE_THRESHOLD,
    rThreshold
  })
}