/***********************
 * 组件
 */

//单选框 组件
var AnswerRadioInput = React.createClass({
    propTypes: {
        'id': React.PropTypes.string,
        'name': React.PropTypes.string.isRequired,
        'label': React.PropTypes.string.isRequired,
        'value': React.PropTypes.string.isRequired,
        'checked': React.PropTypes.bool,
        'onChanged': React.PropTypes.func.isRequired
    },
    getDefaultProps: function(){
        return {
            'id': null
        };
    },
    getInitialState: function(){
        var id = this.props.id ? this.props.id : uniqueId('radio-');
        console.log('getInitialState');
        return {
            'checked': this.props.checked,
            'id': id,
            'name': id
        };
    },
    handleChanged: function(e){
        var checked = e.target.checked;
        //console.log(e.target, checked);
        if(checked){
            this.props.onChanged(this.props.value);
        }
        this.setState({
            'checked': checked
        });
        //console.log(this.state);
    },
    render: function(){
        return (
            <div className="radio i-word">
                <label htmlFor={this.props.id}>
                    <input type="radio" name={this.props.name} id={this.props.id} checked={this.props.checked} onChange={this.handleChanged} />
                    {this.props.label}
                </label>
            </div>
            );
    }
});

//单选框组 组件
var AnswerMultipleChoiceQuestion = React.createClass({
    propTypes: {
        'value': React.PropTypes.string,
        'choices': React.PropTypes.array.isRequired,
        //'onCompleted': React.PropTypes.func.isRequired
    },
    getInitialState: function(){
        return {
            'id': uniqueId('multiple-chpice-'),
            'value': this.props.value
        };
    },
    handleChanged: function(value){
        this.setState({
            'value': value
        });
        //this.props.onCompleted(value);
    },
    render: function(){
        var radioArr = [],
            _this = this;
        radioArr = this.props.choices.map(function(choice, i){
            return <AnswerRadioInput
                        key={choice}
                        id={'choice-' + i}
                        name={_this.state.id}
                        label={choice}
                        value={choice}
                        checked={_this.state.value === choice}
                        onChanged={_this.handleChanged} />;
        });
        return (
            <div className="form-goup">
                <label className="survey-item-label" htmlFor={this.state.id}>
                    {this.props.label}:{this.state.value}
                </label>
                <div className="survey-item-content">
                    {radioArr}
                </div>
            </div>
            );
    }
});

/**************************
 * 生产函数（暴露接口）
 */

/**
 * [radiosComponent 单选框组]
 * @param  {[type]} props [props对象，需求例子：
 *      props = {
            'label': '当前选择的',
            'choices': arrayOfChoices,
            'value': ''
        };
 * ]
 * @param  {[type]} ele   [传入元素]
 * @return {[type]}       [none]
 */
var radiosComponent = function(props, ele){
    ReactDOM.render(
        <AnswerMultipleChoiceQuestion {...props} />,
        document.querySelector('.radioBox')
        );
}



/***************************
 * 公用函数
 */
//随机数时间戳
function uniqueId(str) {
    var a = Math.random,
        b = parseInt;
    return str + Number(new Date()).toString() + b(10 * a()) + b(10 * a()) + b(10 * a());
}

//暴露接口
module.exports = function(){
    console.log(123);
    return {
        'radiosComponent': radiosComponent
    };
};