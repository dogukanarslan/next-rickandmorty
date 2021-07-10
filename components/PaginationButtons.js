import Button from './Button';

const PaginationButtons = (props) => {
  const { data, info } = props;

  return (
    <div className="d-flex justify-content-between">
      <Button label="Previous" />
      <span>
        {data.length} / {info.count}
      </span>
      <Button label="Next" />
    </div>
  );
};

export default PaginationButtons;
