console.log('Challenge 05');
var dolphin_score = [85, 54, 41];
var koalas_score = [23, 34, 27];

var calcAverage = (arr) => {
    var total = arr.reduce(function(sum,curr) {
        return sum+curr;
    });
    return total/arr.length;
}

var checkWinner = (avg_dolphin_score, avg_koalas_score) => {
    if(avg_dolphin_score>avg_koalas_score) 
        console.log(`Dolphin winner (${Math.round(avg_dolphin_score)} vs ${Math.round(avg_koalas_score)})`);
    else if(avg_dolphin_score<avg_koalas_score)
        console.log(`Koalas winner ( ${Math.round(avg_koalas_score)} vs ${Math.round(avg_dolphin_score)})`);
    else if(avg_dolphin_score === avg_koalas_score)
        console.log("They have the same average score");
    else 
        console.log('No team wins the trophy!');
}

checkWinner(calcAverage(dolphin_score), calcAverage(koalas_score));