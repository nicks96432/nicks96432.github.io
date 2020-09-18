import React from "react";
export class AboutPage extends React.Component {
	render() {
		return (
			<div>
				歌曲資訊由遊戲中手抄(中文歌名、note數量、難度)、
				<a href="https://mltw-wiki.online/api/v1/songs">蛤蛤大的資料庫</a>
				(日文歌名、歌曲長度、BPM)、
				<a href="https://zh.moegirl.org.cn/Template:%E5%81%B6%E5%83%8F%E5%A4%A7%E5%B8%88%E7%B3%BB%E5%88%97%E6%94%B6%E5%BD%95%E6%9B%B2%E7%9B%AE/%E7%99%BE%E4%B8%87Live#">
					萌娘百科
				</a>
				(作詞、作曲)、
				<a href="https://imasml-theater-wiki.gamerch.com/">日版MLTD Wiki</a>(檢查用)取得
				<br />
				音樂封面、屬性由拆包取得
				<br />
				活動舉辦圖從
				<a href="https://www.facebook.com/idolmastermlTD.ch">MLTD facebook粉專</a>和
				<a href="https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vQzeEmoVWE8XZt0Id5Th5QXc6dj0bAn_gGNIpPDzXvlKgumtRflI6feaIuxpIY0V4FXxCz6HCtzoAjm/pubhtml">
					MLTD台版活動紀錄
				</a>
				取得
				<br />
				網頁背景圖皆取自
				<a href="https://img.moegirl.org.cn/common/5/54/Cleasky.png">萌娘百科</a>
				，經<a href="https://github.com/lltcggie/waifu2x-caffe">waifu2x-caffe</a>
				放大3倍(拉成4K)而得
				<br />
				<p style={{ margin: "1em 0 0" }}>
					在這裡要特別感謝蛤蛤大，你架的網站給我很多啟發，也因此讓我想學習前端開發
					<br />
					對了，我在建資料庫的時候好像有發現蛤蛤大的資料庫有幾首歌note數不符的情況，不過具體是哪幾首我已經記不起來了
					<br />
					<s>雖然你可能不會看到@@</s>
				</p>
			</div>
		);
	}
}
