import { Button } from "@shared/components/button/button";

// 구매하기 버튼
export interface BuyButtonProps {
  onClick?: () => void;
}

export const BuyButton = () => (
  <Button variant="primary" size="buy" fullWidth>
    구매하기
  </Button>
);
