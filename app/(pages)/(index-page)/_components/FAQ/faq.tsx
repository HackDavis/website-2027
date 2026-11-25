'use client';
import React from 'react';
import Link from 'next/link';
import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';
import Image from 'next/image';

export default function FAQ() {
  const whatIsHackathonAnswer = (
    <>
      A hackathon is where you transform your crazy ideas into real projects.
      Hundreds of students from across California form teams around an idea and
      collaboratively create technical solutions to problems we face in our
      local communities. These ideas turn into websites, mobile apps, hardware,
      and more! <br /> <br />
      Join HackDavis to make some of the most imaginative projects alongside
      fellow creators! You take care of building and we&apos;ll take care of
      you.
      <br /> <br /> We will be following the{' '}
      <Link
        style={{ textDecoration: 'underline', fontWeight: 'normal' }}
        href="https://drive.google.com/file/d/1KnWwN5sFYTe49Z5312OKnS5FA8OtL4iD/view"
        target="_blank"
      >
        HackDavis Rules &amp; Policies,
      </Link>{' '}
      and{' '}
      <Link
        style={{ textDecoration: 'underline', fontWeight: 'normal' }}
        href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
        target="_blank"
      >
        MLH&apos;s Code Of Conduct.
      </Link>
    </>
  );

  const whatToHelpAnswer = (
    <>
      HackDavis is largely built upon the efforts of our mentors and volunteers,
      who ensure that our hackers have a great experience at our event! Our
      mentor applications are open and volunteer applications will open up soon,
      so keep an eye out! If you&apos;re interested in making a tax-deductible
      contribution to HackDavis, please get in touch with us at{' '}
      <a
        style={{ textDecoration: 'underline', fontWeight: 'normal' }}
        href="mailto:team@hackdavis.io"
      >
        team@hackdavis.io.
      </a>
    </>
  );

  const faqs = [
    {
      question: 'What is a hackathon?',
      answer: whatIsHackathonAnswer,
    },
    {
      question: 'Who can attend?',
      answer: `HackDavis is open to all undergraduate and graduate students from all majors and all schools, and graduates who have completed their degrees within the past year. We are also open to high school students above the age of 18. As long as you're prepared to learn, brainstorm, and bring life to projects, we welcome you to join us!`,
    },
    {
      question: 'Do I need to know how to code?',
      answer: `Nope! Coming in, you do not need to know how to code, but you have to be willing to learn! HackDavis is proud to be a beginner-focused hackathon, and we welcome hackers from all experience levels and backgrounds - over 65% of our hackers are beginners! HackDavis is the perfect time and place to learn new skills - we host beginner-friendly workshops and our mentors provide guidance to help you build something you can be proud of.`,
    },
    {
      question: 'How do teams work?',
      answer: `Teams can have up to 4 members, and submit a single project together! Want to go solo? Fine by us, but we'd highly recommend joining a team to make new friends, bounce ideas off one another, and bring your ideas to life!`,
    },
    {
      question: 'How can I help?',
      answer: whatToHelpAnswer,
    },
    {
      question: 'Why social good?',
      answer: `We want our attendees to create projects with a meaningful impact and hope to foster a community dedicated to social change. We find that most hackathons often don't result in projects as practical solutions to specific societal problems and we're looking to change that.`,
    },
    {
      question: 'What can I create?',
      answer: `You can build whatever your heart desires, whether it's a web app, mobile app, hardware hack, open source tool, or even a simple website! Any social good oriented project is recommended. Our main focus is to provide you a learning experience where you can have fun, ask questions, and experiment with technology.`,
    },
    {
      question: 'What if I don’t have a team or idea?',
      answer: `Worry not! We will host a series of mixers before HackDavis, so check out our social media for announcements about those as we get closer to the event. We'll also have a final mixer right after hacking starts during HackDavis, so we'll make sure you're equipped and ready to go!

      Our non-profit partners, sponsors, and mentors are always here at the event to help you brainstorm and ideate if you don't have an idea!`,
    },
    {
      question: 'How much does it cost?',
      answer: `Zero. Zip. Zilch. Nada. HackDavis is free for all admitted participants, so don't sweat it! We will provide you with WiFi, meals, caffeine, swag, and workspace for the entire weekend.`,
    },
    {
      question: 'Is travel reimbursement provided?',
      answer: `Unfortunately, we are unable to offer travel reimbursement this year. Participants are responsible for covering their own travel costs.`,
    },
  ];

  return (
    <section
      id="faq"
      className="relative w-full overflow-x-clip pt-[50vw] bg-[url('/Images/faq/faq_bg.svg')] bg-no-repeat bg-[position:top_center] bg-cover"
    >
      <Image
        src="/Images/faq/top_cloud_back.svg"
        alt="cloud"
        width={1200}
        height={600}
        className="absolute top-[10vw] left-[-25vw] w-[75vw] md:top-[20vw] md:left-[8vw] md:w-[50vw] pointer-events-none animate-float-sway [--sway:0.5vw] will-change-transform"
      />

      <Image
        src="/Images/faq/top_cloud_front.svg"
        alt="cloud"
        width={1200}
        height={600}
        className="absolute top-[16vw] left-[-30vw] w-[75vw] md:top-[26vw] md:left-[11vw] md:w-[50vw] pointer-events-none animate-float-sway [--sway:2vw] [animation-duration:20s] [animation-direction:reverse] will-change-transform"
      />

      <Image
        src="/Images/faq/bird1.svg"
        alt="bird"
        width={1200}
        height={600}
        className="absolute top-[25vw] md:top-[28vw] right-[20vw] w-[18vw] md:w-[11vw] pointer-events-none animate-float-bob [animation-direction:reverse]"
      />

      <Image
        src="/Images/faq/bird2.svg"
        alt="bird"
        width={1200}
        height={600}
        className="absolute top-[45vw] md:top-[40vw] right-[-3vw] md:right-[12vw] w-[22vw] md:w-[13vw] pointer-events-none animate-float-bob"
      />

      <div className="px-[13vw]">
        <h1 className="pb-[4%] text-[4rem] font-bold tracking-[1.28px] text-[var(--color-faq-text)] font-[var(--font-metropolis)] max-[760px]:text-[2.5rem]">
          FAQ
        </h1>

        <div className="w-full md:w-1/2">
          <Accordion transition transitionTimeout={250}>
            {faqs.map(({ question, answer }, index) => (
              <React.Fragment key={index}>
                <Item
                  header={({ state }) => (
                    <div className="flex w-full flex-row items-center justify-between">
                      <p className="my-[0.5vw] text-[1.25rem] font-bold md:leading-[45px] tracking-[0.4px] text-[var(--color-faq-text)] font-[var(--font-metropolis)] max-[1048px]:text-base max-[760px]:text-[0.875rem] max-[760px]:py-[10px]">
                        {question}
                      </p>
                      <div className="relative w-[19px] h-[19px] flex items-center justify-center">
                        <Image
                          src="/Images/faq/minus.svg"
                          alt=""
                          width={19}
                          height={19}
                          className={`transition-all duration-300 ease-in-out ${
                            state.isEnter ? 'rotate-0' : 'rotate-90'
                          }`}
                        />
                        <Image
                          src="/Images/faq/minus.svg"
                          alt=""
                          width={19}
                          height={19}
                          className="absolute"
                        />
                      </div>
                    </div>
                  )}
                  buttonProps={{
                    className:
                      'group w-full cursor-pointer border-0 bg-transparent text-left',
                  }}
                  contentProps={{
                    className: 'transition-[height] duration-300 ease-in-out',
                  }}
                >
                  <div className="pb-[2%] text-[1rem] font-normal leading-[30px] tracking-[0.4px] text-[var(--color-faq-text)] font-[var(--font-metropolis)] max-[760px]:text-[0.75rem] max-[760px]:leading-[21px] max-[760px]:my-[5vw]">
                    {answer}
                  </div>
                </Item>
                {index < faqs.length - 1 && (
                  <hr className="border-[var(--color-faq-text)]" />
                )}
              </React.Fragment>
            ))}
          </Accordion>
        </div>
      </div>

      <Image
        src="/Images/faq/bottom_cloud_back.svg"
        alt="cloud"
        width={1200}
        height={600}
        className="hidden md:block absolute overflow-x-hidden top-[60vw] right-[-4vw] w-[35vw] pointer-events-none animate-float-sway [--sway:0.5vw] will-change-transform"
      />

      <Image
        src="/Images/faq/bottom_cloud_front.svg"
        alt="cloud"
        width={1200}
        height={600}
        className="hidden md:block absolute overflow-x-hidden top-[65vw] right-[-4vw] w-[40vw] pointer-events-none animate-float-sway [--sway:2vw] [animation-duration:20s] [animation-direction:reverse] will-change-transform"
      />

      <Image
        src="/Images/faq/bird3.svg"
        alt="bird"
        width={1200}
        height={600}
        className="hidden md:block absolute bottom-[80vw] right-[25vw] w-[10vw] pointer-events-none animate-float-bob"
      />

      <Image
        src="/Images/faq/fish_scene.svg"
        alt="fishing_scene"
        width={1200}
        height={600}
        className="relative block ml-auto mt-[4vw] w-[95vw] md:w-[75vw] h-auto pointer-events-none"
      />

      <Image
        src="/Images/faq/fish.svg"
        alt="fish"
        width={1200}
        height={600}
        className="absolute ml-auto mt-[4vw] bottom-[21vw] left-[4vw] w-[30vw] md:bottom-[16vw] md:right-[51vw] md:w-[24vw] h-auto pointer-events-none animate-fish-wiggle"
      />
    </section>
  );
}
