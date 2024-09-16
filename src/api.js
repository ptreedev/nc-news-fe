import axios from 'axios'

const newsClient = axios.create({
    baseURL: "https://nc-news-api-ne3e.onrender.com/api"
}) 

const getArticles = () => {
    return newsClient.get("/articles")
    .then((response) => {
        return response
    })
    .catch((err) => {
        console.log(err)
    })
}

export default getArticles