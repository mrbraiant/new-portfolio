import Image from 'next/image';
import { useRouter } from 'next/router';

export const Logo = () => {
  const router = useRouter();

  return (
    <Image
      alt="logo"
      src={'/images/logo.png'}
      width={50}
      height={50}
      onClick={() => router.push('/#home')}
    />
  );
};
