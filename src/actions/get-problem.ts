import { db } from "@/lib/db";
export const getproblem = async (params: { slug: string }) => {
  try {
    const problem = await db.problem.findUnique({
      where: { slug: params.slug },
    });

    if (!problem) return { error: "No problem found", status: 404 };

    const problemData = await db.problemData.findUnique({
      where: { problemId: problem.id },
    });
    
    // console.log(problem,problemData)
    if (!problemData) return { error: "something wen't worng", status: 500 };
    return { problem, problemData, status: 200 };
  } catch (error) {
    // console.log(error)
    return { error: "something wen't worng", status: 500 };
  }
};
