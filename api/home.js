import fly from "@/utils/request.js"

export default getBanners = () => fly.get('/home/swiperdata')