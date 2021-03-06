import React, { Fragment } from "react";

type Props = {
  paragraphs: string;
  className?: string;
};

const TextBlock: React.FC<Props> = ({ paragraphs, className }) => (
  <p className={className}>
    {paragraphs.split("\n").map((paragraph, index, array) => {
      return (
        <Fragment key={index}>
          {paragraph}
          {array.length > index + 1 && <br />}
        </Fragment>
      );
    })}
  </p>
);

export default TextBlock;
