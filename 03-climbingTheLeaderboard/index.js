const INPUT_1 = {
  ranked: [100, 100, 50, 40, 40, 20, 10],
  player:[5, 25, 50, 120],
  solution: [6, 4, 2, 1],
};

const INPUT_2 = {
  ranked: [100, 90, 90, 80, 75, 60],
  player:[50, 65, 77, 90, 102],
  solution: [6, 5, 4, 2, 1],
};

function climbingLeaderboard(ranked, player) {
  const ranking = [... new Set(ranked)];
  let playerRank = [];

  player.forEach(score => {
    while( ranking.length && score >= ranking[ranking.length - 1]){
      ranking.pop();
    }

    playerRank.push(ranking.length + 1);
  });

  return playerRank
}


console.log('====> climbingLeaderboard: ', climbingLeaderboard(INPUT_1.ranked, INPUT_1.player));
console.log('====> climbingLeaderboard: ', climbingLeaderboard(INPUT_2.ranked, INPUT_2.player));