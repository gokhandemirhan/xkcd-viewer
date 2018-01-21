import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default class ComicView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};

		this._onPressGetComic = this._onPressGetComic.bind(this);
	}
	// methods
    componentWillMount(){
        this._onPressGetComic(1);
	}
	_onPressGetComic(idToFetch) {
		let that =this;

		fetch("https://xkcd.com/"+idToFetch+"/info.0.json").then(function(response) {
			if(response.ok) {
                response.json().then(function (data) {
                    let comic = data;
                    that.setState({comic: comic});
                });
            }
		});
	}
	render() {
        let currentComic = this.state.comic;
        if (currentComic) {
			return (
				<View>
					<Image
						source={{uri: currentComic.img}}
						style={{flex:1, height: undefined, width: undefined}}
						resizeMode="contain"
					/>
					<Text>{currentComic.safe_title}</Text>
					<Button
						onPress={() => this._onPressGetComic(currentComic.num - 1)}
						title="Previous Comic"
					/>
					<Button onPress={() => this._onPressGetComic(currentComic.num + 1)}
							title="Next Comic"
					/>
				</View>
			);
		}
		else{
			return (<Text>Waiting...</Text>);
		}
	}
}
