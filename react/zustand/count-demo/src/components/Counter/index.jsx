import { useCounterStore } from '../../store/count'
// 来自store

const Counter = () => {
    const {
        count,
        increment,
        decrement,
    } = useCounterStore()

  return (
      <>
          Counter {count}
      </>
  )
}

export default Counter