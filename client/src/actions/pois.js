import * as api from "../api/index";

// Action Creators 
export const getPois = () => async (dispatch) => {
    try {
        const { data } = await api.getPois();
        console.log("actions pois", data);
        dispatch({ type: "FETCH_ALL", payload: data });
    } catch (error) {
        console.log(error.message)
    }
}
