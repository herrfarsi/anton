import React, { Children } from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';

const ActiveLink = ({ router, children, ...props }) => {
  const child = Children.only(children);
  const { href } = props;

  const currentRoute = router.pathname !== href;

  return <Link {...props}>{React.cloneElement(child, { currentRoute })}</Link>;
};

export default withRouter(ActiveLink);
