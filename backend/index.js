const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "ramtin82",
  database: "university8e",

});


//advisor query
app.post("/advisor/create", (req, res) => {
  const s_ID = req.body.s_ID;
  const i_ID = req.body.i_ID;


  db.query(
    "INSERT INTO advisor (s_ID,i_ID) VALUES (?,?)",
    [s_ID,i_ID],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/advisors", (req, res) => {
  db.query("SELECT * FROM advisor", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/advisor/update", (req, res) => {
  const s_ID = req.body.s_ID;
  const i_ID = req.body.i_ID;
  db.query(
    "UPDATE advisor SET i_ID = ? WHERE s_ID = ?",
    [i_ID, s_ID],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/advisor/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM advisor WHERE s_ID = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//student query
app.get("/students", (req, res) => {
  db.query("SELECT * FROM student", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/student/update", (req, res) => {
  const ID = req.body.ID;
  const name = req.body.name;
  const dept_name = req.body.dept_name;
  const tot_cred = req.body.tot_cred;
  db.query(
    "UPDATE student SET name = ?,dept_name=?,tot_cred=?  WHERE ID = ?",
    [name,dept_name,tot_cred,ID],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/student/create", (req, res) => {
  const ID = req.body.ID;
  const name = req.body.name;
  const dept_name = req.body.dept_name;
  const tot_cred = req.body.tot_cred;


  db.query(
    "INSERT INTO student (ID,name,dept_name,tot_cred) VALUES (?,?,?,?)",
    [ID,name,dept_name,tot_cred],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.delete("/student/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM student WHERE ID = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//instructor query
app.get("/instructors", (req, res) => {
  db.query("SELECT * FROM instructor", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/instructor/update", (req, res) => {
  const ID = req.body.ID;
  const name = req.body.name;
  const dept_name = req.body.dept_name;
  const salary = req.body.salary;
  db.query(
    "UPDATE instructor SET name = ?,dept_name=?,salary=?  WHERE ID = ?",
    [name,dept_name,salary,ID],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/instructor/create", (req, res) => {
  const ID = req.body.ID;
  const name = req.body.name;
  const dept_name = req.body.dept_name;
  const salary = req.body.salary;


  db.query(
    "INSERT INTO instructor (ID,name,dept_name,salary) VALUES (?,?,?,?)",
    [ID,name,dept_name,salary],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.delete("/instructor/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM instructor WHERE ID = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//takes query
app.get("/takes", (req, res) => {
  db.query("SELECT * FROM takes", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/takes/update", (req, res) => {
  const ID = req.body.ID;
  const course_id = req.body.course_id;
  const sec_id = req.body.sec_id;
  const semester = req.body.semester;
  const year = req.body.year;
  const grade = req.body.grade;
  db.query(
    "UPDATE takes SET grade = ?  WHERE ID = ? AND course_id=? AND sec_id=? AND semester=? AND year=?",
    [grade,ID,course_id,sec_id,semester,year],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/takes/create", (req, res) => {
  const ID = req.body.ID;
  const course_id = req.body.course_id;
  const sec_id = req.body.sec_id;
  const semester = req.body.semester;
  const year = req.body.year;
  const grade = req.body.grade;


  db.query(
    "INSERT INTO takes (ID,course_id,sec_id,semester,year,grade) VALUES (?,?,?,?,?,?)",
    [ID,course_id,sec_id,semester,year,grade],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.delete("/takes/delete", (req, res) => {
  const ID = req.body.ID;
  const course_id = req.body.course_id;
  const sec_id = req.body.sec_id;
  const semester = req.body.semester;
  const year = req.body.year;
  db.query("DELETE FROM takes WHERE ID = ? AND course_id=? AND sec_id=? AND semester=? AND year=?",
  [ID,course_id,sec_id,semester,year], 
  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//teaches query
app.get("/teaches", (req, res) => {
  db.query("SELECT * FROM teaches", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


app.post("/teaches/create", (req, res) => {
  const ID = req.body.ID;
  const course_id = req.body.course_id;
  const sec_id = req.body.sec_id;
  const semester = req.body.semester;
  const year = req.body.year;



  db.query(
    "INSERT INTO teaches (ID,course_id,sec_id,semester,year) VALUES (?,?,?,?,?)",
    [ID,course_id,sec_id,semester,year],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.delete("/teaches/delete", (req, res) => {
  const ID = req.body.ID;
  const course_id = req.body.course_id;
  const sec_id = req.body.sec_id;
  const semester = req.body.semester;
  const year = req.body.year;
  db.query("DELETE FROM teaches WHERE ID = ? AND course_id=? AND sec_id=? AND semester=? AND year=?",
  [ID,course_id,sec_id,semester,year], 
  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//course query
app.get("/course", (req, res) => {
  db.query("SELECT * FROM course", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/course/update", (req, res) => {

  const course_id = req.body.course_id;
  const title = req.body.title;
  const dept_name = req.body.dept_name;
  const credits = req.body.credits;

  db.query(
    "UPDATE course SET title = ?,dept_name=?,credits=?  WHERE course_id=? ",
    [title,dept_name,credits,course_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/course/create", (req, res) => {
  const course_id = req.body.course_id;
  const title = req.body.title;
  const dept_name = req.body.dept_name;
  const credits = req.body.credits;

  db.query(
    "INSERT INTO course (course_id,title,dept_name,credits) VALUES (?,?,?,?)",
    [course_id,title,dept_name,credits],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.delete("/course/delete", (req, res) => {

  const course_id = req.body.course_id;

  db.query("DELETE FROM course WHERE course_id=? ",
  [course_id], 
  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
