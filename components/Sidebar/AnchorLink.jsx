import React, { Children } from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';

const AnchorLink = ({ router, children, ...props }) => {
  const child = Children.only(children);
  const {
    href: {
      query: { projekt },
    },
  } = props;

  const currentRoute = router.query.projekt !== projekt;

  return <Link {...props}>{React.cloneElement(child, { currentRoute })}</Link>;
};

export default withRouter(AnchorLink);
