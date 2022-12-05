let rounds = require("fs").readFileSync("./input.txt", { encoding: "utf-8" }).trim();
rounds = rounds.split('\n')
rounds = rounds.map(x => x.split(" "))
const move_mapping = new Map()
const outcome_mapping = new Map()
move_mapping.set('A', 'rock')
move_mapping.set('B', 'paper')
move_mapping.set('C', 'scissors')

outcome_mapping.set('X', 'lose')
outcome_mapping.set('Y', 'draw')
outcome_mapping.set('Z', 'win')

const point_mapping = {
    'rock': 1,
    'paper': 2,
    'scissors': 3
}
let total_score = 0
for(let round of rounds) {
    let opponent_move = move_mapping.get(round[0])
    let required_outcome = outcome_mapping.get(round[1])
    let my_move
    if(required_outcome === 'draw') {
        my_move = opponent_move
    }
    else if(required_outcome === 'lose') {
        my_move = opponent_move === 'rock' ? 'scissors' : opponent_move === 'paper' ? 'rock' : 'paper'
    }
    else if(required_outcome === 'win') {
        my_move = opponent_move === 'rock' ? 'paper' : opponent_move === 'paper' ? 'scissors' : 'rock'
    }
    total_score += point_mapping[my_move]
    if(my_move === opponent_move) {
        total_score += 3
    }
    if(my_move === 'rock' && opponent_move === 'scissors') {
        total_score += 6
    }
    if(my_move === 'paper' && opponent_move === 'rock') {
        total_score += 6
    }
    if(my_move === 'scissors' && opponent_move === 'paper') {
        total_score += 6
    }
}
console.log(total_score)
