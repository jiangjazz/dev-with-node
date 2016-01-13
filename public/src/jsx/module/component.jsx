/***********************
 * 组件
 */

//checkbox
var Checkbox = React.createClass({
    render: function(){
        return (
            <div className="u-checkbox">
            13213123
                <input name="" type="checkbox" />
            </div>
            );
    }
});

//checkbox组件
function checkbox(ele){

    ReactDOM.render(
        <Checkbox />,
        ele
        );
}

//暴露接口
module.export = function(){
    console.log(123);
    return {
        'checkbox': 'checkbox'
    };
};