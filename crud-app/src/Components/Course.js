import React,{ useState } from "react";
import Axios from "axios";


const Course = () => {
  const [courseList,setcourseList] = useState([]);
    const [courseUpdateData, setcourseUpdateData] = useState({course_id:"",title:"",dept_name:"",credits:0});
    const [courseInsertData, setcourseInsertData] = useState({course_id:"",title:"",dept_name:"",credits:0});
    const [deleteData,setDeleteData] = useState({course_id:""});


    const getcourse = () => {
        Axios.get("http://localhost:3001/course").then((response) => {
          setcourseList(response.data);
        });
    };
    const updatecourse = (event) => {
        Axios.put("http://localhost:3001/course/update", {course_id: event.target[0].value,title: event.target[1].value,dept_name: event.target[2].value,credits: event.target[3].value })      
    };
    const insertcourse = (event) => {
        Axios.post("http://localhost:3001/course/create", { course_id: event.target[0].value,title: event.target[1].value,dept_name: event.target[2].value,credits: event.target[3].value })      
    };
    const deletecourse = (event) => {
        Axios.delete("http://localhost:3001/course/delete",{data:{course_id: event.target[0].value}})
    };
  
  
    return (
    <div id="courseTable">
            <div class="sunken-panel">
                <table>
                    <thead>
                        <tr>
                            <th>course_id</th>
                            <th>title</th>
                            <th>dept_name</th>
                            <th>credits</th>

                        </tr>
                    </thead>
                    <tbody>
                    {courseList.map((val) => {
                        return (
                            <tr>
                            <td>{val.course_id}</td>
                            <td>{val.title}</td>
                            <td>{val.dept_name}</td>
                            <td>{val.credits}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
            <form onSubmit={updatecourse}>
                <label> course_id:
                <input type="text" value={courseUpdateData.course_id} onChange={(event) => {setcourseUpdateData(event.target.value);}}/>
                </label>
                <label> title:
                <input type="text" value={courseUpdateData.title} onChange={(event) => {setcourseUpdateData(event.target.value);}}/>
                </label> 
                <label> dept_name:
                <input type="text" value={courseUpdateData.dept_name} onChange={(event) => {setcourseUpdateData(event.target.value);}}/>
                </label>  
                <label> credits:
                <input type="text" value={courseUpdateData.ccredits} onChange={(event) => {setcourseUpdateData(event.target.value);}}/>
                </label>   
                <input type="submit" value="Update" />
            </form>
            <form onSubmit={insertcourse}>
                <label> course_id:
                <input type="text" value={courseInsertData.course_id} onChange={(event) => {setcourseInsertData(event.target.value);}}/>
                </label>
                <label> title:
                <input type="text" value={courseInsertData.sec_id} onChange={(event) => {setcourseInsertData(event.target.value);}}/>
                </label> 
                <label> dept_name:
                <input type="text" value={courseInsertData.semester} onChange={(event) => {setcourseInsertData(event.target.value);}}/>
                </label> 
                <label> credits:
                <input type="text" value={courseInsertData.year} onChange={(event) => {setcourseInsertData(event.target.value);}}/>
                </label>
                <input type="submit" value="Insert" />
            </form>
            <form onSubmit={deletecourse}>
                <label> course_id:
                <input type="text" value={deleteData.course_id} onChange={(event) => {setDeleteData(event.target.value);}}/>
                </label>
                <input type="submit" value="Delete" />
            </form>
        
        
        
        
            <button onClick={getcourse}>Refresh</button>
        </div>
  )
}

export default Course