import { useSelector } from "react-redux";

const Num = () => {
    const cars = useSelector((store)=>{
        return store.car.cars
    });
    const num = useSelector(s => s.car.num)
    return (
        <div style={{
            textAlign: 'center',
        }}>
            {
                <h1>{num}</h1>
            }
            {/* {
                cars.map(item =>{
                    return <h1>{item.model}</h1>
                })
            } */}
        </div>
    );
}

export default Num;
