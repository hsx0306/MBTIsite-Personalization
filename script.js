var MBTI_arr = [];
var num = 2;
var MBTI_result = [];


async function next(i) {
    

    //MBTI 유형 문제 테스트 및 진행바
    if( Questions[num-1] == undefined){}
    else{
        MBTI_arr.push(Questions[num-1]?.answer[i].type);
        $("#Question").html(Questions[num]?.question).trigger("create");
        $("#answer1").html(Questions[num]?.answer[0].content).trigger("create");
        $("#answer2").html(Questions[num]?.answer[1].content).trigger("create");
        if(num == 13){
            result();
        }
        else{
            $(".number").html(`${num} / 12`).trigger("create");
            $( '.succes-Process' ).width( `${(num+1)*23.07692307692308}px` );
        }
        await num++;
    }

}

async function result() {
    // Array 값 카운트
    function getCount(array) {
        return array.reduce((pv, cv)=>{
            pv[cv] = (pv[cv] || 0) + 1;
            return pv;
        }, {});
    }

    var MBTI = getCount(MBTI_arr)



    //undefined 확인
    function isUndefined(value){
        if(value == undefined) {
               return 0;
         } else{
                return value;
         }
    }
    //값 비교
    var EorI = (isUndefined(MBTI.E)>isUndefined(MBTI.I)) ? 'E' : 'I';
    var SorN = (isUndefined(MBTI.S)>isUndefined(MBTI.N)) ? 'S' : 'N';
    var ForT = (isUndefined(MBTI.F)>isUndefined(MBTI.T)) ? 'F' : 'T';
    var PorJ = (isUndefined(MBTI.P)>isUndefined(MBTI.J)) ? 'P' : 'J';

    MBTI_result.push(EorI, SorN, ForT, PorJ);
    MBTI_result = MBTI_result.join('');

    //JS 데이터 보내기
    localStorage.setItem('MBTI',`${MBTI_result}`);


    // 현재 페이지 지우고 로딩페이지
    $('body').empty().trigger("create");    
    $('body').load('Roding.html').trigger("create");



    // 5초 후 Result page ${MBTI_result} 로 이동
    await setTimeout( function(){
        location.href = `/Result-page/Result.html`;
    }, 5000);

}