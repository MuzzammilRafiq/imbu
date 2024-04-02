"use client";
import { useState } from "react";
import Split from "react-split";
import ProblemDescription from "./ProblemDescription/ProblemDescription";
import Playground from "./Playground/Playground";
import useWindowSize from "@/hooks/use-window-size";
import { Problem, ProblemData } from "@prisma/client";

const Workspace = ({
  problem,
  problemData,
}: {
  problem: Problem;
  problemData: ProblemData;
}) => {
  const { width, height } = useWindowSize();
  const [success, setSuccess] = useState(false);
  const [solved, setSolved] = useState(false);

  return (
    <Split className="split" minSize={0}>
      <ProblemDescription problem={problem} problemData={problemData} />
      <div className="bg-dark-fill-2">
        <Playground
        // problem={problem}
        // setSuccess={setSuccess}
        // setSolved={setSolved}
        />
      </div>
    </Split>
  );
};
export default Workspace;
