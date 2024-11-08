import CartWidget from "../CartWidget/CartWidget";

export default function NavBar () {
    return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Home</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">Procesadores</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Motherboards</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Tarjetas de Video</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Fuente de Poder</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Memorias Ram</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Almacenamiento</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Gabinetes</a>
        </li>
        <li className="nav-item">
          <CartWidget amount={9} />
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}
