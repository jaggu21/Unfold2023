import React, { useState, useEffect } from "react";

import Navbar from "../Components/Navbar";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const TeamSelect = (props) => {
	// const matchDetails = props.matchDetails;
	const [homeTeamPlayers, setHomeTeamPlayers] = useState(null);
	const [awayTeamPlayers, setAwayTeamPlayers] = useState(null);
	const [selectedPlayers, setSelectedPlayers] = useState([]);
	const [isReady, setIsReady] = useState(false);
	const [allPlayers, setAllPlayers] = useState(null);

	const playersPerTeam = 5;
	const costPerTeam = 300;

	const addPlayer = (e, player) => {
		let totalCost = 0;
		if (selectedPlayers) {
			for (let i = 0; i < selectedPlayers.length; i++) {
				totalCost += selectedPlayers[i].cost;
			}
		}

		if (
			selectedPlayers.length < playersPerTeam &&
			totalCost + player.cost <= costPerTeam
		) {
			if (!selectedPlayers.includes(player)) {
				setSelectedPlayers([...selectedPlayers, player]);
			}
			// console.log(selectedPlayers);
		}
	};

	const removePlayer = (e, player) => {
		let everyPlayer = [...selectedPlayers];
		everyPlayer = everyPlayer.filter((p) => p.id !== player.id);
		setSelectedPlayers([...everyPlayer]);

		// console.log(selectedPlayers);
	};

	useEffect(() => {
		async function fetchAllPlayers() {
			await setHomeTeamPlayers([
				{
					name: "naruto",
					team: "konoha",
					role: "hokage",
					cost: 100,
					id: "1",
					imageLink:
						"https://i.pinimg.com/736x/82/d4/92/82d4926dcf09dd4c73eb1a6c0300c135.jpg",
				},
				{
					name: "shikamuru",
					team: "konoha",
					role: "shadow hokage",
					cost: 50,
					id: "2",
					imageLink: "https://wallpapercave.com/wp/wp2654820.jpg",
				},
				{
					name: "ino",
					team: "konoha",
					role: "backup",
					cost: 20,
					id: "3",
					imageLink:
						"https://staticg.sportskeeda.com/editor/2022/07/f1d75-16590030632671.png?w=840",
				},
				{
					name: "rock lee",
					team: "konoha",
					role: "primary",
					cost: 40,
					id: "4",
					imageLink:
						"https://comicvine.gamespot.com/a/uploads/scale_medium/0/3133/147797-198795-lee.jpg",
				},
				{
					name: "might guy",
					team: "konoha",
					role: "primary",
					cost: 50,
					id: "5",
					imageLink: "https://images.alphacoders.com/614/614747.png",
				},
			]);

			await setAwayTeamPlayers([
				{
					name: "obito uchiha",
					team: "akatsuki",
					role: "hokage",
					cost: 100,
					id: "6",
					imageLink:
						"https://m.media-amazon.com/images/I/81mvFjGlZNL.jpg",
				},
				{
					name: "zetsu",
					team: "akatsuki",
					role: "shadow hokage",
					cost: 50,
					id: "7",
					imageLink:
						"https://m.media-amazon.com/images/I/81mvFjGlZNL.jpg",
				},
				{
					name: "hidan",
					team: "akatsuki",
					role: "backup",
					cost: 50,
					id: "8",
					imageLink:
						"https://m.media-amazon.com/images/I/81mvFjGlZNL.jpg",
				},
				{
					name: "kakzu",
					team: "akatsuki",
					role: "primary",
					cost: 20,
					id: "9",
					imageLink:
						"https://m.media-amazon.com/images/I/81mvFjGlZNL.jpg",
				},
				{
					name: "kisame hoshikage",
					team: "akatsuki",
					role: "primary",
					cost: 40,
					id: "10",
					imageLink:
						"https://m.media-amazon.com/images/I/81mvFjGlZNL.jpg",
				},
			]);

			setIsReady(true);
		}

		fetchAllPlayers();
	}, []);

	useEffect(() => {
		if (isReady == true) {
			const everyPlayer = [];

			if (homeTeamPlayers && awayTeamPlayers) {
				for (let i = 0; i < homeTeamPlayers.length; i++) {
					everyPlayer.push(homeTeamPlayers[i]);
					everyPlayer.push(awayTeamPlayers[i]);
				}

				setAllPlayers(everyPlayer);
			}
		}
	}, [isReady]);

	return (
		<div>
			<Navbar></Navbar>
			TeamSelect
			<Container>
				<Row>
					{allPlayers &&
						allPlayers.map((player) => {
							return (
								<Col key={player.id} md="3">
									<Card style={{ width: "18rem" }}>
										<Card.Img
											variant="top"
											src={player.imageLink}
											height="200px"
											width="50px"
										/>
										<Card.Body>
											<Card.Title>
												{player.name}
											</Card.Title>
											<Card.Text>
												Team : {player.team}
											</Card.Text>
											<Card.Text>
												Role : {player.role}
											</Card.Text>
											<Card.Text>
												Cost : {player.cost}
											</Card.Text>

											<Button
												onClick={(e) => {
													addPlayer(e, player);
												}}
												variant="primary"
											>
												Add Player
											</Button>
											<Button
												onClick={(e) => {
													removePlayer(e, player);
												}}
												variant="danger"
											>
												Remove Player
											</Button>
										</Card.Body>
									</Card>
									<br></br>
								</Col>
							);
						})}
				</Row>
			</Container>
		</div>
	);
};

export default TeamSelect;
