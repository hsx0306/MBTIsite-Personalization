async function ResultData(){

    //MBTI 데이터 불러오기
    MBTI = await localStorage.getItem('MBTI')

    //MBTI로 이미지 변경
    await $(".Main-img").attr("src", `/img/150px/${MBTI}.png`).trigger("create");

    //title 변경
    await $(".title").html(`${MBTI_Data[`${MBTI}`].title}`).trigger("create");

    //eng-title 변경
    await $(".eng-title").html(`${MBTI_Data[`${MBTI}`].engtitle}`).trigger("create");

    //메인컬러 변경
    await $(".subtitle").html(MBTI_Data[`${MBTI}`].subtitle);
    await $(".header").css("background-color",`${MBTI_Data[`${MBTI}`].color}`);
    await $(".title").css("color",`${MBTI_Data[`${MBTI}`].color}`);
    await $(".eng-title").css("color", `${MBTI_Data[`${MBTI}`].color}`);
    await $(".box").css("background-color",`${MBTI_Data[`${MBTI}`].color}`);
   

    //장점 정보 추가
    await $(".Good_info").append(`<div><span class="dot">·</span><span class="Good-text">${MBTI_Data[`${MBTI}`].Good[0].content}</span></div>`).trigger("create");
    await $(".Good_info").append(`<div><span class="dot">·</span><span class="Good-text">${MBTI_Data[`${MBTI}`].Good[1].content}</span></div>`).trigger("create");
    await $(".Good_info").append(`<div><span class="dot">·</span><span class="Good-text">${MBTI_Data[`${MBTI}`].Good[2].content}</span></div>`).trigger("create");

    //단점 정보 추가
    await $(".Bad_info").append(`<div><span class="dot">·</span><span class="Good-text">${MBTI_Data[`${MBTI}`].Bad[0].content}</span></div>`).trigger("create");
    await $(".Bad_info").append(`<div><span class="dot">·</span><span class="Good-text">${MBTI_Data[`${MBTI}`].Bad[1].content}</span></div>`).trigger("create");
    await $(".Bad_info").append(`<div><span class="dot">·</span><span class="Good-text">${MBTI_Data[`${MBTI}`].Bad[2].content}</span></div>`).trigger("create");


    //Goodpaint 추가
    var i;
    for (i=0; i<MBTI_Data[`${MBTI}`].Good_Paint['length']; i++){
        await $(".Good-Paint").append(`<section class="Good-paint-box">
        <img class="Good-paint-img" src="../img/150px/${MBTI_Data[`${MBTI}`].Good_Paint[i]}.png">
        <div class="Good-paint-text Gcolor${i}">${MBTI_Data[MBTI_Data[`${MBTI}`].Good_Paint[i]].title}</div>
        </section>`).trigger("create");

        await $(`.Gcolor${i}`).css("color",`${MBTI_Data[MBTI_Data[`${MBTI}`].Good_Paint[i]].color}`)
    }
    
    //BadPaint 추가
    var j;
    if (MBTI_Data[`${MBTI}`].Bad_Paint['length'] == 0) {
        await $(".Bad-Paint").append(`<div id="Null">안 어울리는<br>페인트가 없어요!<div>`).trigger("create")
    }
    else{
        
        for (j=0; j<MBTI_Data[`${MBTI}`].Bad_Paint['length']; j++) {
            
            var text = await MBTI_Data[MBTI_Data[`${MBTI}`].Bad_Paint[j]].title;
            
            
            if(text.length>7){var text = await text.replace(/\s/g,'<br>');}
            else{};

            await $(".Bad-Paint").append(`<section class="Bad-paint-box">
            <img class="Bad-paint-img" src="../img/150px/${MBTI_Data[`${MBTI}`].Bad_Paint[j]}.png">
            <article class="Bad-paint-text Bcolor${j}">${text}</article>
            </section>`).trigger("create");

            await $(`.Bcolor${j}`).css("color",`${MBTI_Data[MBTI_Data[`${MBTI}`].Bad_Paint[j]].color}`)

        }
    }
}   