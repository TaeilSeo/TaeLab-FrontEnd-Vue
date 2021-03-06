# taelab
## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Project Description

주 관심사인 주식 시장, 글로벌, 헬스 정보들을 기록·관리

### Stock

주식 시장 관련 정보 기록·관리

### Global

- 글로벌 정보들을 기록·관리

- 내부 텝

### Health
- 헬스 관련 정보들을 기록·관리

- - -

# Dev Log
### 2022-06-02
#### GlobalNewsRegister.vue
- 구상도
  
![image](https://user-images.githubusercontent.com/100591243/171560765-2bf57b5f-136a-48f3-a468-3ae3e6080dff.png)
  
- 설계 개요
  + 수집한 뉴스를 등록
  + 등록한 모든 뉴스를 기억할 수 없기때문에, 최근 등록한 뉴스와 등록된 뉴스의 통계를 오른쪽 사이드 탭에서 열람
  + 이를 통해 좀 더 용이하게 등록을 수행할 수 있을 것으로 기대

- 설계 이슈
  + 최근 등록의 경우, 카드뷰 형태로 등록된 뉴스 리스트를 제공하는 컴포넌트가 이미 존재(**GlobalNewsList.vue**)
  + 허나 현재 컴포넌트에서는 타이틀과 날짜만 간략히 제공하려 게획
  + 기존 컴포넌트의 재사용성을 위해 수정해야 하는가, 혹은 새로운 컴포넌트를 만들어야 하는가?

#### @/store/modules/global.js
- 필요 state 구성
  + 카테고리
  + 최근 뉴스 목록
  + 현재 열람 뉴스
  + 뉴스 열람 히스토리

#### GlobalNewsList.vue
- api 변경
  + http.js => api/global.js

- - -

### 2022-06-07
#### GlobalNewsList.vue, GlobalNewsListItem.vue
- props 설정
  + 기존 카드뷰 형태를 default 값으로 설정
  + type값으로 simple이 넘어올 경우, 사이드바에 보여줄 수 있는 간략한 형태로 ***GlobalNewsListItem.vue***를 보여주도록 설정
  + 보다 더 높은 재사용성을 위함

#### GlobalNewsRegister.vue
- 뉴스 통계
  + 뉴스 등록 시, 참고할 수 있는 통계로 무엇이 좋을까?
    + 뉴스 카테고리별 기사 수
      + 카테고리별 포션을 나타내야 함
      + 해당 차트가 차지할 수 있는 공간이 협소
      + Doughnut, Pie 등이 적합할 것으로 예상
      + 서버로부터 news table의 category column을 기준으로 
  + https://vue-chartjs.org/ 사용
  + 기본 sample 적용
  
    ![image](https://user-images.githubusercontent.com/100591243/172298084-703c96a2-afb8-463e-9376-3f6746b49cff.png)
   
- - -

### 2022-06-10
#### GlobalNewsRegister.vue
- 뉴스 등록 시, 최근 뉴스기사를 다시 불러오도록 설정

- - -

### 2022-06-12
#### GlobalNewsRegister.vue
- side의 차트 값을 default 고정값이 아닌, DB 통계를 통해 동적으로 가져온 값으로 설정해야 했다.
- created에 뉴스 분포값을 가져오는 메소드를 호출해 주도록 했다.
- 그런데 최초 뉴스 등록 페이지 방문때는 차트가 보이지 않고, 새로고침 후에야 보이는 이슈가 발생했다. https://github.com/TaeilSeo/TaeLab-FrontEnd-Vue/issues/1#issue-1268683994

- - -

### 2022-06-15
#### ComponentTitle.vue
- ComponentTitle.vue에서도 #1 이슈와 비슷한 warning이 보인다.
- 비슷한 이유가 원인인 것으로 보인다.
