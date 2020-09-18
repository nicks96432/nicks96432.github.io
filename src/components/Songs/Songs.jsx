import React from "react";
import songData from "./SongData.json";
import { Filterbar } from "./Filterbar";
import { SongCard } from "./SongCard";
import "./Songs.css";
export class Songs extends React.Component {
	stateRef = React.createRef();
	constructor() {
		super();
		this.state = { renderSongs: null };
		this.filter = this.filter.bind(this);
	}
	Data = songData.map((songs, index) => {
		return (
			<SongCard
				songid={songs.id}
				key={"card" + (index + 1)}
				songType={songs.type}
				coverSrc={songs.cover}
				songName_zh={songs.name_zh}
			/>
		);
	});
	componentDidMount() {
		this.setState({ renderSongs: this.Data });
	}
	filter() {
		const filterbarState = this.stateRef.current.state;
		if (
			!(
				filterbarState.togglePrincess ||
				filterbarState.toggleFairy ||
				filterbarState.toggleAngel ||
				filterbarState.toggleAll
			)
		) {
			this.setState({ renderSongs: this.Data });
			return;
		}
		let filterSongs = [];
		if (filterbarState.togglePrincess)
			filterSongs = filterSongs.concat(songData.filter((song) => song.type === "Princess"));
		if (filterbarState.toggleFairy)
			filterSongs = filterSongs.concat(songData.filter((song) => song.type === "Fairy"));
		if (filterbarState.toggleAngel)
			filterSongs = filterSongs.concat(songData.filter((song) => song.type === "Angel"));
		if (filterbarState.toggleAll)
			filterSongs = filterSongs.concat(songData.filter((song) => song.type === "All"));
		filterSongs.sort((a, b) => {
			return a.id > b.id;
		});
		this.setState({
			renderSongs: filterSongs.map((songs, index) => {
				console.log(songs);
				return (
					<SongCard
						songid={songs.id}
						key={"card" + (index + 1)}
						songType={songs.type}
						coverSrc={songs.cover}
						songName_zh={songs.name_zh}
					/>
				);
			}),
		});
	}
	render() {
		return (
			<div className="row">
				<div className="col-1" />
				<div className="col-10">
					<Filterbar filter={this.filter} ref={this.stateRef} />
					<div id="song-cards">{this.state.renderSongs}</div>
				</div>
				<div className="col-1" />
			</div>
		);
	}
}
