import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

function CarList() {
    const dispatch = useDispatch();
    const { carList, name } = useSelector(({ cars: { searchTerm, list }, form: { name } }) => {
        const term = searchTerm.toLowerCase();
        const carList = list.filter((car) => {
            return car.name.toLowerCase().includes(term);
        });



        return { carList, name }
    });

    const hanleCarDelete = (car) => {
        dispatch(removeCar(car.id));
    }

    const renderedCars = carList.map((car) => {
        const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
        const className = `panel ${bold && "bold"}`;

        return (
            <div key={car.id} className={className}>
                <p>
                    {car.name} - ${car.cost}
                </p>
                <button className="button is-danger" onClick={() => hanleCarDelete(car)}>Delete</button>
            </div>
        )
    });

    return (<div className="car-list">
        {renderedCars}
        <hr />
    </div>)
}

export default CarList;