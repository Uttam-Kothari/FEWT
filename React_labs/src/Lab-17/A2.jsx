import React from 'react'

function A2() {
    let faculty = [
        {
            name: "Dr. John Smith",
            department: "Computer Science",
            position: "Professor",
            email: "john.smith@university.edu",
            phone: "123-456-a7890"
        },

        {
            name: "Dr. Laura Martinez",
            department: "English",
            position: "Assistant Professor",
            email: "laura.martinez@university.edu",
            phone: "678-901-2345"
        },
        {
            name: "Dr. James Taylor",
            department: "History",
            position: "Professor",
            email: "james.taylor@university.edu",
            phone: "789-012-3456"
        },
        {
            name: "Dr. Jennifer Anderson",
            department: "Philosophy",
            position: "Lecturer",
            email: "jennifer.anderson@university.edu",
            phone: "890-123-4567"
        },
        {
            name: "Dr. William Thomas",
            department: "Economics",
            position: "Associate Professor",
            email: "william.thomas@university.edu",
            phone: "901-234-5678"
        },
        {
            name: "Dr. Mary Jackson",
            department: "Sociology",
            position: "Professor",
            email: "mary.jackson@university.edu",
            phone: "012-345-6789"
        }];
    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>DEPARTMENT</th>
                        <th>POSITION</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        faculty.length > 0 ? (faculty.map((s) => {
                            return (
                                <tr>
                                    <td> {s.name}</td>
                                    <td> {s.department}</td>
                                    <td> {s.position}</td>
                                    <td> {s.email}</td>
                                    <td> {s.phone}</td>
                                </tr>
                            )
                        })) : (<h1>object is empty....</h1> )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default A2