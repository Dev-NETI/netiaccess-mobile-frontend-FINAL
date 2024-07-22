import React, { useState } from "react";
import { useTrainee } from "@/hooks/api/trainee";
import ResponseView from "@/components/profile/password/Response";
import { RegisterContext } from "@/stores/RegisterContext";
import { useContext } from "react";
import DataPrivacy from "@/components/DataPrivacy";
import Button from "@/components/Button";

function ConfirmEnteredDetailForm() {
  const [httpResponse, setHttpResponse] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const { store: storeTrainee } = useTrainee();
  const { traineeData } = useContext(RegisterContext);

  const createTrainee = () => {
    const response = storeTrainee(traineeData);
    setHttpResponse(response);
  };

  let requestMessage = httpResponse
    ? "Account created successfully!"
    : "Creating account failed!";
  let ui =
    httpResponse !== null ? (
      <ResponseView
        response={httpResponse}
        successLabel={requestMessage}
        errorLabel={requestMessage}
        defaultRoute="/login"
        defaultButtonLabel="Go to login"
      />
    ) : (
      <div className="flex flex-col gap-1">
        <DataPrivacy />
        <div className="flex items-center px-4 mx-auto">
          <input
            checked={isChecked}
            id="checked-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded 
                             focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 
                             focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={() => setIsChecked(!isChecked)}
          />
          <label
            htmlFor="checked-checkbox"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I Accept
          </label>
        </div>
        <div className="flex items-center p-2 mx-auto">
          <Button
            className={`${!isChecked && "bg-gray-400"} w-72 `}
            disabled={!isChecked}
            onClick={() => createTrainee()}
          >
            Register
          </Button>
        </div>
      </div>
    );

  return ui;
}

export default ConfirmEnteredDetailForm;
