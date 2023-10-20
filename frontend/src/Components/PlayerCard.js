import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const PlayerCard = (props) => {
	const player = props.player;

	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant="top" src={player.imageLink} height="200px" width="50px" />
			<Card.Body>
				<Card.Title>{player.name}</Card.Title>
				<Card.Text>Team : {player.team}</Card.Text>
				<Card.Text>Role : {player.role}</Card.Text>
				<Card.Text>Cost : {player.cost}</Card.Text>

				<Button variant="primary">Add Player</Button>
                <Button variant="danger">Remove Player</Button>
			</Card.Body>
		</Card>
	);
};

export default PlayerCard;
