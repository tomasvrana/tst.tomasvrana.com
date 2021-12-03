import React from 'react'
import Query from '../Queries/Duracel'
import Item from '../Item'

export default () => (
  <Query
    render={({ frontmatter }) => (
      <Item 
        content={frontmatter.content} 
      />        
    )}
  />
)