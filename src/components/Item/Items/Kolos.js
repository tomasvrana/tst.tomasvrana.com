import React from 'react'
import Query from '../Queries/Kolos'
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
