# Find Paint color
<img src="https://github.com/hsx0306/MBTIsite-Personalization/blob/main/img/resultimg.jpg?raw=true" width="100" height="200"> <img src="https://github.com/hsx0306/MBTIsite-Personalization/blob/main/img/Main.png?raw=true" width="100" height="200">

성격을 분석하고 그것을 바탕으로 어울리는 색을 추천해줍니다.
## Introduction
이 프로젝트는 MBTI 성격 유형에 대한 정보와 관련된 콘텐츠를 제공하는 사이트를 만드는 것입니다. 
이 사이트는 기존 MBTI 사이트와는 다르게 독창적인 접근 방식과 디자인을 가지고 있으며, 사용자들에게 보다 유용한 정보를 제공하도록 노력합니다.

## Features
- MBTI 유형별 개요와 특징 정보
- MBTI 유형 검사 기능
- MBTI 이름 변경 기능
- 사용자 맞춤형 MBTI 정보 제공

## Usage

### 결과페이지 설정하기
- img파일에 있는 150px이미지 파일을 수정합니다. (우측과 같음)<img src="https://user-images.githubusercontent.com/70040924/229172070-cb648c25-eb4f-451a-97f5-efac179b7a62.png"  width="25" height="25">   
(※권장 이미지는 150px*150px의 이미지입니다.)

- DataMBTI.js 설정하기

하단은 DataMBTI.js파일의 일부입니다.
```js
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
```
DataMBTI.js에는 모든 MBTI가 상단의 형태로 정리되어있습니다.

```Good, Bad```에는 장단점을 각각 3개씩.

```Subtitle, titlem, engtitle, color``` 를 모두 수정해시면 됩니다.

```Good_Paint, Bad_Paint```는 사이가 좋은 MBTI 사이가 나쁜 MBTI를 구성하고 있습니다.

원하는 것으로 수정하시면 됩니다.

## 기술스택
- Frontend: JavaScript (ES6+)
- UI Framework: jQuery
- Storage: localStorage (MBTI 결과 저장)
- Asynchronous Processing: async/await, setTimeout() (비동기 처리)

## License
이 프로젝트는 ```GPL``` 라이센스를 따릅니다. 자세한 내용은 ```LICENSE``` 파일에서 확인할 수 있습니다.

## Contribution
```Github 에서 지원하는 fork를 이용해```문서에 기여할 수 있습니다. 이는 코드 기여, 버그 보고, 또는 개선 제안을 포함합니다.
이러한 기여자는 하단에 표시됩니다.
