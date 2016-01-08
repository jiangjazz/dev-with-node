//组件
var HelloMessage = React.createClass({
    getDefaultProps: function(){
        return {
            content: 'Nice to meet you'
        }
    },
    propTypes: {
        title: React.PropTypes.string.isRequired
    },
    render: function(){
        return <div>
        <h1>{this.props.title}</h1>
        <div>{this.props.content}</div>
        </div>;
    }
});

var MyComponent = React.createClass({
    handleClick: function(){
        var value = this.refs.myTextInp.value;
        console.log(value);
    },
    handleCut: function(){
        var value = this.refs.myTextInp.value;
        console.log('cut');
    },
    handleCopy: function(){
        var value = this.refs.myTextInp.value;
        console.log('copy');
    },
    handlePaste: function(){
        var value = this.refs.myTextInp.value;
        console.log('paste');
    },
    render: function(){
        return (
            <div>
                <input type = "text" ref = "myTextInp" onCut = {this.handleCut} onPaste = {this.handlePaste} onCopy = {this.handleCopy}/>
                <input type = "button" value = "输出input的值" onClick = {this.handleClick} />
            </div>
            );
    }
});

//参数
var data = 'Welcome!';

//执行
ReactDOM.render(
        <HelloMessage title={data} />,
        document.querySelector('.content1')
      );

ReactDOM.render(
        <MyComponent />,
        document.querySelector('.content2')
      );
