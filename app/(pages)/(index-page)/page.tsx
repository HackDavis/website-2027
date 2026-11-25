import Section1 from './_components/Section1/Section1';
import Section2 from './_components/Section2/Section2';
import Stats from './_components/Stats/stats';
import Section4 from './_components/Section4/Section4';
import Section5 from './_components/Section5/Section5';

export default function Home() {
  return (
    <main className="w-full">
      <Section1 />
      <Section2 />
      <Stats />
      <Section4 />
      <Section5 />
    </main>
  );
}
