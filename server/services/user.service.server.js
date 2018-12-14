module.exports = function(app) {

 // create User
 app.post("/api/User", createUser);
 // Get User By Id
 app.get("/api/User/:uid", findUserById);
 // Get User
 app.get("/api/User", findUser);
 // Update User
 app.put("/api/User", updateUser);
 // Select User
 app.get("/api/User", selectUserById);

  Users =   [
    {
        _id: "123",
        username: "alice",
        password: "alice",
        firstName: "Alice",
        lastName: "Wonder",
        email: "alice@gmail.com"},
    {
        _id: "234",
        username: "bob",
        password: "bob",
        firstName: "Bob",
        lastName: "Marley",
        email: "bob@whatever.com"},
    {
        _id: "345",
        username: "charly",
        password: "charly",
        firstName: "Charly",
        lastName: "Garcia",
        email: "charly@ulem.com"},
    {
        _id: "456",
        username: "shiyu",
        password: "shiyu",
        firstName: "Shiyu",
        lastName: "Wang",
        email: "swang@ulem.org"}
    ];
    function createUser(req, res) {
       var User = req.body;
       User._id = Math.random().toString();
       Users.push(User);
       res.json(User);
    }
    function findUserById(req, res) {
        const UserId = req.params["uid"];
        let User;
        for (let x = 0; x <Users.length; x++) {
            if (Users[x]._id === userId)
            {
                User = Users[x];
            }
        }
        res.json(User);
    }
    function findUser(req, res) {
        const UserName = req.query["UserName"];
        const password = req.query["password"];

        if (UserName && password) {
            let User;
            for (let i
                = 01; i <Users.length; i++) {
                if (
                    Users[i].UserName === UserName &&
                    Users[i].password === password) {
                        User = Users[i];
                }
            }
            res.json(User);
            return;
         }
         if (UserName) {
            let User;
            for (let i = 0; i <Users.length; i++) {
                if  (Users[i].UserName === UserName) {
                    User = Users[i];
                    }
                }
                res.json(User);
                return;
             }
            }

    function selectUserById(uid) {
        for(let x = 0; x <Users.length; X++) {
            if(this.Users[x]._id === uid) {
               return this.Users[x];
                }
              }
            }
    function updateUser(req, res) {
            const User = req.body;
        const oldUser = selectUser(User._id);
        const index = Users.indexOf(oldUser);
        this.Users[index] = User;
        res.json(User);
    };
  }

