// const project = require('../config/project.config')
// const server = require('../server/main')
// const debug = require('debug')('app:bin:dev-server')

// server.listen(project.server_port)
// debug(`Server is now running at http://localhost:${project.server_port}.`)


//***** ABOVE IS GIVEN FROM ethereumReactReduxMetaMask STARTER KIT


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


const knex = require('knex')({
    client: 'pg',
    connection: {
    // To connect to local
        // user: 'Alex',
        // password: 'Alex',
        // database: 'test_ethereum_db'

        host:'stampy.db.elephantsql.com',
        port:5432,
        ssl:true,
        user: 'nyfibjdb',
        password:'rfdZ6HnpaOAP8bKSqzxgN33hx1Z4jP2O',
        database:'nyfibjdb',
        url: 'postgres://nyfibjdb:rfdZ6HnpaOAP8bKSqzxgN33hx1Z4jP2O@stampy.db.elephantsql.com:5432/nyfibjdb',

    },
});

// User submitting application
app.post('/users', jsonParser, (req, res) => {
    let userName = req.body.userName;
    let etherAddress = req.body.etherAddress;
    let confirmedEtherFeeTransactionAddress = req.body.confirmedEtherFeeTransactionAddress;
    let dappName = req.body.dappName;
    let dappDescription = req.body.dappDescription;
    let dappImageLink = req.body.dappImageLink;
    let dappEtherAddress = req.body.dappEtherAddress;
    let status = "pending";
    // Now use create Knex function to create user in DB
    knex.insert({
        username: userName,
        useretheraddress: etherAddress,
        entryfeetransaction: confirmedEtherFeeTransactionAddress,
        dappname: dappName,
        dappdescription: dappDescription,
        dappimagelink: dappImageLink,
        dappetheraddress: dappEtherAddress,
        memberstatus: status
    }).into('users').then(user => {
        console.log("user created: ", user);
        res.status(201).json(user);
    })
    
})

// TO get list of Dapps for frontend and their details
app.get('/users', (req, res) => {
    knex.select('id', 'username', 'useretheraddress', 'entryfeetransaction', 'dappname', 'dappdescription', 'dappimagelink', 'dappetheraddress')
    .from('users')
    .where({memberstatus: 'confirmed'})
    .orderBy('id')
    .then(users => {
        res.status("200").json(users);
    })    
})

// Owner approving a user
app.put('/users/:userID', jsonParser, (req, res) => {
  let userID = parseInt(req.params.userID);
  console.log("userID", userID);
  knex('users')
    .update({ memberstatus: "confirmed" })
    .where({id: userID})
    .then(user => {
      console.log("updated user: ", user);
      res.status(201).json(user);
    })
})

// User submitting proposal
app.post('/proposals', jsonParser, (req, res) => {
    let userName = req.body.userName;
    let proposalDescription = req.body.proposalDescription;
    let proposedFunding = req.body.proposedFunding;
    let yesVotes = 0;
    let noVotes = 0;
    let dateCreated = new Date();

    knex.select('id')
      .from('users')
      .where({username: userName})
      .then(user => {
        console.log('is this correct user id?', user[0].id);
        let userID = user[0].id;

        knex.insert({
          user_id: userID,
          proposaldescription: proposalDescription,
          proposedfunding: proposedFunding,
          yesvotes: yesVotes,
          novotes: noVotes,
          datecreated: dateCreated
        })
        .into('proposals')
        .then(proposal => {
          console.log("new proposal", proposal);
          res.status(201).json(proposal);
        })
      })
})

// To list of proposed Dapps
app.get('/proposals', (req, res) => {
  function timeRemaining(dateCreated) {
    let year = dateCreated.slice(0,4);
    let month = parseInt(dateCreated.slice(5,7));
    month--;
    let day = dateCreated.slice(8,10);
    let hour = dateCreated.slice(11,13);
    let minute = dateCreated.slice(14,16);
    let d = new Date(year, month, day, hour, minute, 00);
    let currentDate = new Date();
    let diff = new Date(currentDate.getTime() - d.getTime());

    let years = diff.getUTCFullYear() - 1970; // Gives difference as year
    let months = diff.getUTCMonth(); // Gives month count of difference
    let days = diff.getUTCDate()-1; // Gives day count of difference
    let hours = diff.getUTCHours(); // Gives hour count of difference
    let minutes = diff.getUTCMinutes(); // Gives minute count of difference

    let remainingDays = 4 - days;
    let remainingHours = 24 - hours;
    let remainingMinutes = 60 - minutes;

    let remainingTime = `${remainingDays} days, ${remainingHours} hours, ${remainingMinutes} minutes before voting deadline.`;

    return remainingTime;

 }

    // *** FACTOR IN TIME REMAINING ****
    knex.select(['proposals.id', 'proposals.proposaldescription', 'proposals.proposedfunding', 'proposals.yesvotes', 'proposals.novotes', 'proposals.datecreated', 'users.username', 'users.dappname', 'users.dappdescription', 'users.dappimagelink'])
    .from('users')
    .join('proposals', 'proposals.user_id', 'users.id')
    .then(proposals => {
      console.log("proposal list: ", proposals);
      res.status(200).json(proposals);
    })
  })

//To vote on proposal
app.put('/proposals/:id/:value', (req, res) => {
  let proposalID = req.params.id;
  let vote = req.params.value;

  if (vote === "yes") {
  
    knex.select('yesvotes').from('proposals')
      .where({ id: proposalID })
      .then(result => {
        let voteCount = result[0].yesvotes;
        return voteCount;
      })
      .then(_res => {
        console.log('still see proposalID?', proposalID);
        let newCount = _res + 1;
        console.log('new count', newCount);
        knex('proposals')
          .update({ yesvotes: newCount })
          .where({id: proposalID })
          .then(voted => {
            res.status(200).send("voted!")
          })
      })
  } else if (vote === "no") {
      knex.select('novotes').from('proposals')
      .where({ id: proposalID })
      .then(result => {
        let voteCount = result[0].novotes;
        return voteCount;
      })
      .then(_res => {
        console.log('still see proposalID?', proposalID);
        let newCount = _res + 1;
        console.log('new count', newCount);
        knex('proposals')
          .update({ novotes: newCount })
          .where({id: proposalID })
          .then(voted => {
            res.status(200).send("voted!")
          })
      })
    } else {
      res.status(400)
    }

    
})


// app.listen(process.env.PORT || 8080);




let server;
function runServer(port=3001) {
    return new Promise((resolve, reject) => {
        server = app.listen(port, () => {
            resolve();
        }).on('error', reject);
    });
}

function closeServer() {
    return new Promise((resolve, reject) => {
        server.close(err => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
}

if (require.main === module) {
    runServer();
}

module.exports = {
    app, runServer, closeServer
};

