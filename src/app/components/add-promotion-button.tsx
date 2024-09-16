'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import Button from './button';

export interface AddPromotionButtonProops {
  companyId: string;
}

export default function AddPromotionButton({
  companyId,
}: AddPromotionButtonProops) {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push(`/companies/${companyId}/new-promotion`)}
    >
      Add promotions
    </Button>
  );
}
