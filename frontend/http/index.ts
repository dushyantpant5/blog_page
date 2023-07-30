import axios from "axios";

const instance = axios.create({
    baseURL:process.env.API_BASE_URL,
    headers:{
        Authorization: `Bearer ${process.env.BACKEND_API_KEY}`
    }
})

//Categories

export const fetchCategories = async () => instance.get('/api/categories')

// Articles

export const fetchArticles = async (queryString:string) => instance.get(`/api/articles?${queryString}`)

export const fetchArticleBySlug = async (queryString:string) => instance.get(`/api/articles?${queryString}`)
