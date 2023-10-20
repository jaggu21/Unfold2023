import React, { useState, useEffect } from "react";

import Navbar from "../Components/Navbar";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const MatchList = (props) => {
	const [allMatches, setAllMatches] = useState(null);
	const [futureMatches, setFutureMatches] = useState(null);
	const [pastMatches, setPastMatches] = useState(null);
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		async function fetchAllMatches() {
			await setAllMatches([
				{
					id: "1",
					name: "chunnin match",
					ground: "konoha",
					homeTeam: "konoha",
					awayTeam: "akatsuki",
					state: "past",
				},
				{
					id: "2",
					name: "genin match",
					ground: "konoha",
					homeTeam: "konoha",
					awayTeam: "akatsuki",
					state: "past",
				},
				{
					id: "3",
					name: "guardian shinobi match",
					ground: "land of fire",
					homeTeam: "konoha",
					awayTeam: "akatsuki",
					state: "past",
				},
				{
					id: "4",
					name: "kazekage retreival",
					ground: "gedo statue",
					homeTeam: "konoha",
					awayTeam: "akatsuki",
					state: "future",
				},
				{
					id: "5",
					name: "tenchi bridge reconnisance mission",
					ground: "tenchi bridge",
					homeTeam: "konoha",
					awayTeam: "akatsuki",
					state: "future",
				},
			]);

			setIsReady(true);
		}

		fetchAllMatches();
	}, []);

	useEffect(() => {
		if (isReady == true) {
			setFutureMatches(
				allMatches.filter((match) => match.state === "future")
			);
			setPastMatches(
				allMatches.filter((match) => match.state === "past")
			);
		}
	});

	return (
		<div>
			<Navbar></Navbar>

			<Container>
				Future Matches
				<Row>
					{futureMatches &&
						futureMatches.map((match) => {
							return (
								<Col key={match.id} md="3">
									<Card style={{ width: "18rem" }}>
										<Card.Body>
											<Card.Title>
												{match.name}
											</Card.Title>
											<Card.Text>
												Home Team : {match.homeTeam}
											</Card.Text>
											<Card.Text>
												Away Team : {match.awayTeam}
											</Card.Text>
											<Card.Text>
												Ground : {match.ground}
											</Card.Text>
										</Card.Body>
									</Card>
									<br></br>
								</Col>
							);
						})}
				</Row>
                Past Matches
				<Row>
					{pastMatches &&
						pastMatches.map((match) => {
							return (
								<Col key={match.id} md="3">
									<Card style={{ width: "18rem" }}>
										<Card.Body>
											<Card.Title>
												{match.name}
											</Card.Title>
											<Card.Text>
												Home Team : {match.homeTeam}
											</Card.Text>
											<Card.Text>
												Away Team : {match.awayTeam}
											</Card.Text>
											<Card.Text>
												Ground : {match.ground}
											</Card.Text>
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

export default MatchList;
