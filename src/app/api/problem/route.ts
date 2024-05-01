import { db } from "@/lib/db";
import { NextApiRequest } from "next";

export const GET = async (req: Request) => {
  return new Response("<h1>cool boys</h1>", { status: 200 });
};
export const POST = async (req: Request) => {
  try {
    const { description } = await req.json();

    const problem = await db.problem.create({
      data: {
        title: "Sum of Array Elements",
        slug: "sum-of-array-elements",
        difficulty: "EASY",
        category: ["Array"],
      },
    });

    const problemdata = await db.problemData.create({
      data: {
        description: JSON.stringify(description),
        desscription: {},
        problemId: problem.id,
        testCasesInput: ["4\n1 2 3 4", "3\n1 3 3"],
        testCasesOutput: ["10", "7"],
      },
    });

    const testcases = await db.testCases.create({
      data: {
        problemId: problem.id,
        input: ["4\n1 2 3 4", "3\n1 3 3"],
        output: ["10", "7"],
      },
    });

    return new Response(JSON.stringify({ problem, problemdata, testcases }), {
      status: 201,
    });
  } catch (error: any) {
    // console.log(error);
    return new Response("something went wrong", { status: 500 });
  }
};
