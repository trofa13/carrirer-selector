import axios from 'axios';
import {
    FLIGHTS_LOAD_START,
    FLIGHTS_LOAD_SUCCESS,
    FLIGHTS_LOAD_FAIL,
    SELECTED_CARRIER_CHANGE
} from '../constants/flights';

export function loadAllFlights() {
  return (dispatch) => {
    dispatch({type: FLIGHTS_LOAD_START});

    axios.get('/api/flights')
        .then(resp => {
            dispatch({
                type: FLIGHTS_LOAD_SUCCESS,
                payload: resp.data && resp.data.flights
            })
        })
        .catch(e => {
            dispatch({
                type: FLIGHTS_LOAD_FAIL,
                payload: e.response.data
            })
        });
  }
}

export function setSelectedCarrier(carrier) {
    return {
        type: SELECTED_CARRIER_CHANGE,
        payload: carrier
    }
}
