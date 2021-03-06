import * as React from "react";
import styled from "styled-components/macro";
import * as s from "../../styles";

const Input = styled.input((props: { error: boolean }) => ({
  width: "100%",

  ":focus": {
    border: `${s.size(1)} solid ${s.colors.blue} !important`,
  },

  ...(props.error && {
    border: `${s.size(1)} solid ${s.colors.red} !important`,
    boxShadow: `0 0 0 ${s.size(1)} ${s.colors.red} !important`,

    ":focus": {
      border: `${s.size(1)} solid ${s.colors.red} !important`,
    },
  }),
}));

export const InputNumber: React.FC<{
  id?: string;
  value: number;
  name: string;
  error?: string;
  min: number;
  max: number;
  step: number;
  onChange: React.InputHTMLAttributes<HTMLInputElement>["onChange"];
}> = ({ error, ...restProps }) => (
  <Input
    //
    type="number"
    error={Boolean(error)}
    {...restProps}
  />
);
