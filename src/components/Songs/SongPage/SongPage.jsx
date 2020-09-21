import React from "react";
import SongData from "../SongData.json";
import "./SongPage.css";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
export class SongPage extends React.Component {
	render() {
		const {
			params: { songid },
		} = this.props.match;
		const song = SongData.find((song) => {
			return song.id === parseInt(songid);
		});
		if (!song) return <>歌曲不存在或尚未收錄</>;
		return (
			<div className="song-page">
				<div className="song-information-container">
					<div className="song-cover-container">
						<img
							id="song-cover"
							src={require("../../../" + song.cover)}
							alt={song.songName_zh}
						/>
					</div>
					<div id="song-information">
						<div>中文歌名：{song.name_zh}</div>
						<div>日文歌名：{song.name_jp}</div>
						<div>歌曲類型：{song.type}</div>
						<div>歌曲長度：{song.length}</div>
					</div>
				</div>
				<Table className="song-hardness">
					<tbody>
						<tr>
							<th></th>
							<th>2M</th>
							<th>2M+</th>
							<th>4M</th>
							<th>6M</th>
							<th>MM</th>
						</tr>
						<tr>
							<td>難度</td>
							<td>{song.difficulty["2M"]}</td>
							<td>{song.difficulty["2M+"]}</td>
							<td>{song.difficulty["4M"]}</td>
							<td>{song.difficulty["6M"]}</td>
							<td>{song.difficulty["MM"]}</td>
						</tr>
						<tr>
							<td>notes</td>
							<td>{song.notes["2M"]}</td>
							<td>{song.notes["2M+"]}</td>
							<td>{song.notes["4M"]}</td>
							<td>{song.notes["6M"]}</td>
							<td>{song.notes["MM"]}</td>
						</tr>
					</tbody>
				</Table>
				<div id="back-button-container">
					<Link to={process.env.PUBLIC_URL + "/songs"}>
						<Button id="song-page-back-button">回歌曲總覽</Button>
					</Link>
				</div>
			</div>
		);
	}
}
