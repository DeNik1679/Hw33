
const ADD_CAR = 'ADD_CAR';
const INCREMENT_NUM = 'INCREMENT_NUM';
const DECREMENT_NUM = 'DECREMENT_NUM';
const RESET_NUM = 'RESET_NUM';

const INCREMENT_NUM_5 = 'INCREMENT_NUM_5';
const DECREMENT_NUM_5 = 'DECREMENT_NUM_5';


const initState = {
    cars:[
        {
            model: "BMW",
            year: 2017
        },
        {
            model: "Honda",
            year: 2015
        },
        {
            model: "Audi",
            year: 2010
        },
        {
            model: "Toyota",
            year: 2020
        },
        {
            model: "Mercedes",
            year: 2016
        }
    ],
    num: 0,
};


export default (state = initState, action) => {
    
    const limitNum = (num) => {
        if (num > 15) return 15;
        if (num < 0) return 0;
        return num;
    };

    switch (action.type) {
        case ADD_CAR: {
            return {
                ...state,
                cars: [action.car, ...state.cars]
            };
        }
        case INCREMENT_NUM: {
            return {
                ...state,
                num: limitNum(state.num + 1)
            };
        }
        case DECREMENT_NUM: {
            return {
                ...state,
                num: limitNum(state.num - 1)
            };
        }
        case RESET_NUM: {
            return {
                ...state,
                num: 0
            };
        }
        case INCREMENT_NUM_5: {
            return {
                ...state,
                num: limitNum(state.num + 5)
            };
        }
        case DECREMENT_NUM_5: {
            return {
                ...state,
                num: limitNum(state.num - 5)
            };
        }
        default:
            return state;
    }
};


export const addCar = () =>{
    return (dispatch) =>{
        dispatch({type: ADD_CAR, car: {
            model: "Nissan",
            year: 2016
        },})
    }
}


export const incrementNum = () =>{
    return (dispatch) =>{
        dispatch({type: INCREMENT_NUM})
    }
}

export const decrementNum = () =>{
    return (dispatch) =>{
        dispatch({type: DECREMENT_NUM})
    }
}


export const resetNum = () =>{
    return (dispatch) =>{
        dispatch({type: RESET_NUM})
    }
}

export const incrementNum5 = () => {
    return (dispatch) => {
        dispatch({ type: INCREMENT_NUM_5 });
    };
};

export const decrementNum5 = () => {
    return (dispatch) => {
        dispatch({ type: DECREMENT_NUM_5 });
    };
};

