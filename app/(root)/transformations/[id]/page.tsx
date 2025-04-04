import React from 'react'

const TransformationsPage = () => {
  return (
    <div>TransformationsPage</div>
  )
}

export default TransformationsPage

// each transformations will be different, it won't happen on local host:3000/transformations -> that's not gonna be the case
// rather each transformations will have its on id, this gonna look something like this
// localhost:3000/transformations/[id] and to implement this we need to use concepts known as dynamic routes within nextjs
// ypu basically need to wrap your folders name in square brackets, instead of paranthesis this time

/* Dynamic segments are passed as params prop to layout, page, route and generateMetaData */