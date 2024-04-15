# BAECOMM TEST

## 개요

링크 : (https://baecomm-test-app.vercel.app/)

## 파일 구조

## 필수 기능

- 상품 목록 페이지
  - 상품 검색 ✅
  - 최초 접속 시 10개의 상품 표시 ✅
  - 더 보여줄 수 있는 상품이 있는 경우 더 보기 버튼 표시 ✅
- 상품 상세보기 페이지
  - 목록으로 돌아가기 ✅
  - 목록으로 돌아갈 시 검색어 & 검색 목록 & 스크롤 위치 유지 ✅

## 추가 구현 기능

- 상세 페이지 진입 시 마지막으로 보던 상품 목록을 하단에 배치했습니다.
- 검색해서 나온 리스트도 10개씩 보여주는 방식을 적용하였습니다.
  - 기본 목록에서 열개씩 보여주는 방식은 서버에 요청을 보내는 방식입니다.
  - 검색 목록의 경우 모든 데이터를 가져오고 클라이언트 측에서 보여주는 방식 입니다.
- 상품 더보기를 하다보면 홈페이지의 Y축이 지나치게 길어지는 현상이 발생했습니다.
  - 우측 하단에 TOP이라는 버튼을 생성하여 페이지 최상단으로 이동하는 기능을 만들었습니다.
  - scrollTop이라는 함수를 만들어 단일 상품을 불러올 경우에도 사용했습니다.
- 단일 상품을 불러오는 페이지에서 새로고침을 하는 경우 클라이언트 측의 데이터가 삭제되는 현상이 있었습니다.
  - 제품의 ID를 이용하여 클라이언트 측에 데이터가 있는 경우는 그대로 보여주고 없는 경우에만 서버에 요청하여 가져왔습니다.

## 시연

```
git clone https://github.com/ganggyunggyu/baecomm-test-app.git
cd {project_name}
npm install
npm start
```
