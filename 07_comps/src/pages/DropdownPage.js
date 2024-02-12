import Dropdown from "../components/Dropdown";
import { useState } from "react";

function DropdownPage() {
    const [selected, setSelected] = useState(null);

    const handleSelect = (option) => {
        setSelected(option);
    }

    const options = [
        {
            label: 'The color Red',
            value: 'red'
        },
        {
            label: 'The color Green',
            value: 'green'
        },
        {
            label: 'A shade of Blue',
            value: 'blue'
        }
    ];

    return (
        <div>
            <Dropdown options={options} value={selected} onChange={handleSelect} />
        </div>
    );
}

export default DropdownPage;