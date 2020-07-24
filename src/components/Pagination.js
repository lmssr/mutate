import React from 'react'
import { PaginationWrapper, PaginationElement } from '../elements'

export const Pagination = ({ isFirst, isLast, prevPage, nextPage }) => {
  return (
    <PaginationWrapper isFirst={isFirst} isLast={isLast}>
      <PaginationElement to={prevPage} className="previous">Previous Page</PaginationElement>
      <PaginationElement to={nextPage} className="next">Next Page</PaginationElement>
    </PaginationWrapper>
    )
}
