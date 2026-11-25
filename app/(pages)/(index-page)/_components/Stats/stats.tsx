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
import branch_leaves from '@public/Images/stats/branch-leaves.svg';
import branch_shadow from '@public/Images/stats/branch-shadow.svg';
import branch from '@public/Images/stats/branch.svg';
import branch_leaves_1 from '@public/Images/stats/branch-leaves-1.svg';
import branch_leaves_2 from '@public/Images/stats/branch-leaves-2.svg';
import branch_leaves_3 from '@public/Images/stats/branch-leaves-3.svg';
import branch_leaves_4 from '@public/Images/stats/branch-leaves-4.svg';
import branch_leaves_5 from '@public/Images/stats/branch-leaves-5.svg';
import branch_leaves_6 from '@public/Images/stats/branch-leaves-6.svg';
import branch_leaves_7 from '@public/Images/stats/branch-leaves-7.svg';
import orange_hours from '@public/Images/stats/orange-hours.svg';
import orange_attendees from '@public/Images/stats/orange-attendees.svg';
import orange_prizes from '@public/Images/stats/orange-prizes.svg';
import orange_projects from '@public/Images/stats/orange-projects.svg';
import dot from '@public/Images/stats/dot.svg';
import dots_hours from '@public/Images/stats/dots-hours.svg';
import dot_prizes from '@public/Images/stats/dot-prizes.svg';
import CountUp from './CountUp';

// Each orange is a size container: its number's font-size is a % of the
// orange (cqw) so text scales with the art; labels derive from the number.
const STAT_ORANGE =
  'absolute aspect-square [container-type:inline-size] font-dmmono leading-[1.2] text-[var(--color-cream)]';
const STAT_NUMBER =
  'absolute -translate-x-1/2 whitespace-nowrap [font-weight:var(--font-weight-medium)] text-[length:var(--stat-number)]';
