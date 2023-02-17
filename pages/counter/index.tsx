import { useState } from "react";
import { Button } from "react-bootstrap";
import styles from "../../styles/counter.module.scss";
import CounterItem from "../../components/CounterItem";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  return (
    <div className={styles.container}>
      <CounterItem item={{number: count}} />
      <div>
        <Button variant="primary" onClick={handleIncrement}>
          Increment
        </Button>
        <Button variant="danger" onClick={handleDecrement}>
          Decrement
        </Button>
      </div>
    </div>
  );
}
