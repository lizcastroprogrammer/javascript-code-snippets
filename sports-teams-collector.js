const team = {
    _players: [
      {
        firstName: 'Mark',
        lastName: 'Castro',
        age: 30
      },
      {
        firstName: 'Jessica',
        lastName: 'Smith',
        age: 20
      },
      {
        firstName: 'Susie',
        lastName: 'Harris',
        age: 40
      }
    ],
    _games: [
      {
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
      },
      {
        opponent: 'Cowboys',
        teamPoints: 22,
        opponentPoints: 37
      },
      {
        opponent: 'Vikings',
        teamPoints: 50,
        opponentPoints: 10
      }
    ],
    //getter method for the players object
    get players() {
      return this._players;
    },
    //getter method for the games object
    get games() {
      return this._games;
    },
    //method to make a new player object
    addPlayer(firstName, lastName, age) {
      const newPlayer = {
        firstName,
        lastName,
        age
      };
      //uses getter method to add new player to players object
      this.players.push(newPlayer);
    },
    //method to record the game results
    addGame(opponent, teamPoints, opponentPoints) {
      const newGame = {
        opponent,
        teamPoints,
        opponentPoints
      };
      this.games.push(newGame);
    }
  };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  
  team.addGame('Steelers', 25, 40);
  team.addGame('Seahawks', 45, 20);
  team.addGame('Packers', 55, 5);
  
  console.log(team._players);
  console.log(team._games);