import React from 'react';
import PropTypes from "prop-types";
import {getFunName} from '../helpers';


class StorePicker extends React.Component{
    static propTypes = {
        history:PropTypes.object,
    }
    myInput=React.createRef();
    // constructor(){
    //     super();
    //     this.goToStore=this.goToStore.bind(this); // too many lines of code
    // }
    goToStore=(event)=>{
        //1.Stop form from submitting
        event.preventDefault();
        //2. get text from input
        const storeName=this.myInput.value.value;
        //3. Change the url to /store/input
        this.props.history.push(`/store/${storeName}`)
    }
    render(){
        return (
        <form action="" className="store-selector" onSubmit={this.goToStore}>
        <h1>Please enter a Store!</h1>
        <input type="text" ref={this.myInput} required placeholder="Store Name" defaultValue={getFunName()}/>
        <button type="submit">Visit Store</button>
        </form>
        )
    }
}

export default StorePicker;