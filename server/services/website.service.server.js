module.exports = function(app) {
    // Create Website
    app.post("api/website", createWebsite);
    // Find Website for User
    app.get("/api/User/:uid/website", findAllWebsitesForUser);
    // Find Website by Id
    app.get("/api/website/:wid", findWebsiteById);
    // Update Website
    app.put("/api/website", updateWebsite);
    // Delete Website
    app.delete("/api/website/:wid", deleteWebsite);

    website = [
        { _id: "123", name: "Facebook", developerId: "456", description: "Lorem" },
        { _id: "234", name: "Tweeter", developerId: "456", description: "Lorem" },
        { _id: "456", name: "Gizmodo", developerId: "456", description: "Lorem" },
        { _id: "890", name: "Go", developerId: "123", description: "Lorem" },
        { _id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem" },
        { _id: "678", name: "Checkers", developerId: "123", description: "Lorem" },
        { _id: "789", name: "Chess", developerId: "234", description: "Lorem" }
    ]

    function createWebsite(req, res) {
        let website = req.body;
        website._id = Math.random().toString();
         website.push(website);
      res.json(website);
    }
    function findAllWebsitesForUser(req, res) {
        let result = [];
        const userId = req.params["uid"];
      for (let i = 0; i < website.length; i++)   {
          if ((website[i].developerId === userId)) {
              result.push(website[i]);
       }
      }
      res.json(result);
    }
    function selectWebsiteById(wid) {
        for (let i = 0; i < website.length; i++) {
            if (website[i]._id === wid) {
                return this.website[i];
      }
    }
  }
    function findWebsiteById(req, res) {
        const wid = req.params["wid"];
        const website = selectWebsiteById(wid);
         res.json(website);
    }
    function updateWebsite(req, res) {
        const website = req.body;
        const oldWeb = selectWebsiteById(websiteId);
        const index = website.indexOf(oldWeb);
         websites[index] = website;
         res,json(website);
    }
    function deleteWebsite(req, res) {
        const website = req.params["wid"];
        const website = selectWebsiteById(websiteId);
        const index = website.indexOf(website);
        website.splice(index, 1);
        res.json(websites);
    }
};
