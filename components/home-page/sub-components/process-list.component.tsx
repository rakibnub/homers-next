import {FC} from 'react';
import {P,H4} from '@lib/index';
import styles from './process.module.scss';

export type ProcessListComponent = {
  serial?: string;
  title?: string;
  description?: string;
};

const ProcessLists: FC<ProcessListComponent> = ({
  serial,
  title,
  description,
}) => {
  return (
    <>
      <div className={`${styles.process_box}`}>
        <span>{serial}</span>
        <H4 text={title}/>
        <P text={description}/>
      </div>
    </>
  );
};

export default ProcessLists;
