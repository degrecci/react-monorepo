import styles from './orders-list.module.css';

/* eslint-disable-next-line */
export interface OrdersListProps {}

export function OrdersList(props: OrdersListProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to OrdersList!</h1>
    </div>
  );
}

export default OrdersList;
