import { Card } from "./Card"



export default function ListCard() {
    const products = [
        {
            id: 1,
            title: 'PC Portable Gamer HP VICTUS',
            price: '7490 DH',
            thumbnail: 'https://www.asus-store.ma/cdn/shop/files/PC-PORTABLE-GAMING-ASUS-ROG-STRIX-17-RTX-3060-Setup-Game_jpg_300x300.webp?v=1686312691'
        },
        {
            id: 2,
            title: 'PC Portable Gamer HP VICTUS',
            price: '2190 DH',
            thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPUf7KxfWlxWZ0X1tfAdeLFS27Qc8ON6JcOhYpFbDs1fiacqtvsLt8wDCn&s=10'
        },
        {
            id: 3,
            title: 'Pc Portable Chromebook Acer',
            price: '3640 DH',
            thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9CLnebshM_j4Tqo3kYuyPV44KaeMHAvyz-zR6NVEdfDRVqrTp2wX-Cwg_&s=10'
        },
        {
            id: 4,
            title: 'PC Portable - HUAWEI',
            price: '1270 DH',
            thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStmZp-EA3WQ26fo-uDzcZO6AmTcOjswKyWvVQLUtxZ1w&s=10'
        },
    ];
    return (
        <>
            <div className="p-4">
                <h3 className="">Laptops</h3>
                <div className="mb-3" style={{ backgroundColor: 'red', width: '8%', height: '1px' }}></div>
                <div className="d-flex gap-3">
                    {
                        products.map((product) => <Card key={product.id} title={product.title} price={product.price} thumbnail={product.thumbnail} />)}
                </div>
            </div>
        </>
    )
}
