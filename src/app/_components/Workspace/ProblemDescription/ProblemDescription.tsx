import { Problem, ProblemData } from "@prisma/client";
import DOMPurify from "dompurify";
interface Props {
  problem: Problem;
  problemData: ProblemData;
}
interface Description {
  text: string;
  examples: string[][];
  constrains: [string];
}
const ProblemDescription = ({ problem, problemData }: Props) => {
  const description: Description = JSON.parse(problemData.description);
  return (
    <div className="bg-dark-layer-1">
      {/* TAB */}
      <div className="flex h-11 w-full items-center pt-2 bg-dark-layer-2 text-white overflow-x-hidden">
        <div
          className={
            "bg-dark-layer-1 rounded-t-[5px] px-5 py-[10px] text-xs cursor-pointer"
          }
        >
          Description
        </div>
      </div>

      <div className="flex px-0 py-4 h-[calc(100vh-94px)] overflow-y-auto">
        <div className="px-5">
          {/* Problem heading */}
          <div className="w-full">
            <div className="flex space-x-4">
              <div className="flex-1 mr-2 text-lg text-white font-medium">
                {problem.title}
              </div>
            </div>
            <div className="text-white text-sm">
              <div>
                <p
                  style={{ fontFamily: "Segoe UI" }}
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(description.text),
                  }}
                />
              </div>
            </div>
            <div className="mt-4">
              {description.examples.map((eg, i) => (
                <div key={i}>
                  <p className="font-medium text-white">Example {i + 1}</p>
                  <div className="example-card">
                    <pre>
                      <strong className="text-white">Input: </strong>
                      {eg[0]} <br />
                      <strong className="text-white">Output: </strong>
                      {eg[1]} <br />
                      <strong className="text-white">Explanation: </strong>
                      {eg[2]}
                    </pre>
                  </div>
                </div>
              ))}
            </div>
            <div className="my-8 pb-4">
              <div className="text-white text-sm font-medium">Constraints:</div>
              <ul className="text-white ml-5 list-disc">
                <div>
                  {description.constrains.map((c, i) => (
                    <li className="mt-2" key={i}>
                      <code>{c}</code>
                    </li>
                  ))}
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProblemDescription;
/**
 * 
function encode() {
	var obj = document.getElementById('dencoder');
	var unencoded = obj.value;
	obj.value = encodeURIComponent(unencoded).replace(/'/g,"%27").replace(/"/g,"%22");	
}
function decode() {
	var obj = document.getElementById('dencoder');
	var encoded = obj.value;
	obj.value = decodeURIComponent(encoded.replace(/\+/g,  " "));
}
*/
