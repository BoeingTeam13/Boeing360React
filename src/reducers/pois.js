
const pois = (pois = [], action) => {
    switch (action.type) {
        case "FETCH_ALL":
            console.log("reducers", action.payload);
            return action.payload;
        default:
            return pois;
    }
}

export default pois;