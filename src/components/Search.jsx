import { useState } from "react"

export const Search = () => {
  const [value, setValue] = useState('')
  const url = "/results/"

  return (
    <div className="search-hero">
      <h1 className="search-hero__title">
        Find your next <span>favorite movie</span>
      </h1>
      <p className="search-hero__subtitle">
        Search thousands of titles and discover synopses, ratings, and trailers
      </p>
      <form action={url + value} method="POST" className="search-hero__form">
        <div className="search-hero__input-wrap">
          <svg className="search-hero__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            type="search"
            className="search-hero__input"
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="Search movie..."
            autoComplete="off"
          />
          <button type="submit" className="search-hero__btn">Search</button>
        </div>
      </form>
    </div>
  )
}
