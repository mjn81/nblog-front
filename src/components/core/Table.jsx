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
                    <th>status</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row) => (
                    <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.title}</td>
                        <td>{row.like_count}</td>
                        <td>{row.created_at.split('T')[0]}</td>
                        <td>{row.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
