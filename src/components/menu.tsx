import Link from "next/link";

export default function Menu() {
	return (
		<ul className="menu">
			<li><Link href="/">Home</Link></li>
			<li><Link href="/about" prefetch>About</Link></li>
			<li><Link href="/contact">Contact</Link></li>
			<li><Link href="/imc">IMC</Link></li>
			<li><Link href="/fetch-examples">Fetch Examples</Link></li>
			<li><Link href="/products">Products</Link></li>
		</ul>
	)
}