# MBTIsite

MBTI사이트 입니다.
일부 데이터를 수정하여 양산형 MBTI 아류작을 만들 수 있습니다.

------------

### 사용자화를 위한 설명

- Question.js(질문을 위한 설정)
  - MBTI 테스트를 위한 질문을 작성해놨으며 E/I N/S T/F P/J를 구분지어 질문을 만들 수 있습니다.
  
  ------------

  
- img(이미지 변경)
  - img는 150px의 이미지 사용을 권고하며 사이즈 변경시 이상할 수 있습니다.
  - Main.png는 768 x 1024의 크기를 권장합니다.
  ------------
  
  
- Result Page 설정
  - 결과 페이지 사용자화 입니다.
  - DataMBTI.js 파일에 각각 MBTI데이터가 담겨져 있습니다.
  - 구조는 하단과 같습니다.
  
        INTP:{
            subtitle:"씹덕의 색깔",
            title:"카민",
            engtitle:"Carmine",
            color:'#960018',
            Good:[
                {content:"한 분야의 정점을 찍을 수 있음(하지만 잠)"},

                {content:"은근 재능 많음"},

                {content:"피부가 하얀편이 많음"},
            ],

            Bad:[
                {content:"집 들어가면 OFF상태로 들어가서 안읽씹"},

                {content:"은근 재능 많음"},

                {content:"씹덕 성향 MAX"},
            ],

            Good_Paint:['ENTJ', 'ESTJ'],
            Bad_Paint:[]
        },
  - MBTI명을 적고 하단의 내용을 작성해 주시면 됩니다.
  - Good과 Bad는 장단점을 적어놓은 것으로 알맞게 변경하시면 됩니다.
