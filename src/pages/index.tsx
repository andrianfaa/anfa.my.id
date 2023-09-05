import clsx from "clsx";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className={clsx("container h-screen", "p-4 m-4 mx-auto md:p-6", "flex flex-col items-center justify-center")}>
      <h1>This site under development</h1>
    </div>
  );
};

export default Home;
