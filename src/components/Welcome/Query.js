import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { LanguageConsumer } from '../../state'

const Query = ({ render }) => (
  <LanguageConsumer>
    {({ lang }) => (
      <StaticQuery
        query={graphql`
          query{
            allFile(filter:{relativePath:{glob:"content/pages/welcome/*.md"}}) {
              nodes{
                relativePath,
                childMarkdownRemark{
                  frontmatter {
                    content {
                      title
                      subtitle
                      desc
                      member
                      contact
                      href
                      experience {
                        title
                        items {
                          title
                          desc
                        }
                      }
                      exhibitions {
                        title
                        items {
                          title
                          desc
                        }
                      }
                      websites {
                        title
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        `}
        render={({ allFile }) => {
          const content = allFile.nodes.filter(node => node.relativePath === `content/pages/welcome/${lang}.md`).shift()
          if (!content) throw new Error(`No content found for home page using language ${lang}`)
          return render(content.childMarkdownRemark)
        }}
      />
    )}
  </LanguageConsumer>
)

Query.propTypes = {
  render: PropTypes.func.isRequired
}

export default Query
