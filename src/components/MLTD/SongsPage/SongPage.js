import React, { useContext } from "react";
import SongData from "./SongData.json";
import "./SongPage.scss";
import { Button, Col, Row, Table } from "reactstrap";
import { Link } from "react-router-dom";
import ContextStore from "../../../ContextStore";
const SongPage = (props) => {
	const {
		params: { songid },
	} = props.match;
	const song = SongData.find((song) => {
		return song.id === parseInt(songid);
	});
	const context = useContext(ContextStore);
	if (!song) return <>歌曲不存在或尚未收錄</>;
	return (
		<div className="song-page">
			<Row className="information-cover-container">
				<Col xs={6} className="song-cover-container">
					<img
						id="song-cover"
						src={`${context.MLTDCoverBaseUrl}${song.coverName}`}
						alt={song.songName_zh}
					/>
				</Col>
				<Col xs={6} className="song-information">
					<div>
						<span>中文歌名</span>
						{song.name_zh}
					</div>
					<div>
						<span>日文歌名</span>
						{song.name_jp}
					</div>
					<div>
						<span>歌曲類型</span>
						{song.type}
					</div>
					<div>
						<span>歌曲長度</span>
						{song.length}
					</div>
				</Col>
			</Row>
			<Table id="song-hardness">
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
			<div className="back-button-container">
				<Link to={process.env.PUBLIC_URL + "/MLTD/songs"}>
					<Button id="back-button">&gt;&gt;回歌曲總覽</Button>
				</Link>
			</div>
		</div>
	);
};

export default SongPage;
