

export default function Header() {
    return (
        <>
            <div className="d-flex ">
                <div class="nav-overflow w-100" data-bs-toggle="nav-overflow">
                    <ul class="nav nav-underline justify-content-center">
                        <li class="nav-item">
                            <a href=""><img src="../logo192.png" style={{ width: '50px', height: "50px" }} alt="" /></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="www.google.com">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="www.google.com">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="www.google.com">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="www.google.com">FAQs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="www.google.com">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="www.google.com">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}