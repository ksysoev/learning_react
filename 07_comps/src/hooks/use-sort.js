import { useState } from "react";

function useSort(data, config) {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const updateSort = (label) => {
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


    return {
        sortOrder,
        sortBy,
        setSortBy: updateSort,
        sortedData
    }
}

export default useSort;