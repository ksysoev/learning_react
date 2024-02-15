import { useSelector } from "react-redux";

function CarValue() {
    const totalCost = useSelector(({ cars: { searchTerm, list } }) => {
        const term = searchTerm.toLowerCase();
        return list.filter((car) => {
            return car.name.toLowerCase().includes(term);
        }).reduce((acc, car) => acc + car.cost, 0);

    });

    return (<div className="car-value">
        Total Cost: ${totalCost}
    </div>)
}

export default CarValue;