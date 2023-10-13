/* eslint-disable-next-line */
export interface HeaderProps {
  children: React.ReactNode;
}

export function Header(props: HeaderProps) {
  return <h1 className="text-xl font-bold">{props.children}</h1>;
}

export default Header;
