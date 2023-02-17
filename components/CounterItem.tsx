import * as React from 'react'
import { CounterData } from "../interfaces";

type Props = {
  item: CounterData;
};

const CounterItem = ({ item }: Props) => <h1>Counter: {item.number}</h1>;

export default CounterItem;
