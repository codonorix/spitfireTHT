const express = require('express')
const axios = require('axios')
const cors = require('cors')
const hubspot = require('@hubspot/api-client')

const app = express();
app.use(cors())
app.use(express.json())

const USER_TOKEN = 'pat-eu1-b9baaf93-0750-4d0c-a403-8297d58a4a51'
const hubspotClient = new hubspot.Client({'accessToken': USER_TOKEN})

app.post('/create_user', async (req, res) => {
    console.log(req.body)
    let data = req.body
    const properties = {
        "email": data.email,
        "firstname": data.fname,
        "lastname": data.lname,
        'id_number': data.idnum,
        'date_of_birth': data.bday
    };
    const SimplePublicObject = {properties}

    try {
        const apiResponse = await hubspotClient.crm.contacts.basicApi.create(SimplePublicObject)
        console.log(JSON.stringify(res.body, null, 2))
    } catch (e) {
        e.message === 'HTTP request failed' ? res.send(JSON.stringify(e.response, null, 2)) : res.send(e)
    }

    res.send("Looks like it worked")
})

app.delete('/delete_user', async (req, res) => {
    console.log(req.body.id)
    const contactId = req.body.id;

    try {
        const apiResponse = await hubspotClient.crm.contacts.basicApi.archive(contactId);
    } catch (e) {
        e.message === 'HTTP request failed'
            ? console.error(JSON.stringify(e.response, null, 2))
            : console.error(e)
    }

    res.send('User deleted.')
})

/*

 */

app.get("/", async (req, res) => {
    const AuthStr = 'Bearer '.concat(USER_TOKEN);
    // let url = 'https://api.hubapi.com/crm/v3/objects/contacts?limit=20'
    let url = 'https://api.hubapi.com/crm/v3/objects/contacts?limit=20'
    let data = []
    axios.get(url, {
            headers:
                {
                    Authorization: AuthStr,
                    'Content-Type': 'application/json',
                    "Accept-Encoding": "gzip,deflate,compress"
                },
            data: {
                'sorts': [{
                    'propertyName': 'createdate',
                    'direction': 'ASCENDING'
                }]
            }
        }
    )
        .then(response => {
            res.send(response.data.results)
        })
        .catch((error) => {
            console.log('error ' + error);
        });
});

let listener = app.listen(4000, function () {
    console.log("Listening on port " + listener.address().port);
});
