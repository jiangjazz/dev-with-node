//组件
/*var HelloMessage = React.createClass({
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
});*/

/*var MyModule = React.createClass({
    clickHandle: function(){
        var value = this.refs.inp.value;
        console.log(value);
    },
    render: function(){
        return (<div>
                <input type="text" ref="inp" onClick={this.clickHandle} />
                <p>this.props.title</p>
            </div>);
    }
});*/


//参数
/*var data = 'Welcome!';*/

//执行
/*ReactDOM.render(
        <HelloMessage title={data} />,
        document.querySelector('.content1')
      );
*/
/*ReactDOM.render(
        <MyComponent />,
        document.querySelector('.content2')
      );
*/
/*ReactDOM.render(
    <MyModule title="123"/>,
    document.querySelector('.content2')
    );
*/

/*var LikeButton = React.createClass({
    getInitialState: function(){
        return {
            liked: false,
            name: 'Jazz'
        };
    },
    handleClick: function(event){
        this.setState({liked: !this.state.liked});
        console.log(this.state);
    },
    render: function(){
        var text = this.state.liked ? 'like' : 'haven\'t liked';
        return (
            <p onClick={this.handleClick}>
                You {text} this. Click to toggle.
            </p>
            );
    }
});

ReactDOM.render(
    <LikeButton />,
    document.querySelector('.content1')
    );*/

/*var Hello = React.createClass({
    getInitialState: function(){
        return {
            opacity: 1.0
        };
    },
    componentDidMount: function(){
        this.timer = setInterval(function(){
            var opacity = this.state.opacity;
            opacity -= .05;
            if(opacity < .1){
                opacity = 1.0;
            }
            this.setState({
                opacity: opacity
            });
        }.bind(this),100)
    },
    componentWillUpdate: function(){
        console.log(1);
    },
    componentWillUnmount: function(){
        console.log(2);
    },
    shouldComponentUpdate: function(obj1, obj2){
        if(obj2.opacity > .5){
            //console.log(3);
            return true;
        }else{
            //console.log(4);
            return false;
        }
    },
    render: function(){
        return (
            <div style={{opacity: this.state.opacity}}>
                Hello {this.props.name}
            </div>
            );
    }
});

ReactDOM.render(
    <Hello name="jazz" />,
    document.querySelector('.content1')
    );*/

/*var UserGist = React.createClass({
    getInitialState: function(){
        return {
            userName: '',
            lastGistUrl: ''
        };
    },
    componentDidMount: function(){
        var times = (new Date()).getTime().toString();
        $.get('actions/get.php?t='+times, {id: 12312}, function(result){
            console.log(result);
            var lastGist = result[0];
            if(this.isMounted()){
                this.setState({
                    userName: lastGist.owner.login,
                    lastGistUrl: lastGist.html_url
                });
            }
        }.bind(this));
    },
    render: function(){
        return (
            <div>
                {this.state.username}s last gist is
                <a href={this.state.lastGistUrl}>here</a>.
            </div>
            );
    }
});


ReactDOM.render(
     <UserGist source="actions/get.php" />,
    document.querySelector('.content1')
    );*/

/*var RepoList = React.createClass({
    getInitialState: function() {
        return {
            loading: true,
            error: null,
            data: null
        };
    },
  componentDidMount() {
    this.props.promise.then(
      value => this.setState({loading: false, data: value}),
      error => this.setState({loading: false, error: error}));
  },
  render: function() {
    if (this.state.loading) {
      return <span>Loading...</span>;
    }
    else if (this.state.error !== null) {
      return <span>Error: {this.state.error.message}</span>;
    }
    else {
      var repos = this.state.data.items;
      var repoList = repos.map(function (repo) {
        return (
          <li>
            <a href={repo.html_url}>{repo.name}</a> ({repo.stargazers_count} stars) <br/> {repo.description}
          </li>
        );
      });
      return (
        <main>
          <h1>Most Popular JavaScript Projects in Github</h1>
          <ol>{repoList}</ol>
        </main>
      );
    }
  }
});*/

