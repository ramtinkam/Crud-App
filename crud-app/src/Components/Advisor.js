import React,{ useState } from "react";
import Axios from "axios";

const Advisor = () => {
  const [advisor_udata, setAdvisor_udata] = useState({s_ID:"",i_ID:""});
  const [advisor_idata, setAdvisor_idata] = useState({s_ID:"",i_ID:""});
  const [advisor_del_id, setAdvisor_del_id] = useState("");
  const [advisor_list, setAdvisor_list] = useState([]);


  const getAdvisors = () => {
    Axios.get("http://localhost:3001/advisors").then((response) => {
      setAdvisor_list(response.data);
    });
  };
  const updateAdvisor = (event) => {
    Axios.put("http://localhost:3001/advisor/update", { s_ID: event.target[0].value, i_ID: event.target[1].value })      
  };
  const createAdvisor = (event) => {
    Axios.post("http://localhost:3001/advisor/create", { s_ID: event.target[0].value, i_ID: event.target[1].value })      
  };
  const deleteAdvisor = (event) => {
    const id = event.target[0].value;
    Axios.delete(`http://localhost:3001/advisor/delete/${id}`)
  };

  return(

    <div id="advisorTable" >
          <div class="sunken-panel"  >
            <table >
              <thead>
                <tr>
                  <th >s_ID</th>
                  <th>i_ID</th>
                  
                </tr>
              </thead>
              <tbody>
              {advisor_list.map((val) => {
                return (
                    <tr>
                      <td>{val.s_ID}</td>
                      <td>{val.i_ID}</td>
                    </tr>
                );
              })}
              </tbody>
            </table>
          </div>
          <form onSubmit={updateAdvisor}>
              <label> s_ID:
              <input type="text" value={advisor_udata.s_ID} onChange={(event) => {setAdvisor_udata(event.target.value);}}/>
              </label> 
              <label> i_ID:
              <input type="text" value={advisor_udata.i_ID} onChange={(event) => {setAdvisor_udata(event.target.value);}}/>
              </label> 
              <input type="submit" value="Update" />
          </form>
          <form onSubmit={createAdvisor}>
              <label> s_ID:
              <input type="text" value={advisor_idata.s_ID} onChange={(event) => {setAdvisor_idata(event.target.value);}}/>
              </label> 
              <label> i_ID:
              <input type="text" value={advisor_idata.i_ID} onChange={(event) => {setAdvisor_idata(event.target.value);}}/>
              </label> 
              <input type="submit" value="Insert" />
          </form>
          <form onSubmit={deleteAdvisor}>
              <label> s_ID:
              <input type="text" value={advisor_del_id} onChange={(event) => {setAdvisor_del_id(event.target.value);}}/>
              </label> 
              <input type="submit" value="Delete" />
          </form>
          <button onClick={getAdvisors}>Refresh</button>
        </div>
  )
}

export default Advisor