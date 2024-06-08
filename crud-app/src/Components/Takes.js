import React,{ useState } from "react";
import Axios from "axios";


const Takes = () => {
    const [takesList,setTakesList] = useState([]);
    const [takesUpdateData, setTakesUpdateData] = useState({ID:"",course_id:"",sec_id:"",semester:"",year:"",grade:""});
    const [takesInsertData, setTakesInsertData] = useState({ID:"",course_id:"",sec_id:"",semester:"",year:"",grade:""});
    const [deleteData,setDeleteData] = useState({ID:"",course_id:"",sec_id:"",semester:"",year:""});


    const getTakes = () => {
        Axios.get("http://localhost:3001/takes").then((response) => {
          setTakesList(response.data);
        });
    };
    const updateTakes = (event) => {
        Axios.put("http://localhost:3001/takes/update", { ID: event.target[0].value, course_id: event.target[1].value, sec_id: event.target[2].value, semester: event.target[3].value ,year: event.target[4].value, grade: event.target[5].value})      
    };
    const insertTakes = (event) => {
        Axios.post("http://localhost:3001/takes/create", { ID: event.target[0].value, course_id: event.target[1].value, sec_id: event.target[2].value, semester: event.target[3].value ,year: event.target[4].value, grade: event.target[5].value })      
    };
    const deleteTakes = (event) => {
        Axios.delete("http://localhost:3001/takes/delete",{data:{ID: event.target[0].value, course_id: event.target[1].value, sec_id: event.target[2].value, semester: event.target[3].value ,year: event.target[4].value}})
    };
  
  
    return (
    <div id="takesTable">
            <div class="sunken-panel">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>course_id</th>
                            <th>sec_id</th>
                            <th>semester</th>
                            <th>year</th>
                            <th>grade</th>
                        </tr>
                    </thead>
                    <tbody>
                    {takesList.map((val) => {
                        return (
                            <tr>
                            <td>{val.ID}</td>
                            <td>{val.course_id}</td>
                            <td>{val.sec_id}</td>
                            <td>{val.semester}</td>
                            <td>{val.year}</td>
                            <td>{val.grade}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
            <form onSubmit={updateTakes}>
                <label> ID:
                <input type="text" value={takesUpdateData.ID} onChange={(event) => {setTakesUpdateData(event.target.value);}}/>
                </label> 
                <label> course_id:
                <input type="text" value={takesUpdateData.course_id} onChange={(event) => {setTakesUpdateData(event.target.value);}}/>
                </label>
                <label> sec_id:
                <input type="text" value={takesUpdateData.sec_id} onChange={(event) => {setTakesUpdateData(event.target.value);}}/>
                </label> 
                <label> semester:
                <input type="text" value={takesUpdateData.semester} onChange={(event) => {setTakesUpdateData(event.target.value);}}/>
                </label>  
                <label> year:
                <input type="text" value={takesUpdateData.year} onChange={(event) => {setTakesUpdateData(event.target.value);}}/>
                </label>  
                <label> grade:
                <input type="text" value={takesUpdateData.grade} onChange={(event) => {setTakesUpdateData(event.target.value);}}/>
                </label>  
                <input type="submit" value="Update" />
            </form>
            <form onSubmit={insertTakes}>
                <label> ID:
                <input type="text" value={takesInsertData.ID} onChange={(event) => {setTakesInsertData(event.target.value);}}/>
                </label> 
                <label> course_id:
                <input type="text" value={takesInsertData.course_id} onChange={(event) => {setTakesInsertData(event.target.value);}}/>
                </label>
                <label> sec_id:
                <input type="text" value={takesInsertData.sec_id} onChange={(event) => {setTakesInsertData(event.target.value);}}/>
                </label> 
                <label> semester:
                <input type="text" value={takesInsertData.semester} onChange={(event) => {setTakesInsertData(event.target.value);}}/>
                </label> 
                <label> year:
                <input type="text" value={takesInsertData.year} onChange={(event) => {setTakesInsertData(event.target.value);}}/>
                </label>
                <label> grade:
                <input type="text" value={takesInsertData.grade} onChange={(event) => {setTakesInsertData(event.target.value);}}/>
                </label> 
                <input type="submit" value="Insert" />
            </form>
            <form onSubmit={deleteTakes}>
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
        
        
        
        
            <button onClick={getTakes}>Refresh</button>
        </div>
  )
}

export default Takes