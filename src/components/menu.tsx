import Link from "next/link";

type MenuItem = {
  href: string;
  title: string;
  prefetch?: boolean;
};

const menuItems: MenuItem[] = [
  { href: "/", title: "Home" },
  {
    href: "/imc",
    title: "IMC",
  },
  {
    href: "/fetch-examples",
    title: "Fetch Examples",
  },
  {
    href: "/products",
    title: "Products",
  },
  {
    href: "/courses",
    title: "Courses",
  },
  {
    href: "/actions",
    title: "Actions",
  },
  {
    href: "/cookies",
    title: "Cookies",
  },
  {
    href: "/animals",
    title: "Animals",
  },
];

export default function Menu() {
  return (
    <ul className="menu">
      {menuItems.map((i) => (
        <li key={i.title}>
          <Link href={i.href} prefetch={i.prefetch}>
            {i.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
