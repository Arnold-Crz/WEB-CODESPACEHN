import Image from 'next/image';

function Question({ title, description, img, alt }) {
  return (
    <>
      <Image src={img} alt={alt} width={'120px'} height={'120px'} />
      <h2>{title}</h2>
      <p>{description}</p>
    </>
  );
}

export default Question;
