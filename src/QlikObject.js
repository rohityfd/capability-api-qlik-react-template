


class QlikObject extends React.Component {

	constructor(props){
		super(props);
		this.state = {};
	}

	componentDidMount(){
		var me = this;
		this.props.app.getObject(this.props.chartId, this.props.qlikId).then(model => me.setState({model:model}));
	}

	shouldComponentUpdate(nextProps, nextState){
		return this.props.qlikId != nextProps.qlikId;
	}

	componentDidUpdate(){
		var me = this;
		if(this.state.model){
			this.state.model.close();
		}
		this.props.app.getObject(this.props.chartId, this.props.qlikId).then(model => me.setState({model:model}));
	}

	componentWillUnmount(){
		if(this.state.model){
			this.state.model.close();
		}
	}

	render() {
	  return	<div style={{height:300, width:700}} id={this.props.chartId} />;
  }
}
