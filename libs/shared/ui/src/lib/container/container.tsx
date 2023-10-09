export interface ContainerProps {
  children: React.ReactNode;
}

export function Container(props: ContainerProps) {
  return <div className="p-10">{props.children}</div>;
}

export default Container;
