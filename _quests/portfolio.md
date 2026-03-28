---
title: "포트폴리오 (Next.js)"
date:
  startAt: "2025. 02. 27"
skills:
  - TypeScript
  - React.js
  - Tailwind CSS
  - Next.js
contributors: 1
url:
  github: https://github.com/yeeeerim/portfolio
  external: https://www.yrim.site/
banners:
  - /assets/portfolio/banner/1.png
  - /assets/portfolio/banner/2.png
  - /assets/portfolio/banner/3.png
  - /assets/portfolio/banner/4.png
  - /assets/portfolio/banner/5.png
  - /assets/portfolio/banner/6.png
---

## 1. 프로젝트 개요

기존 Gatsby.js와 GraphQL 기반의 [포트폴리오 사이트](/quests/gatsby)를 Next.js 기반으로 리뉴얼하였습니다. 단순한 소개 형식을 넘어, "RPG 게임" 컨셉을 도입하여 사용자에게 더 몰입감 있는 경험을 제공합니다.

사이트 내에서 사용자는 캐릭터의 능력치를 확인하고, 퀘스트(프로젝트 소개)를 확인하거나, 업적(회고)을 열람하는 등 마치 게임을 플레이하듯 인터랙션을 경험할 수 있습니다.

## 2. 기술 스택 선정 배경

- **Next.js** : 기존에 사용하던 Gatsby는 정적 사이트 제작에 강점을 갖고 있지만, 라우팅 유연성, 서버 사이드 렌더링, API Route 등 확장성과 유지보수성을 고려해 Next.js로 마이그레이션했습니다.
- **Tailwind CSS** : 빠른 UI 스타일링과 커스터마이징에 용이해 선택하였습니다.
- **TypeScript** : 타입 안정성과 개발 생산성을 확보하기 위해 도입했습니다.

## 3. 성능 최적화

- 대부분 변경되지 않는 정적인 데이터이기 때문에, Next.js의 Static Generation (SSG) 방식을 활용하여 모든 페이지를 빌드 타임에 생성하였습니다.
- `generateStaticParams`와 `generateMetadata`를 활용해 SEO 최적화와 빠른 로딩 속도를 동시에 확보했습니다.

<br>

<img src="/assets/portfolio/build-img.png" alt="build-time" />

## 4. 회고

게임을 좋아하는 저에게 포트폴리오를 RPG 형식으로 구성하는 것은 단순한 이력 정리를 넘어, 저만의 개성과 스토리를 담아낼 수 있는 좋은 기회였습니다. 캐릭터 능력치, 퀘스트, 업적 등 다양한 게임 요소를 UX에 녹여내는 과정에서 기획부터 개발까지 전반적인 흐름을 주도적으로 구성해보며 몰입도 높은 개발 경험을 할 수 있었습니다.

특히, UI 구현에는 Hero UI 컴포넌트를 적극 활용했습니다.
개발 도중 공식 문서에서 UI 오류를 발견하였고, 이를 직접 수정하여 PR을 올리는 방식으로 오픈소스에 첫 기여를 하게 되었습니다.
→ [fix(docs): remove misused color in listbox radio-group](https://github.com/heroui-inc/heroui/pull/5011)

이번 프로젝트는 단순히 결과물을 만드는 데 그치지 않고, 사용자와의 상호작용을 고려한 인터랙티브한 경험 설계를 통해 제 개발 역량과 방향성을 되돌아보는 계기가 되었습니다.

다만, 게임의 특성상 가로 형태의 UI 중심으로 디자인을 구성하다 보니 모바일 환경을 충분히 고려하지 못했던 점은 아쉬움으로 남습니다.
이에 따라 향후에는 다양한 디바이스에서도 최적화된 반응형 경험을 제공할 수 있도록 개선해 나갈 예정입니다.

## 5. 향후 계획

- Level Up 로그 구현
  - 캐릭터의 성장 히스토리를 확인할 수 있는 페이지를 구현할 예정입니다.
- STORE 페이지 구현
  - 캐릭터의 능력치를 높이는 아이템을 구매할 수 있는 상점 페이지를 구현할 예정입니다.
- GAME 페이지 구현
  - 여러 가지 미니게임을 추가하여 더 몰입감 있는 게임 경험을 제공할 예정입니다.
