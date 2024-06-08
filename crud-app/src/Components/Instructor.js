import React,{ useState } from "react";
import Axios from "axios";


const Instructor = () => {
    const [InstructorList,setInstructorList] = useState([]);
    const [InstructorUpdateData, setInstructorUpdateData] = useState({ID:"",name:"",dept_name:"",salary:0});
    const [InstructorInsertData, setInstructorInsertData] = useState({ID:"",name:"",dept_name:"",salary:0});
    const [deleteId,setDeleteid] = useState("");


    const getInstructors = () => {
        Axios.get("http://localhost:3001/instructors").then((response) => {
          setInstructorList(response.data);
        });
    };
    const updateInstructor = (event) => {
        Axios.put("http://localhost:3001/instructor/update", { ID: event.target[0].value, name: event.target[1].value, dept_name: event.target[2].value, salary: event.target[3].value })      
    };
    const insertInstructor = (event) => {
        Axios.post("http://localhost:3001/instructor/create", { ID: event.target[0].value, name: event.target[1].value, dept_name: event.target[2].value, salary: event.target[3].value  })      
    };
    const deleteInstructor = (event) => {
        const id = event.target[0].value;
        Axios.delete(`http://localhost:3001/instructor/delete/${id}`)
    };

    return (
        <div id="InstructorTable">
            <div class="sunken-panel">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>name</th>
                            <th>dept_name</th>
                            <th>salary</th>
                        </tr>
                    </thead>
                    <tbody>
                    {InstructorList.map((val) => {
                        return (
                            <tr>
                            <td>{val.ID}</td>
                            <td>{val.name}</td>
                            <td>{val.dept_name}</td>
                            <td>{val.salary}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
            <form onSubmit={updateInstructor}>
                <label> ID:
                <input type="text" value={InstructorUpdateData.ID} onChange={(event) => {setInstructorUpdateData(event.target.value);}}/>
                </label> 
                <label> name:
                <input type="text" value={InstructorUpdateData.name} onChange={(event) => {setInstructorUpdateData(event.target.value);}}/>
                </label>
                <label> dept_name:
                <input type="text" value={InstructorUpdateData.dept_name} onChange={(event) => {setInstructorUpdateData(event.target.value);}}/>
                </label> 
                <label> salary:
                <input type="text" value={InstructorUpdateData.salary} onChange={(event) => {setInstructorUpdateData(event.target.value);}}/>
                </label>  
                <input type="submit" value="Update" />
            </form>
            <form onSubmit={insertInstructor}>
                <label> ID:
                <input type="text" value={InstructorInsertData.ID} onChange={(event) => {setInstructorInsertData(event.target.value);}}/>
                </label> 
                <label> name:
                <input type="text" value={InstructorInsertData.name} onChange={(event) => {setInstructorInsertData(event.target.value);}}/>
                </label>
                <label> dept_name:
                <input type="text" value={InstructorInsertData.dept_name} onChange={(event) => {setInstructorInsertData(event.target.value);}}/>
                </label> 
                <label> salary:
                <input type="text" value={InstructorInsertData.salary} onChange={(event) => {setInstructorInsertData(event.target.value);}}/>
                </label>  
                <input type="submit" value="Insert" />
            </form>
            <form onSubmit={deleteInstructor}>
                <label> ID:
                <input type="text" value={deleteId} onChange={(event) => {setDeleteid(event.target.value);}}/>
                </label> 
                <input type="submit" value="Delete" />
            </form>
        
        
        
        
            <button onClick={getInstructors}>Refresh</button>
        </div>
    )
  

}

export default Instructor