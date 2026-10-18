

export function Card({ thumbnail, title, price }) {
    return (
        <>
            <div className="col justify-content-between gap-2">
                <div className="card shadow-sm">
                    <img className="card-img-top"
                        src={thumbnail} alt="" />
                    <div className="card-body">
                        <p className="card-title">{title}</p>
                        <p className="card-text">{price}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">Ajouter au panier</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}