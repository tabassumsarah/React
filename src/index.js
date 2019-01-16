import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

//first set up project
// user create-react -app
// remove all from src
// create index.js
// test hi
// go to jsx
// npm start

// we are building weather app
// print its summer or winter
// lets first to functional component
// print lat and long in your page
// create state
//use constructor
// try using component did moubt


class App extends React.Component{
     state={ lat:null, err:''}

    componentDidMount(){
         window.navigator.geolocation.getCurrentPosition(
             (position)=>
             {
                 console.log(position)
                 this.setState({lat: position.coords.latitude})
             },
             (err) => this.setState({err: err.message})

         );
     }

    renderContent(){
        if(this.state.err && !this.state.lat){
            return (<div> err: {this.state.err} </div>);
        }

        if( this.state.lat && !this.state.err){
            return <SeasonDisplay lat={this.state}/>
        }

        return <div>'Loading'</div>
    }

    render(){
       return <div> {this.renderContent()}</div>;
    }
}


ReactDom.render(<App />, document.querySelector('#root'));
