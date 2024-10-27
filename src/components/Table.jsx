const Table = (props) => {
    // TODO: answer here
    const { students } = props;

    return (
        <>
            <table id="table-student">
                <tr>
                    <th>No</th>
                    <th>Fullname</th>
                    <th>Birth Date</th>
                    <th>Gender</th>
                    <th>Faculity</th>
                    <th>Program Study</th>
                    <th>Option</th>
                </tr>
                <tr>
                    {
                        students?.map((student, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{student.fullname}</td>
                                    <td>{student.birthDate}</td>
                                    <td>{student.gender}</td>
                                    <td>{student.faculty}</td>
                                    <td>{student.programStudy}</td>
                                    <td>
                                        <button>Edit</button>
                                        <button>Delete</button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tr>
            </table>
        </>
    );
};

export default Table;
