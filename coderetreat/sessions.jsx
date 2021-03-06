var eventId = "201702-imkn";
var ref = firebase.database().ref(eventId);

init();

function Page(props){
	var sessionIndex = props.data.currentSessionIndex;
	var pairs = props.data.sessions[sessionIndex].pairs;
	var items = [];
	for(let p in pairs){
		let pair = pairs[p];
		let title = 'пара: ' + (pair.expert ? 'Эксперт ' + pair.pair : pair.pair) + ' luck: ' + pair.luck + ' history: ' + pair.history;
		var classes = "guest-info";
		if (pair.expert) classes += " with-expert";
		if (pair.luck > 0) classes += " lucky";
		items.push(<div key={p} className={classes} title={title}>№ {p} → стол {pair.table+1}</div>);
	}
	return (<div className="container">
		<h1>Сессия № {sessionIndex+1}</h1>
		<div className="guests-distribution">
			{items}
		</div>
	</div>);
}

function updateUI(name, data){
	console.log(data);
	ReactDOM.render( 
		<Page name={name} data={data} />,
		document.getElementById("root")
	);
}

function init(){
	var provider = new firebase.auth.GithubAuthProvider();
	//firebase.auth().signInWithPopup(provider).catch(function(e){console.log(e);});
	

	ref.on('value', function(sn){
		var data = sn.val();
		updateUI(sn.key, data);
	});
}
