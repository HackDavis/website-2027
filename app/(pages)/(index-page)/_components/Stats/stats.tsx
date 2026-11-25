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

// Hovering the branch sways its oranges/leaves. Loose leaves also sway
const SWAY_IN_BRANCH = 'motion-safe:can-hover:group-hover:animate-wiggle';
const SWAY_ON_HOVER = 'motion-safe:can-hover:hover:animate-wiggle';

// Each orange is a size container: its number's font-size is a % of the
// orange (cqw) so text scales with the art; labels derive from the number.
const STAT_ORANGE = `absolute aspect-square [container-type:inline-size] font-dmmono leading-[1.2] text-[var(--color-cream)] origin-top ${SWAY_IN_BRANCH}`;
const STAT_NUMBER =
  'absolute -translate-x-1/2 whitespace-nowrap [font-weight:var(--font-weight-medium)] text-[length:var(--stat-number)]';
const STAT_LABEL =
  'absolute -translate-x-1/2 whitespace-nowrap [font-weight:var(--font-weight-regular)] text-[length:calc(var(--stat-number)*var(--stat-label-scale))]';

// Figma "Stats": mobile 275:2499 (393 x 987), desktop 222:2143 (1440 x 1488).
// Keeps the same aspect ratio as Figma so % positions match Figma at any width.
export default function Stats() {
  return (
    <section
      id="section-3"
      className="relative w-full overflow-hidden aspect-[393/987] md:aspect-[1440/1488]"
    >
      {/* Clouds */}
      <div className="absolute left-[-8%] top-[28%] w-[259%] md:left-[7%] md:top-[24%] md:w-[121%]">
        <Image src={clouds} alt="" className="w-full h-auto" />
      </div>

      {/* Right orange tree (desktop only) */}
      <div className="hidden md:contents">
        <div className="absolute md:left-[66%] md:top-[41%] md:w-[55%]">
          <Image src={tree_right_leaves} alt="" className="w-full h-auto" />
        </div>
        <div className="absolute md:left-[71%] md:top-[58%] md:w-[36%]">
          <Image src={tree_right_shadow} alt="" className="w-full h-auto" />
        </div>
        <div className="absolute md:left-[92%] md:top-[68%] md:w-[9%]">
          <Image src={tree_right_orange_1} alt="" className="w-full h-auto" />
        </div>
        <div className="absolute md:left-[95%] md:top-[56%] md:w-[12%]">
          <Image src={tree_right_orange_2} alt="" className="w-full h-auto" />
        </div>
        <div className="absolute md:left-[96%] md:top-[58%] md:w-[1%]">
          <Image
            src={tree_right_orange_2_highlight}
            alt=""
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Left orange tree */}
      <div className="absolute left-[-46%] top-[66%] w-[96%] md:left-[-14%] md:top-[69%] md:w-[49%]">
        <Image src={tree_left_leaves} alt="" className="w-full h-auto" />
      </div>
      <div className="absolute left-[-32%] top-[75%] w-[62%] md:left-[-7%] md:top-[80%] md:w-[32%]">
        <Image src={tree_left_shadow} alt="" className="w-full h-auto" />
      </div>
      <div className="absolute left-[1%] top-[75%] w-[16%] md:left-[10%] md:top-[81%] md:w-[8%]">
        <Image src={tree_left_orange_1} alt="" className="w-full h-auto" />
      </div>
      <div className="absolute left-[-16%] top-[78%] w-[13%] md:left-[2%] md:top-[84%] md:w-[7%]">
        <Image src={tree_left_orange_2} alt="" className="w-full h-auto" />
      </div>
      <div className="absolute left-[-1%] top-[83%] w-[13%] md:left-[9%] md:top-[91%] md:w-[7%]">
        <Image src={tree_left_orange_3} alt="" className="w-full h-auto" />
      </div>

      {/* Duck on stool (above the branch on mobile, below it on desktop) */}
      <div className="absolute z-[1] md:z-auto left-[55%] top-[44%] w-[52%] md:left-[47%] md:top-[37%] md:w-[29%]">
        <Image src={duck_stool} alt="" className="w-full h-auto" />
      </div>

      {/* Desktop only from here to the branch */}
      <div className="hidden md:contents">
        {/* Road top edge gives the section its curved bottom */}
        <div className="absolute md:left-[-34%] md:top-[84%] md:w-[137%]">
          <Image src={road} alt="" className="w-full h-auto" />
        </div>

        {/* Loose leaves + orange. The top leaves sit inside the
          branch group's box; z-[1] keeps them hoverable. */}
        <div
          className={`absolute z-[1] ${SWAY_ON_HOVER} md:left-[26%] md:top-[5%] md:w-[7%]`}
        >
          <Image src={loose_leaves_top} alt="" className="w-full h-auto" />
        </div>
        <div
          className={`absolute ${SWAY_ON_HOVER} md:left-[91%] md:top-[85%] md:w-[7%]`}
        >
          <Image src={loose_leaves_right} alt="" className="w-full h-auto" />
        </div>
        <div className="absolute md:left-[94%] md:top-[69%] md:w-[2%]">
          <Image src={loose_orange} alt="" className="w-full h-auto" />
        </div>
      </div>

      {/* Orange branch with stats. Mobile is the same art at 0.5275x, so
          everything inside is % of this group and only the group moves. */}
      <div className="group absolute top-0 left-[-19%] w-[124%] md:left-[-10%] md:w-[64%] aspect-[921.373/847.382]">
        <div className="absolute left-0 top-0 w-full">
          <Image src={branch_leaves} alt="" className="w-full h-auto" />
        </div>
        <div className="absolute left-[6%] top-[16%] w-[83%]">
          <Image src={branch_shadow} alt="" className="w-full h-auto" />
        </div>
        <div className="absolute left-[14%] top-[25%] w-[70%]">
          <Image src={branch} alt="" className="w-full h-auto" />
        </div>

        {/* 24 hours */}
        <div
          className={`${STAT_ORANGE} [--sway-delay:0ms] left-[14%] top-[75%] w-[19%] [--stat-number:29.8cqw]`}
        >
          <div className="absolute left-[-8%] top-[-2%] w-[108%]">
            <Image src={orange_hours} alt="" className="w-full h-auto" />
          </div>
          <p className={`${STAT_NUMBER} left-[49%] top-[24%]`}>
            <CountUp to={24} />
          </p>
          <p className={`${STAT_LABEL} left-[48%] top-[57%]`}>hours</p>
          <div className="absolute left-[83%] top-[57%] w-[10%]">
            <Image src={dots_hours} alt="" className="w-full h-auto" />
          </div>
        </div>

        {/* 750+ attendees */}
        <div
          className={`${STAT_ORANGE} [--sway-delay:300ms] left-[59%] top-[56%] w-[28%] [--stat-number:22.7cqw]`}
        >
          <div className="absolute left-[-5%] top-[-1%] w-[105%]">
            <Image src={orange_attendees} alt="" className="w-full h-auto" />
          </div>
          <p className={`${STAT_NUMBER} left-[44%] top-[30%]`}>
            <CountUp to={750} suffix="+" />
          </p>
          <p className={`${STAT_LABEL} left-[51%] top-[55%]`}>attendees</p>
          <div className="absolute left-[69%] top-[80%] w-[3%]">
            <Image src={dot} alt="" className="w-full h-auto" />
          </div>
          <div className="absolute left-[72%] top-[85%] w-[3%]">
            <Image src={dot} alt="" className="w-full h-auto" />
          </div>
          <div className="absolute left-[74%] top-[77%] w-[3%]">
            <Image src={dot} alt="" className="w-full h-auto" />
          </div>
          <div className="absolute left-[77%] top-[82%] w-[3%]">
            <Image src={dot} alt="" className="w-full h-auto" />
          </div>
        </div>

        {/* $15k prizes */}
        <div
          className={`${STAT_ORANGE} [--sway-delay:450ms] left-[78%] top-[50%] w-[17%] [--stat-number:27cqw]`}
        >
          <div className="absolute left-[-8%] top-[-2%] w-[108%]">
            <Image src={orange_prizes} alt="" className="w-full h-auto" />
          </div>
          <p className={`${STAT_NUMBER} left-[50%] top-[26%]`}>
            <CountUp to={15} prefix="$" suffix="k" />
          </p>
          <p className={`${STAT_LABEL} left-[50%] top-[56%]`}>prizes</p>
          <div className="absolute left-[91%] top-[60%] w-[3%]">
            <Image src={dot_prizes} alt="" className="w-full h-auto" />
          </div>
          <div className="absolute left-[85%] top-[59%] w-[3%]">
            <Image src={dot_prizes} alt="" className="w-full h-auto" />
          </div>
          <div className="absolute left-[88%] top-[64%] w-[3%]">
            <Image src={dot_prizes} alt="" className="w-full h-auto" />
          </div>
        </div>

        {/* 150+ projects */}
        <div
          className={`${STAT_ORANGE} [--sway-delay:150ms] left-[30%] top-[57%] w-[22%] [--stat-number:23.9cqw]`}
        >
          <div className="absolute left-[-6%] top-[-1%] w-[106%]">
            <Image src={orange_projects} alt="" className="w-full h-auto" />
          </div>
          <p className={`${STAT_NUMBER} left-[49%] top-[27%]`}>
            <CountUp to={150} suffix="+" />
          </p>
          <p className={`${STAT_LABEL} left-[49%] top-[54%]`}>projects</p>
          <div className="absolute left-[70%] top-[76%] w-[4%]">
            <Image src={dot} alt="" className="w-full h-auto" />
          </div>
          <div className="absolute left-[77%] top-[76%] w-[4%]">
            <Image src={dot} alt="" className="w-full h-auto" />
          </div>
          <div className="absolute left-[74%] top-[82%] w-[4%]">
            <Image src={dot} alt="" className="w-full h-auto" />
          </div>
        </div>

        {/* Leaves over the branch and oranges */}
        <div
          className={`absolute ${SWAY_IN_BRANCH} [--sway-delay:100ms] left-[16%] top-[46%] w-[13%]`}
        >
          <Image src={branch_leaves_1} alt="" className="w-full h-auto" />
        </div>
        <div
          className={`absolute ${SWAY_IN_BRANCH} [--sway-delay:250ms] left-[37%] top-[50%] w-[6%]`}
        >
          <Image src={branch_leaves_2} alt="" className="w-full h-auto" />
        </div>
        <div
          className={`absolute ${SWAY_IN_BRANCH} [--sway-delay:400ms] left-[57%] top-[52%] w-[11%]`}
        >
          <Image src={branch_leaves_3} alt="" className="w-full h-auto" />
        </div>
        <div
          className={`absolute ${SWAY_IN_BRANCH} [--sway-delay:550ms] left-[76%] top-[41%] w-[12%]`}
        >
          <Image src={branch_leaves_4} alt="" className="w-full h-auto" />
        </div>
        <div
          className={`absolute ${SWAY_IN_BRANCH} [--sway-delay:200ms] left-[16%] top-[70%] w-[8%]`}
        >
          <Image src={branch_leaves_5} alt="" className="w-full h-auto" />
        </div>
        <div
          className={`absolute ${SWAY_IN_BRANCH} [--sway-delay:350ms] left-[32%] top-[22%] w-[21%]`}
        >
          <Image src={branch_leaves_6} alt="" className="w-full h-auto" />
        </div>
        <div
          className={`absolute ${SWAY_IN_BRANCH} [--sway-delay:500ms] left-[50%] top-[30%] w-[18%]`}
        >
          <Image src={branch_leaves_7} alt="" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
}
