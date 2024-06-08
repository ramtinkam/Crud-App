import React,{ useState } from "react";
import Axios from "axios";

const Student = () => {
    const [studentList,setStudentList] = useState([]);
    const [studentUpdateData, setStudentUpdateData] = useState({ID:"",name:"",dept_name:"",tot_cred:""});
    const [studentInsertData, setStudentInsertData] = useState({ID:"",name:"",dept_name:"",tot_cred:""});
    const [deleteId,setDeleteid] = useState("");


    const getStudents = () => {
        Axios.get("http://localhost:3001/students").then((response) => {
          setStudentList(response.data);
        });
    };
    const updateStudent = (event) => {
        Axios.put("http://localhost:3001/student/update", { ID: event.target[0].value, name: event.target[1].value, dept_name: event.target[2].value, tot_cred: event.target[3].value })      
    };
    const insertStudent = (event) => {
        Axios.post("http://localhost:3001/student/create", { ID: event.target[0].value, name: event.target[1].value, dept_name: event.target[2].value, tot_cred: event.target[3].value  })      
    };
    const deleteStudent = (event) => {
        const id = event.target[0].value;
        Axios.delete(`http://localhost:3001/student/delete/${id}`)
    };

    return (
        <div id="studentTable">
            <div class="sunken-panel">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>name</th>
                            <th>dept_name</th>
                            <th>tot_cred</th>
                        </tr>
                    </thead>
                    <tbody>
                    {studentList.map((val) => {
                        return (
                            <tr>
                            <td>{val.ID}</td>
                            <td>{val.name}</td>
                            <td>{val.dept_name}</td>
                            <td>{val.tot_cred}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
            <form onSubmit={updateStudent}>
                <label> ID:
                <input type="text" value={studentUpdateData.ID} onChange={(event) => {setStudentUpdateData(event.target.value);}}/>
                </label> 
                <label> name:
                <input type="text" value={studentUpdateData.name} onChange={(event) => {setStudentUpdateData(event.target.value);}}/>
                </label>
                <label> dept_name:
                <input type="text" value={studentUpdateData.dept_name} onChange={(event) => {setStudentUpdateData(event.target.value);}}/>
                </label> 
                <label> tot_cred:
                <input type="text" value={studentUpdateData.tot_cred} onChange={(event) => {setStudentUpdateData(event.target.value);}}/>
                </label>  
                <input type="submit" value="Update" />
            </form>
            <form onSubmit={insertStudent}>
                <label> ID:
                <input type="text" value={studentInsertData.ID} onChange={(event) => {setStudentInsertData(event.target.value);}}/>
                </label> 
                <label> name:
                <input type="text" value={studentInsertData.name} onChange={(event) => {setStudentInsertData(event.target.value);}}/>
                </label>
                <label> dept_name:
                <input type="text" value={studentInsertData.dept_name} onChange={(event) => {setStudentInsertData(event.target.value);}}/>
                </label> 
                <label> tot_cred:
                <input type="text" value={studentInsertData.tot_cred} onChange={(event) => {setStudentInsertData(event.target.value);}}/>
                </label>  
                <input type="submit" value="Insert" />
            </form>
            <form onSubmit={deleteStudent}>
                <label> ID:
                <input type="text" value={deleteId} onChange={(event) => {setDeleteid(event.target.value);}}/>
                </label> 
                <input type="submit" value="Delete" />
            </form>
        
        
        
        
            <button onClick={getStudents}>Refresh</button>
        </div>
    )
}

export default Student