import React from 'react';

const Table = ({data}) => {
    return (
        <table className="tbl min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>like</th>
                    <th>created</th>
                    <th>updated</th>
                    <th>status</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row) => (
                    <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.title}</td>
                        <td>{row.like}</td>
                        <td>{row.created_at}</td>
                        <td>{row.updated_at}</td>
                        <td>{row.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
