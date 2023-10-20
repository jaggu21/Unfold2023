// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.2 <0.9.0;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 * @custom:dev-run-script ./scripts/deploy_with_ethers.ts
 */
contract Dream11 {

    address public owner;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    constructor() {
        owner = msg.sender; // The creator of the contract is the initial owner.
    }
    
    struct Match {
        uint256 id;
        string name;
        string ground;
        uint256 homeTeam;
        uint256 awayTeam;
        bool state;
    }

    struct Player {
        uint256 playerID;
        string name;
        uint256 teamID;
        string role;
        uint256 cost;
        string imageLink;
    }

    struct Betting {
        address user;
        uint256[] playerConfig;
        uint256 matchID;
        uint256 betAmount;
        uint256 score;
    }

    mapping(uint256 => Match) public matches;
    uint256 public matchCounter;


    mapping(uint256 => Player) public players;
    mapping(uint256 => uint256[]) public playersByTeam;
    int public playerCounter;

    mapping(int => string) public teamNames;

    mapping(uint256 => mapping(address => Betting)) public userBets;
    int public betCounter;

    function setTeamName(int _teamID, string memory _name) public {
        teamNames[_teamID] = _name;
    }

    function getTeamName(int _teamID) public view returns (string memory) {
        return teamNames[_teamID];
    }

    function addMatch(
        string memory _name,
        string memory _ground,
        uint256 _homeTeam,
        uint256 _awayTeam,
        bool _state
    ) public onlyOwner{
        matchCounter++; // Increment the match counter to get the next available ID.
        matches[matchCounter] = Match({
            id: matchCounter,
            name: _name,
            ground: _ground,
            homeTeam: _homeTeam,
            awayTeam: _awayTeam,
            state: _state
        });
    }

    function getMatch(uint256 _id) public view returns (Match memory) {
        return matches[_id];
    }

    function getMatchCounter() public view returns (uint256) {
        return matchCounter;
    }

    function addPlayer(
        uint256 _playerID,
        string memory _name,
        uint256 _teamID,
        string memory _role,
        uint256 _cost,
        string memory _imageLink
    ) public onlyOwner {
        players[_playerID] = Player({
            playerID: _playerID,
            name: _name,
            teamID: _teamID,
            role: _role,
            cost: _cost,
            imageLink: _imageLink
        });
        playersByTeam[_teamID].push(_playerID);
        playerCounter++;
    }

    function getPlayer(uint256 _playerID) public view returns (Player memory) {
        return players[_playerID];
    }

    function getPlayersByTeam(uint256 _teamID) public view returns (uint256[] memory) {
        return playersByTeam[_teamID];
    }

    function placeBet(uint256 matchId, uint256[] memory playerIds) payable public {
        require(userBets[matchId][msg.sender].betAmount == 0, "User has already placed a bet.");
        require(playerIds.length == 11, "Team should have 11 players.");
        
        // Check that the provided playerIds are valid.
        for (uint256 i = 0; i < playerIds.length; i++) {
            require(players[playerIds[i]].teamID == matches[matchId].homeTeam || players[playerIds[i]].teamID == matches[matchId].awayTeam, "Invalid player ID.");
        }

        Betting storage newBet = userBets[matchId][msg.sender];
        newBet.user = msg.sender;
        newBet.matchID = matchId;
        newBet.betAmount = msg.value;
        newBet.score = 0;
        newBet.playerConfig = playerIds;
        
        // if we want to directly transfer money to owner
        // payable(owner).transfer(msg.value);
    }

    

}
