export default function User({employees}) {
    
    const tableHead = (
        <thead>
            <tr>
                <th>Name</th>
                <th>Last Name</th>
                <th>Position</th>
            </tr>
        </thead>
    )

    return (
        <>
            <h2>User</h2>
            <table>
                {employees.length > 0 && tableHead}
                <tbody>
                    {employees.map((employee) => {
                        return (
                            <tr key={employee.id}>
                                <td>{employee.name}</td>
                                <td>{employee.lastname}</td>
                                <td>{employee.position}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}
