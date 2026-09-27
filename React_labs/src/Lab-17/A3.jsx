import React from 'react'

function A3() {
    const products = [
        {
            image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef",
            name: "Laptop",
            price: 55000,
            brand: "Dell",
            category: "Laptop",
            storage: "512GB SSD",
            ram: "16GB",
            display:"16 inch",
            instock: "Yes",
            description: "Powerful and lightweight laptop for work and study",
        },

        {
            image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
            name: "Smartphone",
            price: 25000,
            brand: "Samsung",
            category: "Mobile",
            storage: "128GB",
            ram: "8GB",
            display: "6.5 inch",
            instock: "Yes",
            description: "Modern smartphone with a high-resolution display",
        },

        {
            image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1",
            name: "Headphones",
            price: 3000,
            brand: "Sony",
            category: "Audio",
            storage: "0 GB",
            ram: "0 GB",
            display: "0 inch",
            connectivity: "Bluetooth",
            battery: "30 Hours",
            type: "Wireless",
            instock: "No",
            description: "Wireless headphones with clear sound quality",
        },

        {
            image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed",
            name: "Tablet",
            price: 18000,
            brand: "Lenovo",
            category: "Tablet",
            storage: "128GB",
            ram: "6GB",
            display: "10.1 inch",
            instock: "Yes",
            description: "Portable tablet with a large touchscreen display",
        },
    ];
    return (
        <div className='container'>
            <div className="row">
                {products.length > 0 ?
                    (
                        products.map((s) => 
                            <div className="col col-md-3 ">
                                <div className="card">
                                    <img src={s.image} class="card-img-top" alt="" height={300}/>
                                    <div className="card-body">
                                        <h5 className="card-title">{s.name}</h5>
                                        <p className="card-text">Price={s.price}</p>
                                        <p className="card-text">Brand={s.brand}</p>
                                        <p className="card-text">Catogory={s.category}</p>
                                        <p className="card-text">Storage={s.storage}</p>
                                        <p className="card-text">Ram={s.ram}</p>
                                        <p className="card-text">Display={s.display}</p>
                                        <p className="card-text">Instock={s.instock}</p>
                                        <p className="card-text">Description={s.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    ) : (<h1>object is empty....</h1>)
                }
            </div>
        </div>
    )
}
export default A3