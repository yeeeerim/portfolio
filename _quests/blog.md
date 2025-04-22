---
title: "포트폴리오 사이트"
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
description: Gatsby 프레임워크를 사용하여 만든 블로그입니다. 소개와 회고, 프로젝트 소개를 담고 있습니다.
url:
  github: https://github.com/yeeeerim/yeeeerim.github.io
  external: https://yrim.me/
---

## 1. 프로젝트 개요

`React` 기반 프레임워크인 `Gatsby.js`와 `GraphQL`을 사용하여 포트폴리오 사이트를 제작했습니다. <br>
이 프로젝트에서의 주 목표는 새로운 기술을 활용하여 빠르고 사용자 경험이 뛰어난 블로그를 만드는 것이었습니다. <br>
이를 위해 `Gatsby.js`의 `gatsby-starter-portfolio-minimal-theme` 테마를 사용하고, 필요에 맞게 커스텀하여 제작했습니다.

`Notion`, `Tistory`, `Velog` 등 포트폴리오로 사용할 수 있는 플랫폼이 많이 존재하지만, 프론트엔드 개발자라면 직접 만든 나만의 포트폴리오 사이트를 가지는 것이 좋겠다는 생각이 들어 이 블로그를 제작하게 되었습니다.

## 2. 기술 선택 이유

**Gatsby.js:**

1. 정적 사이트 생성 방식으로 SEO 최적화와 빠른 로딩 속도를 제공
2. React 기반 프레임워크로, 익숙하고 효율적
3. 다양한 플러그인으로 기능을 쉽게 확장 가능

**GraphQL:**

1. 요청 횟수와 응답 크기를 최소화
2. 데이터 구조와 쿼리를 명확히 정의하여 서버와 클라이언트 간의 통신을 최적화

## 3. 테마 적용 및 커스텀

1. Gatsby CLI를 사용하여 프로젝트를 초기화하고 `gatsby-starter-portfolio-minimal-theme` 테마를 적용했습니다.

   ```bash
   npx gatsby new my-blog https://github.com/PortfolioMinimal/gatsby-starter-portfolio-minimal-theme
   cd my-blog
   ```

2. 기본 테마의 디자인과 레이아웃을 필요에 맞게 커스텀했습니다.

- 레이아웃 변경: 헤더와 푸터의 스타일을 변경하고, 포스트 목록의 레이아웃을 조정했습니다.
- 스타일링: styled-components를 사용하여 CSS를 커스텀하고, 사이트의 전반적인 색상과 타이포그래피를 변경했습니다.
- 새로운 페이지 추가: 프로젝트와 블로그 포스트 외에도 새로운 섹션을 추가하여 포트폴리오를 확장했습니다.

3. 데이터 소스 설정

- Markdown 파일을 이용하여 블로그 포스트 데이터를 관리했습니다. gatsby-source-filesystem 플러그인을 통해 파일 시스템에서 데이터를 가져오고, gatsby-transformer-remark 플러그인을 사용하여 Markdown 파일을 파싱했습니다.

4. GraphQL 설정

- GraphQL 스키마를 설정하고 필요한 쿼리를 작성했습니다. Gatsby의 GraphQL 인터페이스를 사용하면 매우 직관적이고 쉬운 쿼리 작성이 가능했습니다.

  ```graphql
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      html
    }
  }
  ```

5. 페이지 생성

- Gatsby의 Node API 중 createPages를 사용하여 동적으로 페이지를 생성했습니다. 각 블로그 포스트마다 고유한 URL을 생성하고, 해당 페이지에 데이터를 주입했습니다.

  ```js
  exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);

    return graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then((result) => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: blogPostTemplate,
          context: {
            slug: node.fields.slug,
          },
        });
      });
    });
  };
  ```

## 4. 성능 최적화

Gatsby.js는 기본적으로 성능 최적화에 중점을 두고 있지만, 추가적으로 몇 가지 작업을 통해 성능을 더욱 개선했습니다.

1. 이미지 최적화: gatsby-image와 gatsby-plugin-sharp를 사용하여 이미지의 크기를 최적화하고, 필요에 따라 로드되도록 설정
2. 코드 스플리팅: 필요한 시점에 필요한 코드만 로드하도록 설정하여 초기 로딩 속도를 개선
3. 프리패칭: Link 컴포넌트를 사용하여 사용자가 링크를 클릭하기 전에 리소스를 미리 로드

## 5. 문제 해결

