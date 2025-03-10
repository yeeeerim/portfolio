import { CareerPeriod } from "@/types/career";

export function calculateDeveloperLevel(careerPeriods: CareerPeriod[]): {
  level: number;
  experience: number;
} {
  const baseLevel = 1; // 기본 레벨은 1로 고정
  let totalMonths = 0; // 총 경력 기간을 월 단위로 저장

  // 경력 기간 배열을 순회하며 총 경력 기간을 계산
  for (const period of careerPeriods) {
    const startDate = new Date(period.startAt);
    // endAt이 빈 문자열일 경우 현재 날짜로 설정
    const endDate = period.endAt ? new Date(period.endAt) : new Date();

    const monthsDifference =
      (endDate.getFullYear() - startDate.getFullYear()) * 12 +
      (endDate.getMonth() - startDate.getMonth() + 1);

    totalMonths += monthsDifference;
  }

  // 총 경력 기간을 바탕으로 레벨 계산 (1년 = 12개월마다 레벨업)
  const level = baseLevel + Math.floor(totalMonths / 12); // 1년마다 레벨업

  // 남은 개월 수 (12개월 미만일 경우 경험치로 환산)
  const remainingMonths = totalMonths % 12;
  const experience = (remainingMonths / 12) * 100; // 남은 개월 수에 비례한 경험치 계산

  return {
    level,
    experience: Math.round(experience), // 소수점 반올림
  };
}
