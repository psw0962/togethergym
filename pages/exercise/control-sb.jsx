import ControlComponentSB from '@/component/common/control-sb';
import withAuth from '@/hoc/withAuth';

const ControlSB = () => {
  return (
    <>
      <ControlComponentSB />
    </>
  );
};

export default withAuth(ControlSB);
