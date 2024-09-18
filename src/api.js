import axios from 'axios'

const newsClient = axios.create({
    baseURL: "https://nc-news-api-ne3e.onrender.com/api"
}) 

export const getArticles = () => {
    return newsClient.get("/articles")
    .then(({data: {articles}}) => {
        return articles
    })
}
    

export const getArticle = (article_id) => {
    const url = `/articles/${article_id}`
    return newsClient.get(url)
    .then(({data: {article}}) => {
        return article
    })
    
}

export const getComments = (article_id) => {
    const url = `/articles/${article_id}/comments`
    return newsClient.get(url)
    .then(({data: {comments}}) => {
        return comments
    }) 
}

export const patchVotes = (article_id, vote) => {
    const url = `/articles/${article_id}`
    return newsClient.patch(url, vote)
    .then(({data}) => {
        return data
    })
}

export const postComment = (article_id, comment) => {
    const url = `/articles/${article_id}/comments`
    return newsClient.post(url, comment)
    .then(({data})=> {
        return data.comment
    })
}