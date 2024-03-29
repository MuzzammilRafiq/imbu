"use client";
import useWindowSize from "@/hooks/use-window-size";
import { ProblemData, Problem } from "@prisma/client";
import { useState } from "react";
import Split from "react-split";
import ProblemDescription from "./ProblemDescription/ProblemDescription";
import PlayGround from "./PlayGround/PlayGround";

interface WorkspaceProps {
  problem: Problem;
  problemData: ProblemData;
}
const Workspace = ({ problem, problemData }: WorkspaceProps) => {
  // console.log({ problem, problemData });
  const { width, height } = useWindowSize();
  const [success, setSuccess] = useState(false);
  const [solved, setSolved] = useState(false);
  return (
    <Split className="split" minSize={0}>
      <ProblemDescription />
      <div className="bg-dark-fill-2">
        <PlayGround />
        {/* {success && <Confetti gravity={0.3} tweenDuration={4000} width={width - 1} height={height - 1} />} */}
      </div>
    </Split>
  );
};

export default Workspace;
