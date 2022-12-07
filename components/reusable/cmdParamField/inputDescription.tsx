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
    <div className="opacity-60" data-tip="primary">
      <div className="input-group -mt-2 mb-2">
        <span className="py-2">{paramName}: </span>
        <kbd className="kbd">{description}</kbd>
      </div>
    </div>
  );
};

export default ParamDescription;
