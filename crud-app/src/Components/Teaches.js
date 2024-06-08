import React,{ useState } from "react";
import Axios from "axios";

const Teaches = () => {
    const [teachesList,setTeachesList] = useState([]);
    const [teachesInsertData, setTeachesInsertData] = useState({ID:"",course_id:"",sec_id:"",semester:"",year:""});
    const [deleteData,setDeleteData] = useState({ID:"",course_id:"",sec_id:"",semester:"",year:""});


    const getTeaches = () => {
        Axios.get("http://localhost:3001/teaches").then((response) => {
          setTeachesList(response.data);
        });
    };
    const insertTeaches = (event) => {
        Axios.post("http://localhost:3001/teaches/create", { ID: event.target[0].value, course_id: event.target[1].value, sec_id: event.target[2].value, semester: event.target[3].value ,year: event.target[4].value, grade: event.target[5].value })      
    };
    const deleteTeaches = (event) => {
        Axios.delete("http://localhost:3001/teaches/delete",{data:{ID: event.target[0].value, course_id: event.target[1].value, sec_id: event.target[2].value, semester: event.target[3].value ,year: event.target[4].value}})
    };
  
  
    return (
    <div id="teachesTable">
            <div class="sunken-panel">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>course_id</th>
                            <th>sec_id</th>
                            <th>semester</th>
                            <th>year</th>
                        </tr>
                    </thead>
                    <tbody>
                    {teachesList.map((val) => {
                        return (
                            <tr>
                            <td>{val.ID}</td>
                            <td>{val.course_id}</td>
                            <td>{val.sec_id}</td>
                            <td>{val.semester}</td>
                            <td>{val.year}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
            <form onSubmit={insertTeaches}>
                <label> ID:
                <input type="text" value={teachesInsertData.ID} onChange={(event) => {setTeachesInsertData(event.target.value);}}/>
                </label> 
                <label> course_id:
                <input type="text" value={teachesInsertData.course_id} onChange={(event) => {setTeachesInsertData(event.target.value);}}/>
                </label>
                <label> sec_id:
                <input type="text" value={teachesInsertData.sec_id} onChange={(event) => {setTeachesInsertData(event.target.value);}}/>
                </label> 
                <label> semester:
                <input type="text" value={teachesInsertData.semester} onChange={(event) => {setTeachesInsertData(event.target.value);}}/>
                </label> 
                <label> year:
                <input type="text" value={teachesInsertData.year} onChange={(event) => {setTeachesInsertData(event.target.value);}}/>
                </label>
                <input type="submit" value="Insert" />
            </form>
            <form onSubmit={deleteTeaches}>
                <label> ID:
                <input type="text" value={deleteData.ID} onChange={(event) => {setDeleteData(event.target.value);}}/>
                </label>
                <label> course_id:
                <input type="text" value={deleteData.course_id} onChange={(event) => {setDeleteData(event.target.value);}}/>
                </label>
                <label> sec_id:
                <input type="text" value={deleteData.sec_id} onChange={(event) => {setDeleteData(event.target.value);}}/>
                </label>
                <label> semester:
                <input type="text" value={deleteData.semester} onChange={(event) => {setDeleteData(event.target.value);}}/>
                </label> 
                <label> year:
                <input type="text" value={deleteData.year} onChange={(event) => {setDeleteData(event.target.value);}}/>
                </label> 
                <input type="submit" value="Delete" />
            </form>
        
        
        
        
            <button onClick={getTeaches}>Refresh</button>
        </div>
  )
}

export default Teaches