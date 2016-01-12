//搜索功能组件的演示

var page = function(){

    //参数
    var PRODUCTS = [
        {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
        {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
        {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
        {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
        {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
        {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
    ];
    //具体产品
    var Product = React.createClass({
        render: function(){
            return (
                <div className="products">
                    <span>{this.props.product.name}</span>&nbsp;
                    <span>{this.props.product.price}</span>
                </div>
                );
        }
    });
    //具体分类数据的呈现
    var ResultGroup = React.createClass({
        getDefaultProps: function(){
            return {
                'searchName': 'search'
            };
        },
        render: function(){
            var len = this.props.products.length,
                i = 0,
                row = [];
            while(i<len){
                row.push([<Product product={this.props.products[i]} />]);
                i++;
            };
            return (
                <div className="resultGroup">
                    <h4 className="category">{this.props.products[0].category}</h4>
                    {row}
                </div>
                );
        }
    });
    //搜索框
    var SearchBar = React.createClass({
        getDefaultProps: function(){
            return {
                'searchName': 'search',
                'promptMsg': '请输入搜索关键字'
            };
        },
        render: function(){
            return (
                <div className="searchBar">
                    <input name={this.props.searchName} type="search" placeholder='请输入搜索关键字' />
                </div>
                );
        }
    });
    //搜索组件
    var SearchGroup = React.createClass({
        render: function(){
            var categoryObj = {},
                row = [];
            //按category分类,获得新的分组数据
            this.props.products.forEach(function(product) {
                if (!categoryObj[product.category]) {
                    categoryObj[product.category] = [];
                }
                categoryObj[product.category].push(product);
            });
            for(var obj in categoryObj){
                row.push(<ResultGroup key={obj} products={categoryObj[obj]}/>);
            }
            return (
                <div className={this.props.class}>
                    <SearchBar />
                    {row}
                </div>
                );
        }
    });
    //调用
    ReactDOM.render(
        <SearchGroup class="component-search"  products={PRODUCTS}/>,
        document.querySelector('.content1')
        );
};



//依据模块加载
document.querySelector('.demo2-module') && page();