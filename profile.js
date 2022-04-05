//Customer profile - PROFILE

//const DNAME = 'hi';

async function createProfile() {
    const URL = '/domains/' + DNAME + '/profiles';

    const attributes = {};

    // attributes object contains name, singleUnitPrice and quantity (description can be name)
    // Also contains sales tax values, delivery fee values
    // Billing address depends on a checkbox

    const data = {
        "DomainName" : DNAME,
        "AccountNumber": document.getElementById('account-number').value !== '' ? document.getElementById('account-number').value : 'null',
        "Address": {
            "Address1": document.getElementById('address1').value !== '' ? document.getElementById('address1').value : 'null',
            "Address2": document.getElementById('address2').value !== '' ? document.getElementById('address2').value : 'null',
            "Address3": "null",
            "Address4": "null",
            "City": "Raleigh",
            "Country": "USA",
            "County": "Wake",
            "PostalCode": document.getElementById('zipcode').value !== '' ? document.getElementById('zipcode').value : 'null',
            "State": "NC"
        },
        "Attributes": attributes,
        "BillingAddress": {
            "Address1": "",
            "Address2": "",
            "City": "Raleigh",
            "Country": "USA",
            "County": "Wake",
            "PostalCode": "",
            "State": "NC"
        },
        "BirthDate": document.getElementById('birth-date').value !== '' ? document.getElementById('birth-date').value : 'null',
        "EmailAddress": document.getElementById('email').value !== '' ? document.getElementById('email').value : 'null',
        "FirstName": document.getElementById('first-name').value !== '' ? document.getElementById('first-name').value : 'null',
        "LastName": document.getElementById('last-name').value !== '' ? document.getElementById('last-name').value : 'null',
        "PhoneNumber": document.getElementById('phone-number').value !== '' ? document.getElementById('phone-number').value : 'null'
    };

    const param = {
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(data),
        method: "POST"
    };

    await fetch(URL, param)
    .then(data=>{
        if (!data.ok) {
            throw new Error(`Error status: ${data.status}`);
        }
        return data.json();
    })
    .then(res=>{console.log(res)})
    .catch(error=>{console.log(error)});
}

async function deleteProfile() {
    const URL = '/domains/' + DNAME + '/profiles/delete';

    const data = {
        "DomainName" : DNAME,
        "ProfileId" : "e72878c5c69745d490ad0076d9022160"
    };

    const param = {
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(data),
        method: "POST"
    };

    await fetch(URL, param)
    .then(data=>{
        if (!data.ok) {
            throw new Error(`Error status: ${data.status}`);
        }
        return data.json();
    })
    .then(res=>{console.log(res)})
    .catch(error=>{console.log(error)});
}
//7be268c7c72247fa95ce4ddec42c20d0
async function updateProfile() {
    const URL = '/domains/' + DNAME + '/profiles';

    const attributes = {};

    const data = {
        "DomainName" : DNAME,
        "ProfileId" : "67ad2032085d430c95c2a4c15610b2bf", //this profileid and profileid above exist
        "Address": {
            "Address1": "123 Sample St",
            "Address2": "Apt 4",
            "Address3": "null",
            "Address4": "null",
            "City": "Seattle",
            "Country": "USA",
            "County": "King",
            "PostalCode": "98011",
            "State": "WA"
        },
        "Attributes": attributes,
        "BillingAddress": {
            "Address1": "789 Sample St",
            "Address2": "Apt 1",
            "City": "Seattle",
            "Country": "USA",
            "County": "King",
            "PostalCode": "98011",
            "State": "WA"
        },
        "BirthDate": "07/12/1980",
        "EmailAddress": "example@gmail.com",
        "FirstName": "John",
        "Gender": "MALE",
        "HomePhoneNumber": "555-334-3344",
        "LastName": "Doe",
        "AdditionalInformation": "NOTHIN",
        "MobilePhoneNumber": "555-334-7777",
        "PhoneNumber": "703-333-0000"
    };

    const param = {
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(data),
        method: "PUT"
    };

    await fetch(URL, param)
    .then(data=>{
        if (!data.ok) {
            throw new Error(`Error status: ${data.status}`);
        }
        return data.json();
    })
    .then(res=>{console.log(res)})
    .catch(error=>{console.log(error)});
}
