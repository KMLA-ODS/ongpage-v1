"use client";
import CountUp from "react-countup";

const stats = [
  {
    num: 10,
    text: "Years of experience",
  },
  {
    num: 146,
    text: "hours per year",
  },
  {
    num: 400,
    text: "children",
  },
  {
    num: 45,
    text: "alumni",
  },
];

const Stats = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-bold"
                ></CountUp>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;