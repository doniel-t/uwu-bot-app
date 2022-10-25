import { NextPage } from 'next/types';

type ParamDescriptionProps = {
  paramName: string;
  description: string;
};

const ParamDescription: NextPage<ParamDescriptionProps> = ({
  paramName,
  description,
}) => {
  return (
    <div className="" data-tip="primary">
      <div className="-mt-2 mb-2 input-group">
        <span className="py-2">{paramName}: </span>
        <kbd className="kbd">{description}</kbd>
      </div>
    </div>
  );
};

export default ParamDescription;
