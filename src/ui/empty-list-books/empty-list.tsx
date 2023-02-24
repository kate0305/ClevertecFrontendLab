import classes from './empty-list.module.css';

type EmptyListProps = {
  text: string;
  dataTestId: string;
};

export const EmptyList = ({ text, dataTestId }: EmptyListProps) => (
  <h1 className={classes.title} data-test-id={dataTestId}>
    {text}
  </h1>
);
