import Image from 'next/image';

import JH from '../assets/jh.png';

export function Footer() {
  return (
    <footer className="flex w-full">
      <div
        className="rounded-full bg-momentsy-red px-2.5 py-2 duration-75 hover:scale-125"
        title="Jhonathan Alencar"
      >
        <Image src={JH} alt="JH" width={16} height={24} className="" />
      </div>
    </footer>
  );
}
