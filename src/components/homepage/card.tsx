import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { CardText, CardWrapper, Text } from './styles';
import { useRouter } from 'next/router';

export const Card = ({ title, src }: { title: string; src: string }) => {
  const router = useRouter();

  return (
    <CardWrapper onClick={() => router.push(`/products/${title.toLowerCase()}`)}>
      <Image src={src} objectFit="cover" width={200} height={200} />
      <CardText>
        <Text>{title}</Text>
        <FaArrowRight style={{ width: '15px' }} />
      </CardText>
    </CardWrapper>
  );
};
