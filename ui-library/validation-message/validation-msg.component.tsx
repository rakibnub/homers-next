import { ErrorMessage } from 'formik';

interface Props {
  name: string;
}

const ValidationMessage: React.FC<Props> = ({ name }) => {
  return (
    <div className="validation-error">
      <ErrorMessage name={name} />
    </div>
  );
};
export default ValidationMessage;