1. Markdown 파싱 이슈: SSG 방식에 익숙하지 않아 useEffect로 Markdown 데이터를 가져오면서 404 페이지가 노출되는 문제가 발생하였습니다. Markdown 데이터를 사용하는 페이지를 모두 SSG 방식으로 렌더링되도록 변경하여 문제를 해결했습니다.

   - [[Gatsby.js] Trouble Shooting : SSG, SSR, DSG](https://velog.io/@yr1m/Gatsby.js-Trouble-Shooting-SSG-SSR-DSG)

2. 쿼리 에러: page-data를 찾지 못하는 문제가 발생하였습니다. graphiQL 도구를 이용하여 쿼리를 만들면서 동일한 쿼리 이름으로 인해 발생한 에러인 것을 확인하고, 쿼리 이름을 변경하여 해결했습니다.

   - [[Gatsby.js] Trouble Shooting : ModuleNotFoundError ...page-data](https://velog.io/@yr1m/Gatsby.js-Trouble-Shooting-ModuleNotFoundError)

## 6. RestAPI와 GraphQL 비교

GraphQL로 블로그 프로젝트를 진행하면서 이전에 사용해 본 RestAPI와 특징을 비교해 보았습니다.

**RestAPI:**

1. 명확한 엔드포인트: 각 리소스에 대해 고유한 URL을 가지고 있어 엔드포인트가 명확합니다.
2. 간단한 사용법: HTTP 메서드(GET, POST, PUT, DELETE)를 사용하여 CRUD 작업을 쉽게 수행할 수 있습니다.
3. 캐싱: HTTP 캐싱을 통해 성능을 최적화할 수 있습니다.

**GraphQL:**

1. 유연한 데이터 쿼리: 단일 엔드포인트에서 필요한 데이터를 한 번의 요청으로 정확하게 가져올 수 있습니다.
2. 과잉/과소 데이터 문제 해결: 클라이언트가 필요한 필드만 요청할 수 있어 불필요한 데이터 전송을 줄입니다.
3. 버전 관리 불필요: 스키마를 통해 데이터 구조를 정의하므로 API 버전 관리를 할 필요가 없습니다.

|      특성       |               RestAPI                |                 GraphQL                  |
| :-------------: | :----------------------------------: | :--------------------------------------: |
| 엔드포인트 관리 |         여러 엔드포인트 필요         |             단일 엔드포인트              |
|  데이터 fetch   |         다중 요청 필요 가능          | 한 번의 요청으로 필요한 데이터 모두 페칭 |
|     효율성      | 과잉 또는 과소 데이터 문제 발생 가능 |       필요한 데이터만 정확히 요청        |
|    버전 관리    |        새로운 버전의 API 필요        |        스키마로 버전 관리 불필요         |
|      캐싱       |         HTTP 캐싱 사용 가능          |           캐싱 직접 구현 필요            |
|     복잡성      |          비교적 단순, 명확           |       초기 설정 및 학습 곡선 존재        |

GraphQL을 사용하면서 느낀 가장 큰 장점은 필요한 데이터를 정확히 쿼리할 수 있다는 점과 단일 엔드포인트로 모든 요청을 처리할 수 있다는 점이었습니다. 이는 특히 복잡한 데이터 구조를 가진 애플리케이션에서 매우 유용했습니다. 반면, RestAPI는 간단하고 명확한 구조로 인해 초기 설정이 더 쉽고, 기존의 캐싱 메커니즘을 그대로 활용할 수 있다는 장점이 있었습니다.

## 7. 회고

이번 프로젝트를 통해 `Gatsby.js`와 `GraphQL` 기술을 활용하는 방법과 정적 사이트 생성의 장점을 깊이 이해할 수 있었습니다. gatsby-starter-portfolio-minimal-theme 테마를 활용하고 커스텀함으로써 성능이 뛰어나고 유지보수가 용이한 블로그를 만들 수 있었으며, 앞으로 더 많은 기능을 추가하고 개선해 나갈 계획입니다. 특히, 데이터 소스를 유연하게 관리하고 최적화하는 방법을 익힌 것이 큰 성과였습니다.

## 8. 향후 계획

1. 페이지 추가: 공부한 내용을 정리하고, 고민 거리에 대해 포스팅을 작성하는 Markdown 기반 페이지 추가
2. UI/UX 개선: 사용자 경험을 향상시키기 위한 디자인 및 인터렉션 개선
3. 자동화: 배포 파이프라인 자동화 및 테스트 코드 작성

이번 프로젝트는 Gatsby.js와 GraphQL을 활용한 첫 경험이었지만, 앞으로도 이 기술들을 적극 활용하여 다양한 웹 프로젝트에 적용해볼 계획입니다.
