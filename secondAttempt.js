const randomDamage = () => Math.floor(Math.random() * 10 + 1);

const chooseOption = (opt1, opt2) => {
  let randNum = Math.floor(Math.random());
  //   return randNum === 0 ? opt2 : opt1;
  if (randNum === 0) {
    return opt1;
  } else if (randNum !== 0) {
    return opt2;
  }
};

const attackPlayer = function (health) {
  return health - randomDamage();
};

const logHealth = (player, health) => {
  console.log(`${player} health: ${health}`);
};

const logDeath = (winner, loser) => {
  console.log(`${winner} defeated ${loser}`);
};

const isDead = (health) => {
  //   return health < 0;
  if (health <= 0) return true;
  else if (health !== 0) return false;
};

function fight(player1, player2, player1Health, player2Health) {
  while (true) {
    const attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health)) {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (isDead(player1, player1Health)) {
        logDeath(player2, player1);
        break;
      }
    }
  }
}

fight("Nick", "David", 100, 100);
