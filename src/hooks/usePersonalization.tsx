import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export type PersonalizationParams = {
  industryType?: string;
  role?: string;
};

export const usePersonalization = (): PersonalizationParams => {
  const location = useLocation();
  const params = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const industryType = params.get('industrytype') || undefined;
  const role = params.get('role') || undefined;
  return { industryType, role };
};
