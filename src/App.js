import { useSelector , useDispatch } from "react-redux";
import { Incre, Decre, Squ } from "./Mkdir/Actions/index"
function App() {
  const mystate = useSelector((state) => state.calculator);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className='Counter'>
        <button onClick={()=> dispatch(Incre())}>+</button>
        <input name="quantity" type="text" value={mystate}/>
        <button onClick={()=> dispatch(Decre())}>-</button>
        <button onClick={()=> dispatch(Squ())}>*</button>
      </div>
    </div>
  );
}

export default App;
