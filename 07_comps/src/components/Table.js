function Table({ data, config, keyGenerator }) {
    const renderedHeaders = config.map((column) => {
        return <th key={column.label}>{column.label}</th>
    })

    const renderedRows = data.map((rowData) => {
        const renderedRow = config.map((column) => {
            return <td key={column.label} className="p-3">{column.render(rowData)}</td>
        })

        return <tr key={keyGenerator(rowData)} className="border-b">{renderedRow}</tr>
    })



    return (
        <tabel className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    {renderedHeaders}
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </tabel>
    );
}

export default Table;