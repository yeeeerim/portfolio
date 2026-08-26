import { careerData } from "./career-data";

import { calculateDeveloperLevel } from "@/lib/calculateDeveloperLevel";
import { Character } from "@/types/character";

export const characterInfo: Record<string, Character> = {
  진예림: {
    name: {
      ko: "진예림",
      en: "JIN YERIM",
    },
    job: "Frontend Engineer",
    shortJob: "Frontend",
    skills: ["React", "Next.js", "Vue.js", "Typescript", "Tailwind"],
    level: calculateDeveloperLevel(careerData).level,
    profile_image_url: "/images/character-pixel-yerim.png",
    image_url: "/images/character-pixel-yerim.png",
    disabled: false,
    progress: [
      {
        label: "React.js",
        value: 75,
      },
      {
        label: "Next.js",
        value: 60,
      },
      {
        label: "Vue.js",
        value: 25,
      },
    ],
    attribute: [
      {
        icon: "ShieldIcon",
        label: "책임감",
        description:
          "사용자 경험에 직접적인 영향을 주는 프론트엔드에서, 작은 UI 버그 하나도 놓치지 않으려는 자세를 갖고 있습니다. 내가 만든 기능이 실제 서비스에 반영된다는 책임감을 가지고 안정성과 완성도를 중요시합니다.",
      },
      {
        icon: "FireIcon",
        label: "성실함",
        description:
          "꾸준한 학습과 코드 리뷰를 통해 실력을 다져나갑니다. 급한 일정 속에서도 코드 품질을 유지하려 노력하며, 주어진 업무를 끝까지 신뢰감 있게 수행합니다.",
      },
      {
        icon: "GraphIcon",
        label: "성장지향형",
        description:
          "새로운 기술 도입이나 기존 코드 리팩토링에 적극적이며, 주도적으로 사이드 프로젝트나 오픈소스 기여를 통해 역량을 확장해나갑니다. 문제 해결 과정 자체를 성장의 기회로 바라봅니다.",
      },
      {
        icon: "PieChartIcon",
        label: "계획형",
        description:
          "프로젝트 진행 전 명확한 기능 정의와 일정 계획을 세우고, 그에 맞춰 체계적으로 작업을 분배합니다. 예상 리스크를 고려해 여유 있는 개발 일정을 짜고, 일정 관리와 우선순위 설정에 능숙합니다.",
      },
    ],
    birthday: "1999.06.09",
    mbti: "ISFJ",
    major: "Computer Engineering",
    favoriteSkills: ["TypeScript", "React.js", "Next.js", "Tailwind"],
  },
};
