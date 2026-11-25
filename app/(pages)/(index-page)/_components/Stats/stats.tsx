import Image from 'next/image';
import clouds from '@public/Images/stats/clouds.svg';
import tree_right_leaves from '@public/Images/stats/tree-right-leaves.svg';
import tree_right_shadow from '@public/Images/stats/tree-right-shadow.svg';
import tree_right_orange_1 from '@public/Images/stats/tree-right-orange-1.svg';
import tree_right_orange_2 from '@public/Images/stats/tree-right-orange-2.svg';
import tree_right_orange_2_highlight from '@public/Images/stats/tree-right-orange-2-highlight.svg';
import tree_left_leaves from '@public/Images/stats/tree-left-leaves.svg';
import tree_left_shadow from '@public/Images/stats/tree-left-shadow.svg';
import tree_left_orange_1 from '@public/Images/stats/tree-left-orange-1.svg';
import tree_left_orange_2 from '@public/Images/stats/tree-left-orange-2.svg';
import tree_left_orange_3 from '@public/Images/stats/tree-left-orange-3.svg';
import duck_stool from '@public/Images/stats/duck-stool.svg';
import road from '@public/Images/stats/road.svg';
import loose_leaves_top from '@public/Images/stats/loose-leaves-top.svg';
import loose_leaves_right from '@public/Images/stats/loose-leaves-right.svg';
import loose_orange from '@public/Images/stats/loose-orange.svg';

// Figma "Stats": mobile 275:2499 (393 x 987), desktop 222:2143 (1440 x 1488).
// %'s are converted from Figma pixel values
// Cuts off halfway through road
export default function Stats() {
  return (
    <section
      id="section-3"
      className="relative w-full overflow-hidden aspect-[393/987] md:aspect-[1440/1488]"
    >
      {/* Clouds */}
      <div className="absolute left-[-8.4%] top-[28.06%] w-[258.61%] md:left-[7.08%] md:top-[24.42%] md:w-[120.76%]">
        <Image src={clouds} alt="" className="w-full h-auto" />
      </div>

      {/* Right orange tree (desktop only) */}
      <div className="absolute hidden md:block md:left-[66.29%] md:top-[40.52%] md:w-[55.1%]">
        <Image src={tree_right_leaves} alt="" className="w-full h-auto" />
      </div>
      <div className="absolute hidden md:block md:left-[70.95%] md:top-[57.89%] md:w-[35.91%]">
        <Image src={tree_right_shadow} alt="" className="w-full h-auto" />
      </div>
      <div className="absolute hidden md:block md:left-[92.01%] md:top-[67.82%] md:w-[8.7%]">
        <Image src={tree_right_orange_1} alt="" className="w-full h-auto" />
      </div>
      <div className="absolute hidden md:block md:left-[94.65%] md:top-[55.51%] md:w-[11.61%]">
        <Image src={tree_right_orange_2} alt="" className="w-full h-auto" />
      </div>
      <div className="absolute hidden md:block md:left-[96.11%] md:top-[58.43%] md:w-[1.19%]">
        <Image
          src={tree_right_orange_2_highlight}
          alt=""
          className="w-full h-auto"
        />
      </div>

      {/* Left orange tree */}
      <div className="absolute left-[-46.06%] top-[65.45%] w-[95.64%] md:left-[-13.68%] md:top-[68.88%] md:w-[49.07%]">
        <Image src={tree_left_leaves} alt="" className="w-full h-auto" />
      </div>
      <div className="absolute left-[-32.46%] top-[74.66%] w-[62.25%] md:left-[-6.71%] md:top-[80.37%] md:w-[31.94%]">
        <Image src={tree_left_shadow} alt="" className="w-full h-auto" />
      </div>
      <div className="absolute left-[0.68%] top-[74.94%] w-[15.61%] md:left-[10.3%] md:top-[80.71%] md:w-[8.01%]">
        <Image src={tree_left_orange_1} alt="" className="w-full h-auto" />
      </div>
      <div className="absolute left-[-15.74%] top-[77.82%] w-[13.11%] md:left-[1.87%] md:top-[84.31%] md:w-[6.73%]">
        <Image src={tree_left_orange_2} alt="" className="w-full h-auto" />
      </div>
      <div className="absolute left-[-1.29%] top-[82.82%] w-[13.11%] md:left-[9.29%] md:top-[90.55%] md:w-[6.73%]">
        <Image src={tree_left_orange_3} alt="" className="w-full h-auto" />
      </div>

      {/* Duck on stool */}
      <div className="absolute left-[54.61%] top-[44.28%] w-[52.42%] md:left-[47.33%] md:top-[37.37%] md:w-[29.22%]">
        <Image src={duck_stool} alt="" className="w-full h-auto" />
      </div>

      {/* Road top edge (desktop only): gives the section its curved bottom */}
      <div className="absolute hidden md:block md:left-[-33.65%] md:top-[84.01%] md:w-[137.38%]">
        <Image src={road} alt="" className="w-full h-auto" />
      </div>

      {/* Loose leaves + orange (desktop only) */}
      <div className="absolute hidden md:block md:left-[26.11%] md:top-[4.5%] md:w-[6.65%]">
        <Image src={loose_leaves_top} alt="" className="w-full h-auto" />
      </div>
      <div className="absolute hidden md:block md:left-[90.65%] md:top-[85.17%] md:w-[6.78%]">
        <Image src={loose_leaves_right} alt="" className="w-full h-auto" />
      </div>
      <div className="absolute hidden md:block md:left-[93.59%] md:top-[69.34%] md:w-[1.78%]">
        <Image src={loose_orange} alt="" className="w-full h-auto" />
      </div>

      {/* Orange branch with stats: next commit. */}
    </section>
  );
}
