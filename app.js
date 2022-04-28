const app = Vue.createApp({
    // template:'<h2> I am the template</h2>'
    data() {
        return {
            url: "https://www.google.com",
            showBook: true,
            books: [
                { title: 'The u46y Empire', name: 'Dep Trai', sex: 'man', age: 22, x: 0, y: 0, url: 'assets/1.jpeg', isFav: true },
                { title: 'u46y', name: '3123123', sex: 'man', age: 24, x: 0, y: 0, url: 'assets/1.jpeg', isFav: false },
                { title: 'The Empire', name: '214124879', sex: 'man', age: 21, x: 0, y: 0, url: 'assets/1.jpeg', isFav: true },
                { title: 'u46y Empire', name: '1294712', sex: 'man', age: 27, x: 0, y: 0, url: 'assets/1.jpeg', isFav: false },
            ]
        }
    },
    methods: {
        changeTitle(newTitle) {
            this.title = newTitle
            console.log("you click here")
        },
        showBookFun() {
            this.showBook = !this.showBook
        },
        handleEvent(e, data) {
            console.log(e)
            if (data) {
                console.log(data)
            }
        },
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
            console.log(e)
        },
        clickFav(book) {
            book.isFav = !book.isFav
        }
    },
    computed: {
        filterBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')