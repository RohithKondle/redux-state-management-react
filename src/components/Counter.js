import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';

const Counter = () => {
  
  const counter = useSelector(state => state.counter.counter)
  const show = useSelector(state => state.counter.show)

  const dispatch = useDispatch()

  const incrementClicked = () => {
    dispatch(counterActions.increment())
  }

  const decrementClicked = () => {
    dispatch(counterActions.decrement())
  }

  const increaseHandler = () => {
    dispatch(counterActions.increase(5))
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
   };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementClicked}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementClicked}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {

//   incrementClicked () {
//       this.props.increment()
//   }

//   decrementClicked() {
//     this.props.decrement()
//   }

//   toggleCounterHandler() {

//   }

//   render(){
//       return  (
//         <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementClicked.bind(this)}>Increment</button>
//           <button onClick={this.decrementClicked.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>

//       );
//   }
// }

// const mapStateToProps = (state) => {
//   return{
//       counter : state.counter
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return{
//       increment : () => dispatch({type: 'increment'}),
//       decrement : () => dispatch({type: 'decrement'})
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Counter);
