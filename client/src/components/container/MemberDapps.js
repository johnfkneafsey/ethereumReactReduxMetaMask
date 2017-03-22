import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardBlock } from 'reactstrap';
import Heading from '../presentation/Heading';
import NavBar  from '../presentation/NavBar';

export default class MemberDapps extends React.Component {
	constructor(props) {
        super(props);
        this.onSubmitProposal = this.onSubmitProposal.bind(this);
        }

    onSubmitProposal (XXX) {
		console.log('clicked');
	}

	render () {

        return (
            <div>
                <Heading />
                <br />
                <NavBar />
                <br />
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
            </div>
)

                    }

                    }
