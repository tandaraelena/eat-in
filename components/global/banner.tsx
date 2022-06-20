import Image from 'next/image';
import { BannerWrapper } from './styles';

export const Banner = () => {
  return (
    <BannerWrapper>
      <img src="/assets/banner2.jpeg" style={{ width: '100%' }} />
    </BannerWrapper>
  );
};
