import { withRouter } from 'next/router'
import Link from 'next/link'
import React, { Children } from 'react'

const ActiveLink = ({ router, children, ...props }) => {
  const child = Children.only(children)

  const currentRoute = router.pathname === props.href ? false : true;

  return <Link {...props}>{React.cloneElement(child, { currentRoute })}</Link>
}

export default withRouter(ActiveLink);