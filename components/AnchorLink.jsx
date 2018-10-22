import { withRouter } from 'next/router'
import Link from 'next/link'
import React, { Children } from 'react'

const AnchorLink = ({ router, children, ...props }) => {
  const child = Children.only(children)

  const currentRoute = router.query.projekt === props.href.query.projekt ? false : true;

  return <Link {...props}>{React.cloneElement(child, { currentRoute })}</Link>
}

export default withRouter(AnchorLink);