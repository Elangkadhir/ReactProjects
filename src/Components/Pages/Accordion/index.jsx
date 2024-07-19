import React, { useState } from "react";
import data from "./Data"; // Make sure to use the default import here
import Layouts from "../../Layouts";

function Accordion() {
  const [selected, setSelected] = useState();
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (id) => {
    console.log(id);
    setSelected(id == selected ? null : id);
  };

  const handleMultiSelection = (id) => {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(id);
    console.log(findIndexOfCurrentId);

    if (findIndexOfCurrentId === -1) {
      cpyMultiple.push(id);
    } else {
      cpyMultiple.splice(findIndexOfCurrentId, 1);
    }
    setMultiple(cpyMultiple);
  };

  console.log("multiple", multiple);

 

  return (
    <Layouts>
      <div className="h-[500px] overflow-y-auto">
        <div className="mx-auto mb-10">
          <button
            className="bg-green-300 p-2 rounded-md"
            onClick={() => setEnableMultiSelect(!enableMultiSelect)}
          >
            Enable Multi selection
          </button>
        </div>
        <div>
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div
                className="mb-10 bg-white rounded-md p-4"
                key={dataItem.id}
                onClick={
                  enableMultiSelect
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                <div className="flex justify-between font-bold text-xl cursor-pointer">
                  <h3>{dataItem.question}</h3>
                  <span className="bg-red-400 rounded-[50%] p-2">+</span>
                </div>
                {enableMultiSelect ? (
                  multiple.indexOf(dataItem.id) !== -1 && (
                    <div>{dataItem.answer}</div>
                  )
                ) : selected === dataItem.id ? (
                  <div>{dataItem.answer}</div>
                ) : null}
                {selected === dataItem.id ? <div>{dataItem.answer}</div> : null}
              </div>
            ))
          ) : (
            <div>No data found</div>
          )}
        </div>
      </div>

      
    </Layouts>
  );
}

export default Accordion;
