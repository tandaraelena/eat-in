import Image from 'next/image';

export const ProductCard = ({
  title,
  image,
  price,
  kcal,
}: {
  title: string;
  image: string;
  price: number;
  kcal: string;
}) => (
  <div
    key={title}
    style={{
      cursor: 'pointer',
      width: '200px',
      boxShadow: '0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0)',
      margin: '10px 10px',
    }}
  >
    <Image src={image} objectFit="cover" width={200} height={200} layout="responsive" />
    <div
      style={{
        backgroundColor: '#30395F',
        color: 'white',
        padding: '10px 10px',
      }}
    >
      <div style={{ fontSize: '20px', margin: '10px 0' }}>{title}</div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>{`£${price}`}</div>
        <div>{kcal}</div>
      </div>
    </div>
  </div>
);
