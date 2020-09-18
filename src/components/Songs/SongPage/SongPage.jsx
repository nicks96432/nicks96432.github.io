import React from "react";
import SongData from "../SongData.json";
import "./SongPage.css";
import BackButton from "../../BackButton";
export class SongPage extends React.Component {
	render() {
		const {
			params: { songid },
		} = this.props.match;
		const song = SongData.find((song) => {
			return song.id === parseInt(songid);
		});
		return (
			<div className="song-page">
				<div>
					<img src={require("../../../" + song.cover)} alt={song.songName_zh} />
				</div>
				<div>
					<div>中文歌名：{song.name_zh}</div>
					<div>日文歌名：{song.name_jp}</div>
					<div>歌曲類型：{song.type}</div>
					<div>歌曲長度：{song.length}</div>
					<div>
						歌曲難度：2M：level {song.difficulty["2M"]}, {song.notes["2M"]} notes
						<br />
						　　　　　4M：level {song.difficulty["4M"]}, {song.notes["4M"]} notes
						<br />
						　　　　　6M：level {song.difficulty["6M"]}, {song.notes["6M"]} notes
						<br />
						　　　　　2M+：level {song.difficulty["2M+"]}, {song.notes["2M+"]} notes
						<br />
						　　　　　MM：level {song.difficulty["MM"]}, {song.notes["MM"]} notes
					</div>
					<div>
						<BackButton>回歌曲總覽</BackButton>
					</div>
				</div>
			</div>
		);
	}
}
