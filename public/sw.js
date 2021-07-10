// const { urlencoded } = require("express")

const cacheName = "v1"
const cacheAssets = ["/" , "/index.html" , "/gameOver.html", "/about.html"]

self.addEventListener("install" , (e) => {
    e.waitUntil(caches.open(cacheName).then(cache => {
        cache.addAll(cacheAssets)
    }))
    this.skipWaiting()
})

self.addEventListener("fetch" , (e) => {
    e.respondWith(
        caches.match(e.request).then(response => {
            if(response){
                return response
            }else{
                return Response.redirect("http://localhost:3001/gameOver.html" , 301)
            }
        })
    )
})