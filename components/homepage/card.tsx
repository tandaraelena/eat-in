import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { CardText, CardWrapper, Text } from './styles';

export const Card = () => {
  return (
    <CardWrapper>
      <Image src="/assets/starter.jpeg" objectFit="cover" width={200} height={200} />
      <CardText>
        <Text>Starters</Text>
        <FaArrowRight style={{ width: '15px' }} />
      </CardText>
    </CardWrapper>
  );
};
