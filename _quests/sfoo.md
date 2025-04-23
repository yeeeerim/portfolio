---
title: "SFOO: Student Food"
date:
  startAt: "2022. 12"
  endAt: "2023. 02"
skills:
  - TypeScript
  - React.js
  - Tailwind CSS
  - Recoil
contributors: 6
description: 대학 주변의 맛집을 추천해주는 사이트입니다. 음식점을 검색하고 리뷰를 작성할 수 있으며, 학교 및 학과별 게시판을 통해 정보를 공유할 수 있습니다.
url:
  github: https://github.com/TeamDogeC-2/StudentSoup
---

## 1. 프로젝트 개요

대학 주변의 맛집을 추천해주는 사이트입니다. <br>
사용자는 음식점을 검색하고 리뷰를 작성할 수 있으며, 학교 및 학과별 게시판을 통해 정보를 공유할 수 있습니다.

## 2. 기능 명세

1. **음식점 검색** : 대학 주변의 음식점을 검색할 수 있습니다.
2. **리뷰 작성** : 음식점에 대한 리뷰를 작성할 수 있습니다.
3. **게시판 기능** : 학교 및 학과별로 게시판을 제공하여 학생들이 정보를 공유할 수 있습니다.

## 3. 역할

1. 프로젝트 초기 세팅 - [PR #57](https://github.com/TeamDogeC-2/StudentSoup/pull/57)
   1. prettier 및 eslint 적용
   2. Title 및 Favicon 적용
2. Github Repository 관리
   1. branch rule, commit convention, pull request template 생성
3. Front-end 코드 관리
   1. 코드 리뷰 및 Github Merge 담당

![img](/assets/image/code-review_1.png)

4. 페이지 라우팅 처리 - [PR #12](https://github.com/TeamDogeC-2/StudentSoup/pull/12)
5. 회원가입 3번째 페이지 퍼블리싱 - [PR #20](https://github.com/TeamDogeC-2/StudentSoup/pull/20)
6. 게시판 페이지 Front-end 개발 - [PR #137](https://github.com/TeamDogeC-2/StudentSoup/pull/137) [PR #184](https://github.com/TeamDogeC-2/StudentSoup/pull/184) [PR #225](https://github.com/TeamDogeC-2/StudentSoup/pull/225)

## 4. 기술 선택 이유

- TypeScript: 정적 타입 지정을 통해 코드의 가독성과 유지보수성을 향상시키고, 버그를 사전에 방지할 수 있도록 선택했습니다.
- React.js: 컴포넌트 기반 아키텍처를 활용하여 개발 생산성을 높이기 위해 선택했습니다.
- Tailwind CSS: 인라인 스타일링보다는 클래스 기반의 스타일 지정을 선호하는 저희 팀에게 적합한 CSS 프레임워크로, 커스터마이징이 용이하고 일관된 디자인을 유지하기 위해 선택했습니다.
- Recoil: React 애플리케이션에서 상태 관리를 효율적으로 할 수 있도록 하는 라이브러리로, 복잡한 상태 관리를 간단하게 처리할 수 있고, 컴포넌트 간 데이터 공유를 용이하게 하기 위해 선택했습니다.

## 5. 회고

백엔드 2명, 프론트엔드 4명, 디자이너 1명으로 팀을 구성하여 개발한 서비스입니다. 저를 제외한 팀원은 모두 학생 혹은 취업준비생이었기 때문에 저는 많은 기능을 개발하기보다는 프로젝트와 코드 관리에 집중하였습니다.

프로젝트 생성부터 eslint, prettier 규칙을 추가하고, 폴더 구조와 브랜치 네이밍, 커밋 컨벤션, PR 템플릿 등을 고민하는 시간을 가질 수 있었고, 코드 리뷰어 역할을 맡아 더 확실한 정보를 제공하기 위해 관련 내용을 더 찾아보는 시간을 가지며 역량을 쌓을 수 있었습니다.
