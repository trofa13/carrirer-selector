import {
    FLIGHTS_LOAD_START,
    FLIGHTS_LOAD_SUCCESS,
    FLIGHTS_LOAD_FAIL,
    SELECTED_CARRIER_CHANGE,
} from '../constants/flights';

const initialState = {
  flights: [],
  selectedCarrier: '',
  fetching: false,
};

export default function flightsState(state = initialState, action) {
  switch (action.type) {
    case FLIGHTS_LOAD_START:
      return { ...state, fetching: true };
    case FLIGHTS_LOAD_SUCCESS:
      return { ...state, flights: action.payload, fetching: false };
    case FLIGHTS_LOAD_FAIL:
      return { ...state, error: action.payload, fetching: false };
    case SELECTED_CARRIER_CHANGE:
      return { ...state, selectedCarrier: action.payload };
    default:
      return state;
  }
}
