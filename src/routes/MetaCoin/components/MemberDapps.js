import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardBlock } from 'reactstrap';

export default class MemberDapps extends React.Component {
	constructor(props) {
        super(props);
        this.onSubmitProposal = this.onSubmitProposal.bind(this);
        }
    
    onSubmitProposal (XXX) {
        console.log(XXX);
        console.log('web3 ', web3);

        let congressContract = web3.eth.contract([ { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "proposals", "outputs": [ { "name": "recipient", "type": "address", "value": "0xf6133e0611c27b99aba8bfa4e1f95b3e78dbb5e4" }, { "name": "amount", "type": "uint256", "value": "2" }, { "name": "description", "type": "string", "value": "Really dank dapp idea" }, { "name": "votingDeadline", "type": "uint256", "value": "1489685502" }, { "name": "executed", "type": "bool", "value": false }, { "name": "proposalPassed", "type": "bool", "value": false }, { "name": "numberOfVotes", "type": "uint256", "value": "2" }, { "name": "currentResult", "type": "int256", "value": "2" }, { "name": "proposalHash", "type": "bytes32", "value": "0xf404df0dcd21fbbfc5d06045bd3cdf2d6e444791a58ad8c97f994cb5f2b61279" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "targetMember", "type": "address" } ], "name": "removeMember", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "proposalNumber", "type": "uint256" }, { "name": "transactionBytecode", "type": "bytes" } ], "name": "executeProposal", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "memberId", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "numProposals", "outputs": [ { "name": "", "type": "uint256", "value": "3" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "members", "outputs": [ { "name": "member", "type": "address", "value": "0x0000000000000000000000000000000000000000" }, { "name": "name", "type": "string", "value": "" }, { "name": "memberSince", "type": "uint256", "value": "1489623844" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "debatingPeriodInMinutes", "outputs": [ { "name": "", "type": "uint256", "value": "3" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "minimumQuorum", "outputs": [ { "name": "", "type": "uint256", "value": "2" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address", "value": "0x9ae6c8795c4158c73d5b7303ae39ed0a248f86cb" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "_from", "type": "address" }, { "name": "_value", "type": "uint256" }, { "name": "_token", "type": "address" }, { "name": "_extraData", "type": "bytes" } ], "name": "receiveApproval", "outputs": [], "payable": false, "type": "function" }, { "constant": true, "inputs": [], "name": "majorityMargin", "outputs": [ { "name": "", "type": "int256", "value": "0" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "beneficiary", "type": "address" }, { "name": "etherAmount", "type": "uint256" }, { "name": "JobDescription", "type": "string" }, { "name": "transactionBytecode", "type": "bytes" } ], "name": "newProposal", "outputs": [ { "name": "proposalID", "type": "uint256" } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "minimumQuorumForProposals", "type": "uint256" }, { "name": "minutesForDebate", "type": "uint256" }, { "name": "marginOfVotesForMajority", "type": "int256" } ], "name": "changeVotingRules", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "targetMember", "type": "address" }, { "name": "memberName", "type": "string" } ], "name": "addMember", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "proposalNumber", "type": "uint256" }, { "name": "supportsProposal", "type": "bool" }, { "name": "justificationText", "type": "string" } ], "name": "vote", "outputs": [ { "name": "voteID", "type": "uint256" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "proposalNumber", "type": "uint256" }, { "name": "beneficiary", "type": "address" }, { "name": "etherAmount", "type": "uint256" }, { "name": "transactionBytecode", "type": "bytes" } ], "name": "checkProposalCode", "outputs": [ { "name": "codeChecksOut", "type": "bool", "value": false } ], "payable": false, "type": "function" }, { "constant": false, "inputs": [ { "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "payable": false, "type": "function" }, { "inputs": [ { "name": "minimumQuorumForProposals", "type": "uint256", "index": 0, "typeShort": "uint", "bits": "256", "displayName": "minimum Quorum For Proposals", "template": "elements_input_uint", "value": "10" }, { "name": "minutesForDebate", "type": "uint256", "index": 1, "typeShort": "uint", "bits": "256", "displayName": "minutes For Debate", "template": "elements_input_uint", "value": "30" }, { "name": "marginOfVotesForMajority", "type": "int256", "index": 2, "typeShort": "int", "bits": "256", "displayName": "margin Of Votes For Majority", "template": "elements_input_int", "value": "0" }, { "name": "congressLeader", "type": "address", "index": 3, "typeShort": "address", "bits": "", "displayName": "congress Leader", "template": "elements_input_address", "value": "" } ], "payable": true, "type": "constructor" }, { "payable": true, "type": "fallback" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "proposalID", "type": "uint256" }, { "indexed": false, "name": "recipient", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" }, { "indexed": false, "name": "description", "type": "string" } ], "name": "ProposalAdded", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "proposalID", "type": "uint256" }, { "indexed": false, "name": "position", "type": "bool" }, { "indexed": false, "name": "voter", "type": "address" }, { "indexed": false, "name": "justification", "type": "string" } ], "name": "Voted", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "proposalID", "type": "uint256" }, { "indexed": false, "name": "result", "type": "int256" }, { "indexed": false, "name": "quorum", "type": "uint256" }, { "indexed": false, "name": "active", "type": "bool" } ], "name": "ProposalTallied", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "member", "type": "address" }, { "indexed": false, "name": "isMember", "type": "bool" } ], "name": "MembershipChanged", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "minimumQuorum", "type": "uint256" }, { "indexed": false, "name": "debatingPeriodInMinutes", "type": "uint256" }, { "indexed": false, "name": "majorityMargin", "type": "int256" } ], "name": "ChangeOfRules", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "sender", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" } ], "name": "receivedEther", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "_from", "type": "address" }, { "indexed": false, "name": "_value", "type": "uint256" }, { "indexed": false, "name": "_token", "type": "address" }, { "indexed": false, "name": "_extraData", "type": "bytes" } ], "name": "receivedTokens", "type": "event" } ]).at("0x02b13654f048bf335956bc5099da23816fb3f6a5");


    // ***NOTES as of 3.22***
        //  Congress Contract Address = 0xeb7a9543c17bed74dcfe6a899853114c8e740b32
        //  John0 Address = 0x88bf6349f7947920789c12d38b87e4fe7c1590de
        //  John1 Address = 0x20e4e6ed10044ad4bf55c24ef12b292d7c16fb77
        //  John2 Address = 0xeb405bd47d7d5da9077c9d450e681378b71a43cf

        // ***GENERAL COMMANDS***

            // SEND ETHER 
                web3.eth.sendTransaction({from:"0x88bf6349f7947920789c12d38b87e4fe7c1590de", to:"0xeb7a9543c17bed74dcfe6a899853114c8e740b32", value: web3.toWei('10', 'ether')}, function(error,result) {
                    console.log('SEND ETHER');
                    if(!error)
                        console.log('result: ', result)

                    else
                        console.error('error: ', error);
                })

            // GET TRANSACTION
                // web3.eth.getTransaction("0x598ace1ecc9d2f36ac4672620c61981b96bd76a5a5b59df37a272b68d4b7ec70", function(error,result) {
                //     console.log('GET TRANSACTION');
                //     if(!error)
                //         console.log('result: ', result)
                //     else
                //         console.error('error: ', error);
                // })

            // GET BALANCE
                // web3.eth.getBalance("0x88bf6349f7947920789c12d38b87e4fe7c1590de", function(error,result) {
                //     console.log('GET BALANCE');
                //     if(!error)
                //         console.log('result: ', result.c[0]/1000)
                //     else
                //         console.error('error: ', error);
                // })

        // ***CONGRESS CONTRACT COMMANDS*** (Assumes contract has been deployed - https://ethereum.github.io/browser-solidity/#version=soljson-v0.4.7+commit.822622cf.js)

            // DEBATING PERIOD IN MINUTES (returns debate period integer)
                // congressContract.debatingPeriodInMinutes('', function(error,result) {
                //     console.log('DEBATING PERIOD IN MINUTES');
                //     if(!error)
                //         console.log('result: ', result.c[0])
                //     else
                //         console.error('error: ', error)
                // })

            // MAJORITY MARGIN (returns majority margin integer)
                // congressContract.majorityMargin('', function(error,result) {
                //     console.log('MAJORITY MARGIN');
                //     if(!error)
                //         console.log('result: ', result.c[0])
                //     else
                //         console.error('error: ', error)
                // })

            // MINIMUM QUORUM (returns minium quorum integer)
                // congressContract.minimumQuorum('', function(error,result) {
                //     console.log('MINIMUM QUORUM');
                //     if(!error)
                //         console.log('result: ', result.c[0])
                //     else
                //         console.error('error: ', error)
                // })

            // OWNER (returns address of contract owner)
                // congressContract.owner('', function(error,result) {
                //     console.log('OWNER');
                //     if(!error)
                //         console.log('result: ', result)
                //     else
                //         console.error('error: ', error)
                // })

            // NUMBER OF PROPOSALS (active or ever????)
                // congressContract.numProposals('', function(error,result) {
                //     console.log('NUMBER OF PROPOSALS');
                //     if(!error)
                //         console.log('result: ', result.c[0])
                //     else
                //         console.error('error: ', error)
                // })

            // MEMBER LIST (returns array with index 0 = memberAddress, index 1 = memberName)
                // Param(s): integer (member list index)
                // congressContract.members(2, function(error,result) {
                //     console.log('MEMBER LIST');
                //     if(!error)
                //         console.log('result: ', result)
                //     else
                //         console.error('error: ', error)
                // })

            // MEMBER ID (returns member Id associated with address)
                // Param(s): string (member address)
                // congressContract.memberId("0xadb61f4613a9c87b58d7ff2ebde82af2fb925e5c", function(error,result) {
                //     console.log('MEMBER ID');
                //     if(!error)
                //         console.log('result: ', result.c[0])
                //     else
                //         console.error('error: ', error)
                // })

            //  ~~~CORE CONGRESS COMMANDS~~~

            // NEW PROPOSAL (returns transaction hex code)
          //      Param(s): string (dapp owner address), string (ether amount), string (reason for proposal), string (empty), object ({from: "accountAddress", gas:integer}) 
                congressContract.newProposal.sendTransaction("0x4d98323b81815ae169500dad373515adfadfe370", "10", "This is a really good idea for a dapp", "", {from: "0xd081965ec84be43d923591896932bbe25cfe1a49", gas:1000000}, function(error,result) {
                    console.log('NEW PROPOSAL');
                    if(!error)
                        console.log('result: ', result)
                    else
                        console.error('error: ', error)
                })

            // VOTE (returns transaction hex code)
                // Param(s): string (dapp owner address), string (ether amount), string (reason for proposal), string (empty), object ({from: "accountAddress", gas:integer}) 
                // congressContract.vote(0, "true", "Love it!!!!", {from: "0x4d98323b81815ae169500dad373515adfadfe370", gas:1000000}, function(error,result) {
                //     console.log('VOTE');
                //     if(!error)
                //         console.log('result: ', result)
                //     else
                //         console.error('error: ', error)
                // })

            // EXECUTE CONTRACT (returns transaction hex code)
                // congressContract.executeProposal.sendTransaction(0, "", {from: "0xd081965ec84be43d923591896932bbe25cfe1a49", gas:1000000000000000}, function(error,result) {
                //     console.log('VOTE');
                //     if(!error)
                //         console.log('result: ', result)
                //     else
                //         console.error('error: ', error)
                // })

         }


    render () {
        
        return (
            <CardGroup>
                <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                    <CardBlock>
                        <CardTitle><b>ThinkfulCoin Central Bank</b></CardTitle>
                        <CardText><b>Description:</b> A dapp that prints and manages the ThinkfulCoin cryptocurrency</CardText>
                        <CardText><b>Source Code:</b> <a>https://github.com/johnfkneafsey/ethereum-capstone-project</a> </CardText>
                        <CardText><b>Creator:</b> Joe Turner</CardText>
                        <Button onClick={() => this.onSubmitProposal("HELLO!!!!")} >Submit Proposal</Button>
                    </CardBlock>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                    <CardBlock>
                        <CardTitle>Dapp Name</CardTitle>
                        <CardText><b>Description:</b> </CardText>
                        <CardText><b>Source Code:</b> <a></a> </CardText>
                        <CardText><b>Creator:</b></CardText>
                        <Button>Submit Proposal</Button>
                    </CardBlock>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                    <CardBlock>
                        <CardTitle>Dapp Name</CardTitle>
                        <CardText><b>Description:</b> </CardText>
                        <CardText><b>Source Code:</b> <a></a> </CardText>
                        <CardText><b>Creator:</b></CardText>
                        <Button>Submit Proposal</Button>
                    </CardBlock>
                </Card>
            </CardGroup>
        )

    }

}