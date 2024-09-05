import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'

import './Table.css'

export const Table = ({ rows, deleteRow, editRow, columnName, columnID }) => {
    return (
        <div className="table-wrapper">
            <table className="table">
                <thead>
                    <tr>
                        {columnName.map((name: string) => (
                            <th>{name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, idx) => {
                        return (
                            <tr key={idx}>
                                {columnID.map((id: string) => (
                                    <td>{row[id]}</td>
                                ))}
                                <td className="fit">
                                    <span className="actions">
                                        <BsFillTrashFill
                                            className="delete-btn"
                                            onClick={() => deleteRow(idx)}
                                        />
                                        <BsFillPencilFill
                                            className="edit-btn"
                                            onClick={() => editRow(idx)}
                                        />
                                    </span>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
