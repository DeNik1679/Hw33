import { useDispatch } from "react-redux";
import { addCar, incrementNum, decrementNum, resetNum  ,incrementNum5 ,decrementNum5} from "./redux/reducers/car";

const Btn = () => {
    const dispatch = useDispatch();
    return (
        <div style={{
            textAlign: 'center'
        }}>
            <button onClick={()=>{
                dispatch(incrementNum())
            }}>+1</button>
            <button onClick={()=>{
                dispatch(decrementNum())
            }}>-1</button>
            <button onClick={()=>{
                dispatch(resetNum())
            }}>reset</button>
             <button onClick={() => dispatch(incrementNum5())}>+5</button>
                <button onClick={() => dispatch(decrementNum5())}>-5</button>
        </div>
    );
}

export default Btn;
