## 🔍 관련 이슈 (Related Issues)

<!-- 이번 작업과 연결된 이슈 번호를 적어주세요 -->

- Closes #102

<!-- - Related to # -->

## 📝 변경 사항 요약 (Summary)

<!-- 이번 PR에서 어떤 부분이 변경되었는지 간단히 정리해주세요 -->

Button 컴포넌트에 `rightIcon` props를 추가하고, `ticketbayGlobal` 사이즈 variant를 추가하여 TICKETBAY GLOBAL 버튼을 구현했습니다.

**주요 변경사항:**
- Button 컴포넌트에 오른쪽 아이콘을 표시할 수 있는 `rightIcon` props 추가
- Button 컴포넌트에 작은 크기의 `ticketbayGlobal` 사이즈 variant 추가
- `TicketbayGlobalButton` 컴포넌트 신규 생성

## 🎯 작업 내용 상세 (Details)

<!-- 작업 과정, 고려한 부분, 구현 방식 등을 조금 더 구체적으로 설명해주세요 -->

### 1. Button 컴포넌트 확장

#### `rightIcon` props 추가
- `ButtonProps` 인터페이스에 `rightIcon?: ReactNode` 추가
- 버튼 텍스트 오른쪽에 아이콘을 표시할 수 있도록 구현
- 조건부 렌더링으로 아이콘이 있을 때만 표시되도록 처리

```typescript
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  rightIcon?: ReactNode;  // 추가
  // ...
}

{rightIcon && <span>{rightIcon}</span>}
```

#### `ticketbayGlobal` 사이즈 variant 추가
- 기존 `buy` 사이즈보다 작은 버튼 스타일 추가
- 폰트: `body3_medium` (12px, medium)
- 높이: `3.2rem` (buy: 4.4rem)
- 패딩: `0.6rem 8.3rem` (buy: 1.2rem 8.3rem)
- 모서리: `6px` (buy: 8px)

### 2. TicketbayGlobalButton 컴포넌트 구현

- `Button` 컴포넌트를 활용하여 "TICKETBAY GLOBAL" 버튼 구현
- 오른쪽에 `ChevronBigRightIcon` 아이콘 표시
- `ticketbayGlobal` 사이즈와 `rightIcon` props를 활용

**구현 방식:**
- 재사용 가능한 `Button` 컴포넌트를 기반으로 구현
- 별도 컴포넌트로 분리하여 유지보수성 향상
- 디자인 시스템과 일관성 유지

### 변경된 파일

1. `src/shared/components/button/button.tsx`
   - `rightIcon` props 추가 및 렌더링 로직 구현

2. `src/shared/components/button/button.css.ts`
   - `ticketbayGlobal` 사이즈 variant 스타일 추가

3. `src/widgets/home/components/TicketbayGlobalButton/TicketbayGlobalButton.tsx` (신규)
   - `TicketbayGlobalButton` 컴포넌트 생성

## 💬 리뷰어 참고사항 (Notes for Reviewers)

<!-- 리뷰 시 중점적으로 봐주면 좋을 내용이나 참고 사항이 있다면 적어주세요 -->

### 확인해주시면 좋을 부분

1. **Button 컴포넌트 확장성**
   - `rightIcon` props가 다른 버튼에서도 잘 활용될 수 있는지 확인
   - 기존 `Button` 컴포넌트 사용처에 영향이 없는지 확인

2. **스타일 일관성**
   - `ticketbayGlobal` 사이즈의 스타일이 디자인 시스템과 일치하는지 확인
   - `buy` 사이즈와의 차이점이 적절한지 확인

3. **컴포넌트 구조**
   - `TicketbayGlobalButton`을 별도 컴포넌트로 분리한 것이 적절한지 확인
   - 컴포넌트 네이밍 및 위치가 프로젝트 구조와 일치하는지 확인

### 테스트 권장사항

- [ ] `TicketbayGlobalButton` 컴포넌트가 정상적으로 렌더링되는지 확인
- [ ] `rightIcon` props가 있는 버튼과 없는 버튼 모두 정상 작동하는지 확인
- [ ] `ticketbayGlobal` 사이즈가 다른 사이즈와 스타일이 올바르게 구분되는지 확인
- [ ] 반응형 디자인에서도 버튼이 정상적으로 표시되는지 확인

