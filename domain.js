//Customer profile - DOMAIN

const DNAME = 'hi';

//NOT IN USE (meant to be a self-check whether or not a domain is still created)
async function checkDomain() {
  const URL = '/domains/' + DNAME;

  console.log(DNAME);

  var param = {
      headers: {
          'content-type' : 'application/json'
      },
      method: 'GET'
  };

  await fetch(URL, param)
  .then(data=>{
      if (!data.ok) {
          throw new Error(`Error status: ${data.status}`);
      }
      return data.json();
  })
  .then(res=>{
      console.log(res.data);
      if (res.data) {
          updateDomain();
      } else {
          createDomain();
      }
  })
  .catch(error=>{console.log(error)});
}

async function createDomain() {

    console.log('OR HERE')
    const URL = '/domains/' + DNAME;

    var data = {
        'DefaultExpirationDays' : 1098,
        'DomainName' : DNAME
    };

    const param = {
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(data),
        method: 'POST'
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

async function getDomain() {
    console.log('is it going here???????')
    const URL = '/domains/' + DNAME;

    console.log(DNAME);

    const param = {
        headers: {
            'content-type' : 'application/json'
        },
        method: 'GET'
    };

    await fetch(URL, param)
    .then(data=>{
        if (!data.ok) {
            throw new Error(`Error status: ${data.status}`);
        }
        return data.json();
    })
    .then(res=>{
        console.log(res.data);
        // return res.data;
    })
    .catch(error=>{console.log(error)});
}

async function updateDomain() {
    console.log('HALOOOOOOOOO')
    const URL = '/domains/' + DNAME;

    var data = {
        'DefaultExpirationDays' : 1098,
        'DomainName' : DNAME
    };

    const param = {
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(data),
        method: 'PUT'
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
