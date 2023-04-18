export default function Admin({employees, onChange, onSave, onDelete, inputs}) {
    // console.log(onDelete)
    const tableHead = (
    <thead>
        <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
            <th>Action</th>
        </tr>
    </thead>
)

    return (
        <>
            <h3>Create User Here</h3>
            <form>
                <input placeholder="Name" onChange={onChange} value={inputs.name} name='name' type="text" />
                <input placeholder="Lastname" onChange={onChange} value={inputs.lastname} name='lastname' type="text" />
                <input placeholder="Position" onChange={onChange} value={inputs.position} name='position' type="text" />
                <button onClick={onSave} type="button">Save</button>
            </form>
            <table>
                {/* Check if employees array is empty, It will remove table head*/}
                {employees.length > 0 && tableHead}
                <tbody>
                    {employees.map((employee) => {
                        return (
                            <tr key={employee.id}>
                                <td>{employee.name}</td>
                                <td>{employee.lastname}</td>
                                <td>{employee.position}</td>
                                <td><a onClick={() => onDelete(employee.id)}>Delete</a></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}