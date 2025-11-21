/**
 * 숫자 금액을 한국 로케일 기준의 천 단위 콤마 문자열로 포맷합니다.
 *
 * @example
 * formatPriceToKorean(150000); // "150,000"
 *
 * @param price - 포맷할 금액 숫자
 * @returns 천 단위 콤마가 적용된 문자열
 */
export const formatPriceToKorean = (price: number): string => Number(price).toLocaleString("ko-KR");
