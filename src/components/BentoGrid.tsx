import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "motion/react";

export function BentoGridSection() {
  return (
    <section className="w-full flex items-center justify-center p-16">
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent bg-neutral-300"></div>
);

const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-black/[0.2] flex-col gap-4"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl p-2 items-center justify-start"
      >
        <img
          src="/johnny-torssell.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full border shadow-md shadow-black/50 h-15 w-15"
        />
        <p className="text-sm text-neutral-500"></p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-col p-2 justify-end text-end items-end text-balance gap-2"
      >
        <p className="text-lg font-semibold text-primary">
          "Jag uppskattade boken mycket"
        </p>
        <p className="text-xs text-balance text-neutral-500">
          "Riktigt bra genomgång av Elliott Wave teorin"
        </p>
      </motion.div>
    </motion.div>
  );
};

const items = [
  {
    title: "Rörelser berättar en historia",
    description: "Varje sväng i grafen bär på information. Lär dig läsa den.",
    header: <Skeleton />,
    className: "md:col-span-2",
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Johnny Torssell",
    description: "Teknisk Analytiker på Carnegie.",
    header: <SkeletonFive />,
    className: "md:col-span-1",
    // icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-1",
    // icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-2",
    // icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
