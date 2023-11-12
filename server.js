import { createServer, Model } from "miragejs"


createServer({
    models: {
        watches: Model,
    },

    seeds(server) {
        server.create("watch", { id: "1", name: "Casio: G - Shock", price: 200, description: "The Modest Casio is a watch designed to get you out of the house and into nature. This beauty is equipped with durablility, shock-resistant, and stylish!", imageUrl: "../assets/images/Casio-GM-2100.jpg", type: "simple" })
        server.create("watch", { id: "2", name: "Seiko: Presage", price: 1000, description: "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.", imageUrl: "../assets/images/Seiko-SPB363.webp", type: "rugged" })
        server.create("watch", { id: "3", name: "Orient: Kamasu", price: 300, description: "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.", imageUrl: "../assets/images/Kamasu.jpeg", type: "luxury" })
        server.create("watch", { id: "4", name: "Omega: SeaMaster", price: 10000, description: "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.", imageUrl: "../assets/images/Seamaster.png", type: "simple" })
        server.create("watch", { id: "5", name: "Longines: Flyback", price: 4500, description: "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.", imageUrl: "../assets/images/Longines-Spirit-Flyback.webp", type: "luxury" })
        server.create("watch", { id: "6", name: "Rolex: Yacht-Master", price: 12300, description: "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", imageUrl: "../assets/images/Blueyacht.webp", type: "rugged" })
    },

    routes() {
        this.namespace = "api"

        this.get("/watches", (schema, request) => {
            return schema.watches.all()
        })
        
        this.get("/watches/:id", (schema, request) => {
            const id = request.params.id
            return schema.watches.find(id)
        })
    }
})