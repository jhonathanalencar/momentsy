import { HomeContent } from '@/components/HomeContent';

export default function Home() {
  return (
    <section className="grid flex-1 grid-cols-1 bg-momentsy-gray-900 text-momentsy-gray-400 desktop:grid-cols-2">
      <HomeContent />
    </section>
  );
}
