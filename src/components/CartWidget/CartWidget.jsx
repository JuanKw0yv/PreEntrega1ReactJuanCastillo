export default function CartWidget({amount}) {
  return (
    <a className="nav-link">
        Carrito <span className="badge text-bg-secondary">{amount}</span>
    </a>
  )
}
