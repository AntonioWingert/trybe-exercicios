import { connect } from "react-redux";
import { actionCreator, clickCounter } from "./redux/actions";

function App({countState, dispatch, clickCount}) {

  const dispatchAll = (add = 1) => {
    dispatch(actionCreator(add));
    dispatch(clickCounter());
  };
  
  return (
    <div>
     <h1>Contador</h1>
     <h1>{countState}</h1>
     <button onClick={() => dispatchAll()}>Incrementa 1</button>
     <button onClick={() => dispatchAll(5)}>Incrementa 5</button>
     <h3>Número de clicks: {clickCount}</h3>
    </div>
  );
}

const mapStateToProps = (state) => ({
  countState: state.counterReducer.count,
  clickCount: state.counterReducer.clicks,
})

export default connect(mapStateToProps)(App);