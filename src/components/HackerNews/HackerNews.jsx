import { useSelector, useDispatch } from "react-redux"
import { requestArticles } from "../../reducers/hackerNewsReducer.js"
import { useEffect, useRef, useMemo, useCallback, useState } from "react"
import Card from "../shared/Card/Card.jsx"
import Loading from "../shared/Loading/Loading.jsx"
import useWindowDimensions from "../../hooks/useWindowDimensions.js"

export default function HackerNews() {
    const articles = useSelector(state => state.hackerNews.articles)
    const loading = useSelector(state => state.hackerNews.loading)
    const dispatch = useDispatch()

    const { width, height } = useWindowDimensions()

    const [filter, setFilter] = useState("")

    const prevArticlesCountRef = useRef(articles.length)

    useEffect(() => {
        dispatch(requestArticles)

        console.log(
            `Previous number of articles: ${prevArticlesCountRef.current}`
        )

        prevArticlesCountRef.current = articles.length
    }, [])

    const filteredArticles = useMemo(() => {
        return articles.filter(article =>
            article.title.toLowerCase().includes(filter.toLowerCase())
        )
    }, [articles, filter])

    const articleCards = useMemo(() => {
        return filteredArticles.map(article => (
            <Card key={article.id} article={article} />
        ))
    }, [filteredArticles])

    const handleFilterChange = useCallback(event => {
        setFilter(event.target.value)
    }, [])

    return (
        <div className="news-container">
            <img className="logo" src="../../assets/hackerNews.jpeg" alt="" />

            <div style={{color: 'black'}}>
                <p>Current window width: {width}px</p>
                <p>Current window height: {height}px</p>
            </div>

            <input
                type="text"
                placeholder="Filter articles by title..."
                value={filter}
                onChange={handleFilterChange}
            />

            {loading ? <Loading /> : <div>{articleCards}</div>}
        </div>
    )
}
