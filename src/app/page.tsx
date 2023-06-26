'use client';
import Image from 'next/image';

import JH from '../assets/jh.png';
import { GoogleLogo } from '../assets/phosphor-icons';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export default function Home() {
  const isAboveLargeScreens = useMediaQuery('(min-width: 90em)');

  return (
    <section className="grid flex-1 grid-cols-1 bg-momentsy-gray-900 text-momentsy-gray-400 desktop:grid-cols-2">
      <div className="relative overflow-hidden bg-[url('../assets/bg-stars.svg')] px-4 py-8 md:px-8">
        <div className="flex h-full w-full max-w-[600px] flex-col items-center justify-center desktop:mx-auto">
          <div className="my-auto flex w-full flex-col gap-2">
            <span className="w-full text-4xl font-bold text-momentsy-beige md:text-5xl">
              Momentsy
            </span>
            <h1 className="text-3xl font-semibold text-momentsy-gray-100 md:text-4xl">
              Sua história está aqui
            </h1>
            <p className="text-base font-medium leading-snug tracking-wide text-momentsy-gray-400 md:text-lg">
              Colecione e relembre momentos marcantes e especiais de sua vida e
              compartilhe (se quiser) com o mundo!
            </p>

            <button className="mt-6 flex w-fit items-center gap-2 rounded-md bg-[#EA4335] px-4 py-3 text-momentsy-gray-100 shadow-sm transition-colors hover:bg-[#f65314]">
              <GoogleLogo className="h-6 w-6" weight="bold" />
              <span className="text-base font-semibold">
                Entrar com o Google
              </span>
            </button>
          </div>
          <footer className="flex w-full">
            <div
              className="rounded-full bg-momentsy-red px-2.5 py-2 duration-75 hover:scale-125"
              title="Jhonathan Alencar"
            >
              <Image src={JH} alt="JH" width={16} height={24} className="" />
            </div>
          </footer>

          {!isAboveLargeScreens ? (
            <div className="absolute right-0 top-1/2 h-[290px] w-[524px] -translate-y-1/2 translate-x-1/2 rounded-full bg-momentsy-beige blur-[196px]" />
          ) : null}
        </div>

        <div className="bg-stripes-size absolute left-0 top-0 h-full w-2 bg-stripes" />

        {!isAboveLargeScreens ? (
          <div className="bg-stripes-size  absolute right-0 top-0 h-full w-2 bg-stripes" />
        ) : null}
      </div>

      {isAboveLargeScreens ? (
        <div className="relative overflow-hidden bg-[url('../assets/bg-stars.svg')]">
          <div className="absolute right-0 top-1/2 h-[290px] w-[524px] -translate-y-1/2 translate-x-1/2 rounded-full bg-momentsy-beige blur-[196px]" />

          <div className="bg-stripes-size  absolute right-0 top-0 h-full w-2 bg-stripes" />
        </div>
      ) : null}
    </section>
  );
}
