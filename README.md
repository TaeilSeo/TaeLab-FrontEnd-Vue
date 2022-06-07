# taelab

## build log
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

### 2022-06-07
#### GlobalNewsList.vue, GlobalNewsListItem.vue
- props 설정
  + 기존 카드뷰 형태를 default 값으로 설정
  + type값으로 simple이 넘어올 경우, 사이드바에 보여줄 수 있는 간략한 형태로 ***GlobalNewsListItem.vue***를 보여주도록 설정
  + 보다 더 높은 재사용성을 위함
