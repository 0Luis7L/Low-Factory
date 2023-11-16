import { createServer, Model } from "miragejs"


createServer({
    models: {
        watches: Model,
    },

    seeds(server) {
        server.create("watch", { id: "1", name: "Casio: G - Shock", price: 200, description: "The Modest Casio is a watch designed to get you out of the house and into nature. This beauty is equipped with durablility, shock-resistant, and stylish!", imageUrl: "https://www.fratellowatches.com/cdn-cgi/image/anim=false/wp-content/uploads/2021/09/Casio-GM-2100.001.jpg", type: "simple" })
        server.create("watch", { id: "2", name: "Seiko: Presage", price: 1000, description: "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.", imageUrl: "https://monochrome-watches.com/wp-content/uploads/2022/12/Seiko-Sharp-Edged-Series-GMT-and-Date-Display-Limited-Editions-Black-and-Blue-SPB361J1-SPB363J1-11.jpg", type: "rugged" })
        server.create("watch", { id: "3", name: "Orient: Kamasu", price: 300, description: "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.", imageUrl: "https://www.watchuseek.com/attachments/7cf88104-ceac-43c3-b98f-1ad68d423bf6-jpeg.14334565/", type: "luxury" })
        server.create("watch", { id: "4", name: "Omega: SeaMaster", price: 10000, description: "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.", imageUrl: "https://www.bobswatches.com/rolex-blog/wp-content/uploads/2021/09/MicrosoftTeams-image-100-copy-2-1.jpg", type: "simple" })
        server.create("watch", { id: "5", name: "Longines: Flyback", price: 4500, description: "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.", imageUrl: "https://montenapodaily.com/wp-content/uploads/2023/03/Longines-Spirit-Flyback-7-1.jpg", type: "luxury" })
        server.create("watch", { id: "6", name: "Rolex: Yacht-Master", price: 12300, description: "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", imageUrl: "https://thewatchcollector.co.uk/cdn/shop/products/Blueyacht_1024x.jpg?v=1613161342", type: "rugged" })
        server.create("watch", { id: "7", name: "SevenFriday: Bauhaus Inspired", price: 1200, description: "The Modest Casio is a watch designed to get you out of the house and into nature. This beauty is equipped with durablility, shock-resistant, and stylish!", imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgttZbAYuwsO0E_0hpfGCEJaMr5DZj6qlCl8L7HeQnY87Mazi97okx4pz531-v6K0K6zoUPBrPjoU4LP2HC5dpFt8-IVw04qgOEsUyFilHMBcEGQFlEMOkCOgaPQmyRtQNQeMaSeJcBfU9QSTlSBs_sv7ojKsf4n9QRZTjIKtakHSiJuQK0YePsXw1S/s1280/SEVENFRIDAY%20T1:08%20Bauhaus%20Inspired_002.jpg", type: "simple" })
        server.create("watch", { id: "8", name: "Tissot: PRX", price: 725, description: "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.", imageUrl: "https://cdn.shopify.com/s/files/1/0014/5686/5316/files/660-440-tissot-prx-automatic-04.jpg?v=1629470370", type: "rugged" })
        server.create("watch", { id: "9", name: "Cartier: Santos", price: 300, description: "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.", imageUrl: "https://www.watchclub.com/upload/watches/originali/watch-club-14590-14590-wb.jpgwbwbwbwbwbwb2.jpg", type: "luxury" })
        server.create("watch", { id: "10", name: "Nomos: Orion", price: 2240, description: "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.", imageUrl: "https://www.minimatikal.com/wp-content/uploads/2017/06/nomos_orion_rose_33_325_ace_jewelers_amsterdam-4-1.jpg", type: "simple" })
        server.create("watch", { id: "11", name: "Tudor: Royal", price: 3750, description: "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.", imageUrl: "https://www.fratellowatches.com/cdn-cgi/image/anim=false/wp-content/uploads/2023/10/Tudor-Royal-41mm-Two-tone-4.jpg", type: "luxury" })
        server.create("watch", { id: "12", name: "Maen: Manhattan 37", price: 12300, description: "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", imageUrl: "https://www.fratellowatches.com/cdn-cgi/image/anim=false/wp-content/uploads/2022/02/IMG-3541.jpg", type: "rugged" })
        
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