const STAT_LABEL =
  'absolute -translate-x-1/2 whitespace-nowrap [font-weight:var(--font-weight-regular)] text-[length:calc(var(--stat-number)*var(--stat-label-scale))]';

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

      {/* Duck on stool (above the branch on mobile, below it on desktop) */}
      <div className="absolute z-[1] md:z-auto left-[54.61%] top-[44.28%] w-[52.42%] md:left-[47.33%] md:top-[37.37%] md:w-[29.22%]">
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

      {/* Orange branch with stats. Mobile is the same art at 0.5275x, so
          everything inside is % of this group and only the group moves. */}
      <div className="absolute top-0 left-[-18.83%] w-[123.67%] md:left-[-9.86%] md:w-[63.98%] aspect-[921.373/847.382]">
        <div className="absolute left-0 top-0 w-full">
          <Image src={branch_leaves} alt="" className="w-full h-auto" />
        </div>
        <div className="absolute left-[5.86%] top-[15.58%] w-[82.54%]">
          <Image src={branch_shadow} alt="" className="w-full h-auto" />
        </div>
        <div className="absolute left-[14%] top-[24.69%] w-[70.37%]">
          <Image src={branch} alt="" className="w-full h-auto" />
        </div>

        {/* 24 hours */}
        <div
          className={`${STAT_ORANGE} left-[14%] top-[74.89%] w-[18.51%] [--stat-number:29.84cqw]`}
        >
          <div className="absolute left-[-7.62%] top-[-1.76%] w-[107.62%]">
            <Image src={orange_hours} alt="" className="w-full h-auto" />
          </div>
          <p className={`${STAT_NUMBER} left-[48.52%] top-[23.69%]`}>
            <CountUp to={24} />
          </p>
          <p className={`${STAT_LABEL} left-[47.48%] top-[56.89%]`}>hours</p>
          <div className="absolute left-[82.66%] top-[57.1%] w-[9.79%]">
            <Image src={dots_hours} alt="" className="w-full h-auto" />
          </div>
        </div>

        {/* 750+ attendees */}
        <div
          className={`${STAT_ORANGE} left-[58.48%] top-[56.17%] w-[28.4%] [--stat-number:22.67cqw]`}
        >
          <div className="absolute left-[-4.97%] top-[-1.15%] w-[104.97%]">
            <Image src={orange_attendees} alt="" className="w-full h-auto" />
          </div>
          <p className={`${STAT_NUMBER} left-[43.83%] top-[29.83%]`}>
            <CountUp to={750} suffix="+" />
          </p>
          <p className={`${STAT_LABEL} left-[50.9%] top-[55.06%]`}>attendees</p>
          <div className="absolute left-[68.86%] top-[80.28%] w-[3.06%]">
            <Image src={dot} alt="" className="w-full h-auto" />
          </div>
          <div className="absolute left-[71.92%] top-[84.87%] w-[3.06%]">
            <Image src={dot} alt="" className="w-full h-auto" />
          </div>
          <div className="absolute left-[74.21%] top-[76.84%] w-[3.06%]">
            <Image src={dot} alt="" className="w-full h-auto" />
          </div>
          <div className="absolute left-[77.27%] top-[81.81%] w-[3.06%]">
            <Image src={dot} alt="" className="w-full h-auto" />
          </div>
        </div>

        {/* $15k prizes */}
        <div
          className={`${STAT_ORANGE} left-[78.21%] top-[49.8%] w-[17.19%] [--stat-number:27.04cqw]`}
        >
          <div className="absolute left-[-8.21%] top-[-1.89%] w-[108.21%]">
            <Image src={orange_prizes} alt="" className="w-full h-auto" />
          </div>
          <p className={`${STAT_NUMBER} left-[50.44%] top-[25.91%]`}>
            <CountUp to={15} prefix="$" suffix="k" />
          </p>
          <p className={`${STAT_LABEL} left-[50.2%] top-[55.99%]`}>prizes</p>
          <div className="absolute left-[90.72%] top-[59.56%] w-[3.28%]">
            <Image src={dot_prizes} alt="" className="w-full h-auto" />
          </div>
          <div className="absolute left-[84.98%] top-[58.74%] w-[3.28%]">
            <Image src={dot_prizes} alt="" className="w-full h-auto" />
          </div>
          <div className="absolute left-[87.85%] top-[63.66%] w-[3.28%]">
            <Image src={dot_prizes} alt="" className="w-full h-auto" />
          </div>
        </div>

        {/* 150+ projects */}
        <div
          className={`${STAT_ORANGE} left-[29.78%] top-[56.56%] w-[22.06%] [--stat-number:23.89cqw]`}
        >
          <div className="absolute left-[-6.39%] top-[-1.48%] w-[106.39%]">
            <Image src={orange_projects} alt="" className="w-full h-auto" />
          </div>
          <p className={`${STAT_NUMBER} left-[48.92%] top-[27.42%]`}>
            <CountUp to={150} suffix="+" />
          </p>
          <p className={`${STAT_LABEL} left-[48.74%] top-[54.01%]`}>projects</p>
          <div className="absolute left-[70.14%] top-[76.12%] w-[3.94%]">
            <Image src={dot} alt="" className="w-full h-auto" />
          </div>
          <div className="absolute left-[77.02%] top-[76.12%] w-[3.94%]">
            <Image src={dot} alt="" className="w-full h-auto" />
          </div>
          <div className="absolute left-[74.07%] top-[81.53%] w-[3.94%]">
            <Image src={dot} alt="" className="w-full h-auto" />
          </div>
        </div>

        {/* Leaves over the branch and oranges */}
        <div className="absolute left-[16.39%] top-[45.79%] w-[13.09%]">
          <Image src={branch_leaves_1} alt="" className="w-full h-auto" />
        </div>
        <div className="absolute left-[36.68%] top-[49.56%] w-[6.18%]">
          <Image src={branch_leaves_2} alt="" className="w-full h-auto" />
        </div>
        <div className="absolute left-[57.2%] top-[52.16%] w-[11.25%]">
          <Image src={branch_leaves_3} alt="" className="w-full h-auto" />
        </div>
        <div className="absolute left-[75.85%] top-[40.83%] w-[12.21%]">
          <Image src={branch_leaves_4} alt="" className="w-full h-auto" />
        </div>
        <div className="absolute left-[16.27%] top-[69.86%] w-[8.2%]">
          <Image src={branch_leaves_5} alt="" className="w-full h-auto" />
        </div>
        <div className="absolute left-[32.41%] top-[21.71%] w-[21.24%]">
          <Image src={branch_leaves_6} alt="" className="w-full h-auto" />
        </div>
        <div className="absolute left-[50.36%] top-[29.75%] w-[17.54%]">
          <Image src={branch_leaves_7} alt="" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
}
