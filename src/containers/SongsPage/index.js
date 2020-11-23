import React, { useContext, useState } from "react";
import { Col, Row } from "reactstrap";
import SongCard from "../../components/MLTD/SongsPage/SongCard";
import SongData from "../../components/MLTD/SongsPage/SongData.json";
import SongFilter from "../../components/MLTD/SongsPage/SongFilter";
import "./SongsPage.css";
import contextStore from "../../ContextStore";

function SongsPage() {
	const [filterState, setFilterState] = useState({
		princess: false,
		fairy: false,
		angel: false,
		all: false,
	});
	const context = useContext(contextStore);
	return (
		<Row>
			<Col />
			<Col xs={10}>
				<SongFilter filterState={filterState} setFilterState={setFilterState} />
				<div id="song-cards">
					{SongData.filter((song) => {
						if (
							!(
								filterState.princess ||
								filterState.fairy ||
								filterState.angel ||
								filterState.all
							)
						)
							return true;
						else if (
							(song.type === "Princess" && filterState.princess) ||
							(song.type === "Fairy" && filterState.fairy) ||
							(song.type === "Angel" && filterState.angel) ||
							(song.type === "All" && filterState.all)
						)
							return true;
						return false;
					}).map((song, index) => (
						<SongCard
							songid={song.id}
							key={"card" + (index + 1)}
							songType={song.type}
							coverSrc={`${context.MLTDCoverBaseUrl}${song.coverName}`}
							songName_zh={song.name_zh}
						/>
					))}
				</div>
			</Col>
			<Col />
		</Row>
	);
}

export default SongsPage;
