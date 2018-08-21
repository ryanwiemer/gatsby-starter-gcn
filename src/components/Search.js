import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import qs from 'qs'
import { Index } from 'elasticlunr'

const SearchBar = styled.input`
  width: 100%;
  text-align: center;
  line-height: 1.6;

  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    width: 30vw;
    font-size: 1rem;
    background: #2d2d2d;
    color: white;
    border: 1px solid ${props => props.theme.colors.secondary};
    border-radius: 4px;
    position: absolute;
    top: 1rem;
    margin-left: 35vw;
  }
`

const getSearch = ({ location }) => {
  if (!location) return ''
  if (!location.search) return ''

  const query = location.search.substring(1)
  const parsed = qs.parse(query)
  if (!parsed.q) return ''
  return parsed.q
}

export default class Search extends Component {
  constructor(props, context) {
    super(props, context)

    this.updateQuery = evt => {
      const text = evt.target.value
      const newQuery = qs.stringify({ q: text }, { format: 'RFC1738' })
      const results = this.getHits(text)

      this.setState(s => {
        return {
          ...s,
          results,
          query: text,
        }
      })
      this.props.onSearch(text, results)
    }

    const query = getSearch(props)
    this.state = {
      query,
      results: this.getHits(query),
    }
  }

  createIndex() {
    this.index = Index.load(this.props.data.index)
  }

  getHits(query) {
    if (!query) return []

    if (!this.index) this.createIndex()
    const results = this.index.search(query)
    return results.map(({ ref }) => this.index.documentStore.getDoc(ref))
  }

  render() {
    const { query, results } = this.state

    console.log(results)

    return (
      <div role="search">
        <SearchBar
          onChange={this.updateQuery}
          placeholder="search posts"
          type="search"
          value={query}
        />
      </div>
    )
  }
}

Search.propTypes = {
  data: PropTypes.shape({
    index: PropTypes.object.isRequired,
  }).isRequired,
  onSearch: PropTypes.func.isRequired,
}
