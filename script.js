var MBTI_arr = [];
var num = 2;
var MBTI_result = [];


async function next(i) {
    

    //MBTI 유형 문제 테스트

    if( Questions[num-1]?.answer[i].type == undefined){}
    else{MBTI_arr.push(question);}
    $("#Question").text(Questions[num]?.question).trigger("create");
    $("#answer1").text(Questions[num]?.answer[0].content).trigger("create");
    $("#answer2").text(Questions[num]?.answer[1].content).trigger("create");

    console.log(MBTI_arr);
    
    await num++;

    if (num == 14) {
        console.log("끝");
        result();
    }
        // $( 'h1' ).width( '100px' );
    $( '.succes-Process' ).width( `${num*23.07692307692308}px` );

}

function result() {
    var MBTI = getCount(MBTI_arr)
    var EorI = (MBTI.E>MBTI.I) ? 'E' : 'I';
    var SorN = (MBTI.S>MBTI.N) ? 'S' : 'N';
    var ForT = (MBTI.F>MBTI.T) ? 'F' : 'T';
    var PorJ = (MBTI.P>MBTI.J) ? 'P' : 'J';

    MBTI_result.push(EorI, SorN, ForT, PorJ);
}


function getCount(array) {
    return array.reduce((pv, cv)=>{
        pv[cv] = (pv[cv] || 0) + 1;
        return pv;
    }, {});
}