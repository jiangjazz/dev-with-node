//demo4
var page = function(){
    //基础组件块
    var MyComponent = React.createClass({
        getDefaultProps: function(){
            return {
                'className': 'component'
            };
        },
        getInitialState: function(){
            return {
                'hasEve': true
            };
        },
        componentDidMount: function(){
            console.log('didMount');
        },
        render: function(){
            return (
                <div className="i-block">
                    <h1 className="u-title">className: {this.props.className}</h1>
                    <dl className="i-word">
                        <dt>state: </dt>
                        <dd>
                            hasEve: {this.state.hasEve ? 'true': 'false'}
                        </dd>
                    </dl>
                </div>
                );
        }
    });

    //调用
    ReactDOM.render(
        <MyComponent />,
        document.querySelector('.content1')
        );

};


//依据模块加载
document.querySelector('.demo4-module') && page();
module.exports = function(){};