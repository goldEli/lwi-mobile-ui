import { Meta } from "@storybook/react/types-6-0";

export type TArgTypes<T> = {
  [key in keyof T]?: {
    description?: string;
    contorl?: "color" | "select" | { type: "select" };
    options?: string[];
  };
};

export type TMeta<T> = Omit<Meta, "argTypes"> & {
  argTypes: TArgTypes<T>;
};
