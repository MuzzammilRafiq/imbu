import { getproblem } from "@/actions/get-problem";
import Workspace from "@/app/_components/Workspace/Workspace";

interface Props {
  params: { slug: string };
}
export default async function ProblemPage({ params }: Props) {
  const { status, error, problem, problemData } = await getproblem(params);
  if (error) {
    if (status === 500) return <h1>Internel server error</h1>;
  }
  if (problem === undefined) return <h1>404 Not Found</h1>;

  return <Workspace problem={problem} problemData={problemData} />;
}
