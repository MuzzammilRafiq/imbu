import { db } from "@/lib/db";
import Table from "../_components/Table";

const Problems = async () => {
  let data;
  try {
    data = await db.problem.findMany();
  } catch (error) {}
  return <Table data={data} />;
};
export default Problems;
