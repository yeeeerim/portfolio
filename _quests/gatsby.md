---
title: "포트폴리오 (Gatsby.js)"
date:
  startAt: "2022. 10. 29"
  endAt: "2024. 05. 29"
skills:
  - TypeScript
  - React.js
  - Tailwind CSS
  - Gatsby.js
  - GraphQL
contributors: 1
url:
  github: https://github.com/yeeeerim/yeeeerim.github.io
  external: https://yrim.me/
banners:
  - /assets/gatsby/banner/1.png
  - /assets/gatsby/banner/2.png
  - /assets/gatsby/banner/3.png
  - /assets/gatsby/banner/4.png
  - /assets/gatsby/banner/5.png
  - /assets/gatsby/banner/6.png
  - /assets/gatsby/banner/7.png
---

## 1. 프로젝트 개요

`React` 기반 프레임워크인 `Gatsby.js`와 `GraphQL`을 사용하여 포트폴리오 사이트를 제작했습니다. <br>
이 프로젝트의 주 목표는 새로운 기술을 활용해 빠르고 사용자 경험이 뛰어난 사이트를 만드는 것이었습니다. <br>
`gatsby-starter-portfolio-minimal-theme` 테마를 기반으로 커스텀하여, 저만의 스타일과 기능을 반영한 포트폴리오 사이트를 완성했습니다.

`Notion`, `Tistory`, `Velog` 등 다양한 플랫폼이 존재하지만, 프론트엔드 개발자로서 직접 제작한 포트폴리오 사이트를 가지는 것이 차별화된 강점이 될 수 있다고 생각해 프로젝트를 시작하게 되었습니다.

## 2. 기술 선택 이유

- **Gatsby.js**

  - 정적 사이트 생성(SSG) 방식으로 SEO 최적화와 빠른 로딩 속도를 제공
  - React 기반 프레임워크로, 익숙하고 효율적
  - 다양한 플러그인으로 기능을 쉽게 확장 가능

- **GraphQL**
  - 필요한 데이터만 정확하게 요청할 수 있어 과잉/과소 데이터 문제 해결
  - 단일 엔드포인트를 통해 통신이 간결하고 명확함
  - 명시적인 데이터 구조 정의로 클라이언트-서버 간 협업이 효율적

## 3. 성능 최적화

Gatsby.js는 기본적으로 성능 최적화에 중점을 두고 있지만, 추가적으로 몇 가지 작업을 통해 성능을 더욱 개선했습니다.

1. 이미지 최적화: `gatsby-image`와 `gatsby-plugin-sharp`를 사용하여 이미지의 크기를 최적화하고, 필요에 따라 로드되도록 설정
2. 코드 스플리팅: 각 페이지마다 필요한 컴포넌트만 로드되도록 하여 초기 로딩 속도를 개선
3. 프리패칭: `Link` 컴포넌트를 사용하여 사용자가 링크를 클릭하기 전에 리소스를 미리 로드

## 4. 문제 해결

1. Markdown 파싱 이슈: SSG 방식에 익숙하지 않아 `useEffect`로 Markdown 데이터를 불러오며 404 페이지가 나타나는 문제가 발생하였습니다. Markdown 데이터를 사용하는 페이지를 모두 SSG 방식으로 렌더링되도록 변경하여 문제를 해결했습니다.

   - [[Gatsby.js] Trouble Shooting : SSG, SSR, DSG](https://velog.io/@yr1m/Gatsby.js-Trouble-Shooting-SSG-SSR-DSG)

2. 쿼리 에러: page-data를 찾지 못하는 문제가 발생하였습니다. graphiQL 도구를 이용하여 쿼리를 만들면서 동일한 쿼리 이름으로 인해 발생한 에러인 것을 확인하고, 쿼리 이름을 변경하여 해결했습니다.

   - [[Gatsby.js] Trouble Shooting : ModuleNotFoundError ...page-data](https://velog.io/@yr1m/Gatsby.js-Trouble-Shooting-ModuleNotFoundError)

## 5. 회고

Gatsby.js를 사용하면서 정적 사이트 생성 방식의 장점과 한계를 직접 체감할 수 있었고, 빌드 시점에 콘텐츠가 어떻게 최적화되는지, 페이지가 어떻게 구성되는지에 대한 이해도를 높일 수 있었습니다.

또한, GraphQL을 사용하면서 불필요한 API 호출 없이 필요한 데이터만 정밀하게 요청할 수 있다는 점이 인상적이었고, 클라이언트-서버 간 통신 구조를 보다 유연하게 설계하는 방법을 배웠습니다. 반면, 캐싱이나 에러 처리 등은 RestAPI보다 설정이 복잡하다는 점도 체감하게 되었고, 두 방식의 차이를 비교하며 실질적인 장단점을 정리해볼 수 있었습니다.

결과적으로 이 프로젝트를 통해 새로운 도구를 선택하고 학습하며, 문제를 스스로 해결하는 과정에서 개발자로서의 성장을 느낄 수 있었고, 다음 프로젝트에 더 나은 기술 선택과 구조 설계를 적용할 수 있을 것이라는 자신감도 얻게 되었습니다.
