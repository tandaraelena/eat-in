import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { CardText, CardWrapper, Text } from './styles';

export const Card = ({ title, src }: { title: string; src: string }) => {
  return (
    <CardWrapper>
      <Image src={src} objectFit="cover" width={200} height={200} />
      <CardText>
        <Text>{title}</Text>
        <FaArrowRight style={{ width: '15px' }} />
      </CardText>
    </CardWrapper>
  );
};
