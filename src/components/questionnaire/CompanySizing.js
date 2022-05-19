import React from "react";

import CompanySize from "./questions/company_size";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";

export default function CompanySizing({ control }) {
  const mediaQuery = window.matchMedia("(max-width: 680px)");
  let x = mediaQuery.matches ? "80%" : "40%";
  return (
    <div>
      <div className="q-question-title">Size of Your Organization</div>
      {CompanySize.map((question) => {
        return (
          <div>
            <div className="q-question">{question.question}</div>
            <Controller
              name={question.question}
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  sx={{ mt: 2, minWidth: 120, width: x }}
                  id="outlined-basic"
                  label="answer"
                  variant="outlined"
                  size="small"
                />
              )}
            />
          </div>
        );
      })}
    </div>
  );
}
