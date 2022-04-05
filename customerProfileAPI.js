// ALL AWS CUSTOMER PROFILE COMMANDS

const {
    // Customer Profile
    CustomerProfilesClient,

    // Domain Commands
    CreateDomainCommand,
    GetDomainCommand,
    UpdateDomainCommand,
    // Profile Commands
    CreateProfileCommand,
    DeleteProfileCommand,
    UpdateProfileCommand


} = require("@aws-sdk/client-customer-profiles");

const client = new CustomerProfilesClient({ region: "us-east-1" });



const DNAME = 'hi'; //MUST CHANGE WHEN GOING TO PRODUCTION

module.exports = function(app) {

    // HTTP GET

    // Get Domain
    app.get('/domains/' + DNAME, function(req, res) {
        const input = {
            'DomainName' : DNAME
        };
        const command = new GetDomainCommand(input);

        client.send(command).then(
            (data) => {
                console.log(data);
                res.send({
                    data : data
                });
            },
            (error) => {
                console.log(error);
            }
        );
    });

    // HTTP POST

    // Create Domain
    app.post('/domains/' + DNAME, function(req, res) {
        const input = req.body;
        const command = new CreateDomainCommand(input);

        client.send(command).then(
            (data) => {
                console.log(data);
            },
            (error) => {
                console.log(error);
            }
        );
    });

    // Create Profile
    app.post('/domains/' + DNAME + '/profiles', function(req, res) {
        const input = req.body;
        console.log(input);
        const command = new CreateProfileCommand(input);

        client.send(command).then(
            (data) => {
                console.log(data);
            },
            (error) => {
                console.log(error);
            }
        );
    });

    // Delete Profile
    app.post('/domains/' + DNAME + '/profiles/delete', function(req, res) {
        const input = req.body;
        console.log(input);
        const command = new DeleteProfileCommand(input);

        client.send(command).then(
            (data) => {
                console.log(data);
            },
            (error) => {
                console.log(error);
            }
        );
    });

    // HTTP PUT

    // Update Domain
    app.put('/domains/' + DNAME, function(req, res) {
        const input = req.body;
        const command = new UpdateDomainCommand(input);

        client.send(command).then(
            (data) => {
                console.log(data);
            },
            (error) => {
                console.log(error);
            }
        );
    });

    // Update Profile
    app.put('/domains/' + DNAME + '/profiles', function(req, res) {
        const input = req.body;
        console.log(input);
        const command = new UpdateProfileCommand(input);

        client.send(command).then(
            (data) => {
                console.log(data);
            },
            (error) => {
                console.log(error);
            }
        );
    });


};
