import React from "react";

function Product() {
    const products = [
        { id: "P001", nama: "Acer", harga: 2000000, deskripsi: "Harga Mantap", foto:"img/acer.jpeg"},
        { id: "P002", nama: "Lenovo", harga: 3000000,deskripsi: "Barang Terjamin", foto:"img/lenovo.jpeg"},
        { id: "P003", nama: "Asus", harga: 4000000, deskripsi:"Spek Gahar",foto:"img/asus.jpeg"},
    ];
    return(
        <table>
            <thead>
                <tr>
                    <th>Foto</th>
                    <th>ID</th>
                    <th>Nama</th>
                    <th>Harga</th>
                    <th>deskripsi</th>
                </tr>
            </thead>
            <tbody>
                {products.length > 0 && products.map((product) =>{
                return(
                <tr key={product.id}>
                    <td>
                       <img src={product.foto} alt={product.nama} width="100" />
                    </td>
                    <td>
                        {product.id}
                    </td>
                    <td>
                        {product.nama}
                    </td>
                    <td>
                        {product.harga}
                    </td>
                    <td>
                        {product.deskripsi}
                    </td>
                </tr>
                );
                })}
            </tbody>
        </table>
    );
}

export default Product;