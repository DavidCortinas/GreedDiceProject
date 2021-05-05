class Dice{
    rollDice(){
        let values = ['1', '2', '3', '4', '5', '6'];
        let random = Math.floor(Math.random() * values.length);
        let rollValue = values[random];
        return rollValue
    };
}

class Player{
    takeTurn(){
        let dice = new Dice();
        let roll = [dice.rollDice(), dice.rollDice(), dice.rollDice(), dice.rollDice(), dice.rollDice(), dice.rollDice(),]; 
        let hand = {};
        let score = 0;
        for (let i = 0; i < roll.length; i++){
            if (!(roll[i] in hand)){
                hand[roll[i]] = 1;
            } 
            else{ 
                hand[roll[i]] = hand[roll[i]] + 1;
            };
        };
        console.log(roll)
        console.log(hand)
        for (let i = 0; i < 2; i++){
            if (hand['1'] >= 3){
                score = score + 1000
                hand['1'] = hand['1'] - 3
            }
            else if (hand['2'] >= 3){
                score = score + 200
                hand['2'] = hand['2'] - 3
            }
            else if (hand['3'] >= 3){
                score = score + 300
                hand['3'] = hand['3'] - 3
            }
            else if (hand['4'] >= 3){
                score = score + 400
                hand['4'] = hand['4'] - 3
            }
            else if (hand['5'] >= 3){
                score = score + 500
                hand['5'] = hand['5'] - 3
            }
            else if (hand['6'] >= 3){
                score = score + 600
                hand['6'] = hand['6'] - 3
            };
        };
        if (!hand['1']) {
            hand['1'] = 0
        }
        if (!hand['5']) {
            hand['5'] = 0
        }
        score = score + hand['1'] * 100  + hand['5'] * 50
        return score
    };
};

let player1 = new Player()

console.log(player1.takeTurn())