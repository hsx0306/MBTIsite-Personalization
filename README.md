# MBTI 아류작 사이트
나만의 MBTI 아류작 사이트를 만들 수 있습니다.

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

## License
이 프로젝트는 ```GPL``` 라이센스를 따릅니다. 자세한 내용은 ```LICENSE``` 파일에서 확인할 수 있습니다.

## Contribution
```Github 에서 지원하는 fork를 이용해```문서에 기여할 수 있습니다. 이는 코드 기여, 버그 보고, 또는 개선 제안을 포함합니다.
이러한 기여자는 하단에 표시됩니다.


---------------------------------
en

# MBTI sub-zak site
You can create your own MBTI subjac site.

## ## Introduction
This project is to create a site that provides content related to information about MBTI personality types.
Unlike traditional MBTI sites, this site has a unique approach and design and strives to provide more useful information to users.

## ## Features
- Overview and Features by MBTI Type
- MBTI Type Check Function
- MBTI renaming capability
- Provide custom MBTI information

## ## Usage

### Setting up the results page
- Modify the 150px image file in the img file (same as right) <img src="https://user-images.githubusercontent.com/70040924/229172070-cb648c25-eb4f-451a-97f5-efac179b7a62.png " width="25" height="25">
※Recommended image is 150px*150px.)

- - DataMBTI.To set js

The bottom is DataMBTI.Part of the js file.
```js
INTP:{
subtitle: "The color of chewing duck",
Title: "Carmine",
engtitle:"Carmine",
color:'#960018',
Good:[
{content:"Can peak a field (but sleep)"},

{content:"A lot of hidden talent",

{content:"Many fair skin",
],

Bad:[
{content:"When I enter the house, I go in OFF so I don't read"},

{content:"A lot of hidden talent",

{content:"Sip-duck MAX",
],

Good_Paint:['ENTJ', 'ESTJ'],
Bad_Paint:[]
},
```
DataMBTI.In js, all MBTI is organized in the top form.

``Good, Bad'' has three advantages and disadvantages.

You can modify all of the words ``Subtitle, Titlem, entitle, color`'.

```Good_Paint, Bad_Paint```` constitutes a bad MBTI between good and bad MBTI.

You can change it to what you want.

## ## License
This project is subject to a license of ```GPL```. Details can be found in the ```LICENSE``` file.

## ## Contribution
```Using forks supported by Github```. This includes code contributions, bug reporting, or suggestions for improvement.
These contributors are shown at the bottom.
