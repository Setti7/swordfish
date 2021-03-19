import React from "react";
import { Button } from "../Button";
import { Spinner } from "../Spinner";

export interface HeroProps {
  title?: string;
}

export const Hero = ({ title = "A simple Tailiwind template" }: HeroProps) => {
  return (
    <>
      <div className="flex">
        <div className="flex flex-col">
          <Button className="m-2" size="big" style="accent" disabled={false}>
            Sign in
          </Button>
          <Button
            className="m-2 flex justify-center"
            size="big"
            style="primary"
            disabled={false}
          >
            <Spinner />
          </Button>
        </div>

        <Button className="m-2" size="big" style="accent" disabled={false}>
          Sign in
        </Button>
      </div>
      <div className="flex">
        <Button
          className="m-2 flex-grow flex justify-end"
          size="big"
          style="primary"
          disabled={true}
        >
          Sign in
        </Button>{" "}
        <Button className="m-2" size="big" style="accent" disabled={false}>
          Sign in
        </Button>
      </div>
    </>
  );
};
