var page = function(){
    var MyComponent = React.createClass({
        getDefaultProps: function(){
            return {
                'name': 'Json',
                'type': false
            }
        },
        getInitialState: function(){
            var firstSetName = this.props.name === 'Json'? '是': '不是';
            return{
                'firstSetName': firstSetName
            }
        },
        componentWillMount: function(){
            this.setState({'name': 'Jazz'});
        },
        componentDidMount: function(){
            //alert('渲染成功');
            //console.log(ReactDOM.findDOMNode(this.refs.h1));  //获取DOM节点
            console.log(this.refs.h1);  //获取DOM节点
        },
        render: function(){
            return (
                <div>
                    <h1 ref='h1'>姓名:{this.state.name}</h1>
                    <p>是不是初始化:{this.state.firstSetName}</p>
                </div>
                );
        }
    });

    ReactDOM.render(
        <MyComponent />,
        document.querySelector('.content1')
        );
};







//依据模块加载
document.querySelector('.demo-module') && page();