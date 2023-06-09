'use client';

import { Content } from './Content';
import { Footer } from './Footer';

import { GoogleLogo } from '../assets/phosphor-icons';

export default function HomeContent() {
  return (
    <div className="grid flex-1 grid-cols-1">
      <Content.Root className="px-4 py-8 md:px-8">
        <div className="flex h-full w-full max-w-[1440px] flex-col items-center justify-center desktop:mx-auto">
          <div className="my-auto flex w-full flex-col gap-2">
            <span className="w-full text-4xl font-bold text-momentsy-beige md:text-5xl">
              Momentsy
            </span>
            <h1 className="text-3xl font-semibold text-momentsy-gray-100 md:text-4xl">
              Sua história está aqui
            </h1>
            <p className="max-w-[600px] text-base font-medium leading-snug tracking-wide text-momentsy-gray-400 md:text-lg">
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

          <Footer />
        </div>

        <Content.Galaxy />

        <Content.StripesLeft />
        <Content.StripesRight />
      </Content.Root>
    </div>
  );
}
