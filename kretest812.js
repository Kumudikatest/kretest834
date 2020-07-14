const google = require('googleapis').google;
const _auth = require('./Authorizer');
const datastore = google.datastore('v1');

exports.handler = async (event) => {
    datastore.projects.beginTransaction({
        projectId: process.env.GCP_PROJECT,
        resource: {
            transactionOptions: {
                readWrite: {}
            }
        }
    }).then(response => {
        console.log(response.data);           // successful response
        /*
        response.data = {
            "transaction": "<transaction ID>"
        }
        */
    })
        .catch(err => {
            console.log(err, err.stack); // an error occurred
        });

    return { "message": "Successfully executed" };
};