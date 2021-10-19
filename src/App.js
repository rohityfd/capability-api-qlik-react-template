'use strict';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { };
  }


  onMessage(state){
    this.setState(state);
  }

  render() {

  	var content = [];
  	if(this.state.app){
  		content = <QlikObject qlikId="58ee8efe-8954-4dc4-8d05-c57d1156ef74" chartId="58ee8efe-8954-4dc4-8d05-c57d1156ef74" app={this.state.app} />
  	}

    return (
      <div style={{backgroundColor: '#cccccc', width:'100%',height:'100%'}}>
      	{content}
         <QlikConnection callback={this.onMessage.bind(this)} appName="app" qvfName="66be14d6-4221-4319-8d3b-a65e8d82a8dd"/>
      </div>)
  }
}

