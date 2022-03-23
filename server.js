
const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


// const user = [
//     { firstName: "Reimu",  lastName: "Hakurei"    },
//     { firstName: "Marisa", lastName: "Kirisame"   },
//     { firstName: "Sanae",  lastName: "Kochiya"    },
//     { firstName: "Sakuya", lastName: "Izayoi"     },
//     { firstName: "Momiji", lastName: "Inubashiri" }
// ];


// app.get("/api", (req, res) => {
//     res.json({ message: "Hello World testing" });
// });
// // view all
// app.get("/api/user", (req,res)=>{
//     res.json({count: user.length , results: user })
// })
// // view 1
// app.get("/api/user/:id", (req,res)=>{
//     res.json({count: 1 , user: user[req.params.id] })
// })
// // add
// app.post("/api/user", (req,res)=>{
//     console.log("req.body ...", req.body)
//     user.push(req.body)
//     res.json({count: user.length , results: user })
// })
// // update
// app.put("/api/user/:id", (req, res) => {
//     const id = req.params.id;
//     user[id] = req.body;
//     res.json( { status: "ok" } );
// });
// // delete
// app.delete("/api/user/:id", (req, res) => {
//     const id = req.params.id;
//     user.splice(id, 1);
//     res.json( { status: "ok" } );
// });





class User {
    constructor() {
    //   this.user_id = faker.datatype.uuid();
      this.firstName = faker.name.firstName();
      this.lastName = faker.name.lastName();
      this.phoneNumber = faker.phone.phoneNumber();
      this.email = faker.internet.email();
      this.password = faker.random.word();

    }
  }
  console.log(new User());


  class Company {
    constructor() {
    //   this.user_id = faker.datatype.uuid();
      this.name = faker.company.companyName();
      this.address = {
        street : faker.address.streetAddress(),
        city : faker.address.city(),
        state : faker.address.state(),
        zipCode : faker.address.zipCode(),
        country : faker.address.country()
      }

    }
  }
  console.log(new Company());
  

app.get("/api/user/new", (req,res)=>{
    const newUser = new User()
    res.json({newUser})
})

app.get("/api/company/new", (req,res)=>{
    const newCompany = new Company()
    res.json({newCompany})
})

app.get("/api/user/company", (req,res)=>{
    const newCompany = new Company()
    const newUser = new User()
    res.json({newUser , newCompany})
})

app.listen( port, () => console.log(`Listening on port: ${port}`) );