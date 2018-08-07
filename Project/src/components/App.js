import React from "react";
import PropTypes from "prop-types";
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from '../base';

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  static propTypes={
    match:PropTypes.object
  }

  componentDidMount(){
    const { params }= this.props.match;
    //reinstate your localstoreage first
    const localStorageRef= localStorage.getItem(params.storeId);
    if(localStorageRef){
      this.setState({order: JSON.parse(localStorageRef)});
    }
    this.ref = base.syncState(`${params.storeId}/fishes`,{
      context:this,
      state:"fishes"
    });
  }

  componentWillUpdate(){
    localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
  }

  componentWillUnmount(){
    base.removeBinding(this.ref);
  }

  addFish = fish => {
    //1. Take copy of existing state
    const fishes = { ...this.state.fishes };

    //2. Add new fish to our state
    fishes[`fish${Date.now()}`] = fish;

    //3.Set new fishes obj to state
    this.setState({ fishes:fishes });
  };

  updateFish=(key,updatedFish)=>{
    //1.take copy of current fish
    const fishes={...this.state.fishes};
    //2.update the state
    fishes[key]=updatedFish;
    //3.set that to state
    this.setState({fishes});
  };

  deleteFish=(key)=>{
    //1.Take a copy of state
    const fishes = { ...this.state.fishes };
    //2.Remove the item
    fishes[key]=null;
    //3.update state
    this.setState({fishes});
  };

  addToOrder=key=>{
    //1. Take copy of existing state
    const order = { ...this.state.order };

    //2. Either add to order or update number in order
    order[key]=order[key]+1 || 1;

    //3.Call setState to update our state object
    this.setState({order});
  }

  removeFromOrder=key=>{
    //1. Take copy of existing state
    const order = { ...this.state.order };

    //2. remove that item from order
    delete order[key];

    //3.Call setState to update our state object
    this.setState({order});
  }

  loadSampleFishes=()=>{
    this.setState({ fishes: sampleFishes });
  }

  render() {
    return <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh seafood market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              //you dont have the access to key via props so instead u need another prop set to key to access it while calling the function(index)
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Inventory addFish={this.addFish} updateFish={this.updateFish} deleteFish={this.deleteFish} loadSampleFishes={this.loadSampleFishes} addToOrder={this.addToOrder} fishes={this.state.fishes} storeId={this.props.match.params.storeId}/>
        <Order fishes={this.state.fishes} order={this.state.order} removeFromOrder={this.removeFromOrder} />
      </div>;
  }
}

export default App;
