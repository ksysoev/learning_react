import useSort from "../hooks/use-sort";
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";
import Table from "./Table";

function SortableTable(props) {
    const { config, data } = props;
    const { sortOrder, sortBy, setSortBy, sortedData } = useSort(data, config);

    const updatedConfig = config.map((column) => {
        const { sortValue } = column;
        if (sortValue) {
            return {
                ...column,
                header: () => <th className="cursor-pointer hover:bg-gray-100" onClick={() => setSortBy(column.label)}>
                    <div className="flex items-center">
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                    </div>
                </th>
            }
        }
        return column;
    });

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