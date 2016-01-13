
var page = function(){
    //基础组件块
    var MyComponent = React.createClass({
        render: function(){
            return (
                <div>MyComponent</div>
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
document.querySelector('.demo3-module') && page();