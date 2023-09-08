/*  */
console.log('Challenge 03');
var dolphin_score = [96, 108, 89];
var koalas_score = [88, 91, 110];

var avg_total_score = (arr) => {
    var total = arr.reduce(function(sum,curr) {
        return sum+curr;
    });
    return total/arr.length;
}
console.log('Average score for Dolphin : ', avg_total_score(dolphin_score));
console.log('Average score for Koalas : ', avg_total_score(koalas_score));

var winner = (dolphin_score, koalas_score) => {
    if(avg_total_score(dolphin_score)>avg_total_score(koalas_score) && avg_total_score(dolphin_score) >= 100) 
        console.log("Dolphin is winner !");
    else if(avg_total_score(dolphin_score)<avg_total_score(koalas_score) && avg_total_score(koalas_score)>=100)
        console.log("Kolas is winner!");
    else if(avg_total_score(dolphin_score) === avg_total_score(koalas_score) && avg_total_score(dolphin_score) >=100)
        console.log("They have the same average score");
    else 
        console.log('No team wins the trophy!');
}
winner(dolphin_score, koalas_score);
