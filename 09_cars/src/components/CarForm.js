import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../store";

function CarForm() {
    const dispatch = useDispatch();
    const { name, cost } = useSelector((state) => state.form);

    const handleChangeName = (e) => {
        dispatch(changeName(e.target.value));
    }

    const handleChangeCost = (e) => {
        const carCost = parseInt(e.target.value) || 0;
        dispatch(changeCost(carCost));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addCar({ name, cost }));
    }

    return (
        <div className="car-form panel">
            <h4 className="subtitle is-3">Add Car</h4>
            <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input className="input is-expanded" type="text" value={name} onChange={handleChangeName} />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Cost</label>
                        <div className="control">
                            <input className="input is-expanded" type="number" value={cost || ""} onChange={handleChangeCost} />
                        </div>
                    </div>
                    <div className="field">
                        <button className="button is-link" type="submit">Add Car</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CarForm;