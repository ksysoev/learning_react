import { useState } from "react";
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";
import Table from "./Table";

function SortableTable(props) {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const { config, data } = props;

    const handleClick = (label) => {
        if (sortBy === label) {
            if (sortOrder === "asc") {
                setSortOrder("desc");
            } else if (sortOrder === "desc") {
                setSortOrder(null);
                setSortBy(null);
            }
        } else {
            setSortOrder("asc");
            setSortBy(label);
        }
    };

    const updatedConfig = config.map((column) => {
        const { sortValue } = column;
        if (sortValue) {
            return {
                ...column,
                header: () => <th className="cursor-pointer hover:bg-gray-100" onClick={() => handleClick(column.label)}>
                    <div className="flex items-center">
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                    </div>
                </th>
            }
        }
        return column;
    });

    let sortedData = data;
    if (sortOrder && sortBy) {
        const { sortValue } = config.find((column) => column.label === sortBy);
        const reversedOrder = sortOrder === "asc" ? 1 : -1;
        sortedData = [...data].sort((a, b) => {
            const aValue = sortValue(a);
            const bValue = sortValue(b);
            if (typeof (aValue) === "string") {
                return reversedOrder * aValue.localeCompare(bValue);
            }

            return reversedOrder * (aValue - bValue);
        });
    }

    return (
        <Table {...props} config={updatedConfig} data={sortedData} />
    )
}

function getIcons(label, sortBy, sortOrder) {
    if (label === sortBy) {
        if (sortOrder === "asc") {
            return <div><GoArrowSmallUp /></div>;
        }

        return <div><GoArrowSmallDown /></div>;
    }
    return <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
    </div>;
}

export default SortableTable;