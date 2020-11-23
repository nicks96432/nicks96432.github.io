import React from "react";
import { Col, Row } from "reactstrap";
import "./CreditPage.scss";

const CreditPage = () => (
	<Row>
		<Col xs={1} />
		<Col xs={10} className="aboutPage">
			<p>
				MLTD歌曲資訊由遊戲中手抄(中文歌名、note數量、難度)、
				<a href="https://mltw-wiki.online/api/v1/songs" rel="external nofollow">
					蛤蛤大的資料庫
				</a>
				(日文歌名、歌曲長度、BPM)、
				<a
					href="https://zh.moegirl.org.cn/Template:%E5%81%B6%E5%83%8F%E5%A4%A7%E5%B8%88%E7%B3%BB%E5%88%97%E6%94%B6%E5%BD%95%E6%9B%B2%E7%9B%AE/%E7%99%BE%E4%B8%87Live#"
					rel="external nofollow"
				>
					萌娘百科
				</a>
				(作詞、作曲)、
				<a href="https://imasml-theater-wiki.gamerch.com/" rel="external nofollow">
					日版MLTD Wiki
				</a>
				(檢查用)取得
				<br />
				音樂封面、資訊由拆包取得
				<br />
				活動舉辦圖從
				<a href="https://www.facebook.com/idolmastermlTD.ch" rel="external nofollow">
					MLTD facebook粉專
				</a>
				和
				<a
					href="https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vQzeEmoVWE8XZt0Id5Th5QXc6dj0bAn_gGNIpPDzXvlKgumtRflI6feaIuxpIY0V4FXxCz6HCtzoAjm/pubhtml"
					rel="external nofollow"
				>
					MLTD台版活動紀錄
				</a>
				取得
				<br />
				網頁背景圖皆取自
				<a
					href="https://img.moegirl.org.cn/common/c/c7/Starry_Melody%21.png"
					rel="external nofollow"
				>
					萌娘百科
				</a>
				，經
				<a href="https://github.com/lltcggie/waifu2x-caffe" rel="external nofollow">
					waifu2x-caffe
				</a>
				放大3倍(拉成4K)而得
				<br />
			</p>
			<p>
				在這裡要特別感謝蛤蛤大，你架的網站給我很多啟發，也因此讓我想學習前端開發
				<br />
				對了，我在建資料庫的時候好像有發現蛤蛤大的資料庫有幾首歌note數不符的情況，不過具體是哪幾首我已經記不起來了
				<br />
				<s>雖然你可能不會看到@@</s>
			</p>
			<h2>更新紀錄</h2>
			<hr />
			<h3>0.1 (2020/9/21)</h3>
			<ul>
				<li>完成歌曲頁面主要架構</li>
				<li>篩選歌曲類型功能</li>
				<li>在首頁做一個小時鐘</li>
			</ul>
			<h3>0.2 (2020/11/23)</h3>
			開學之後都沒時間做，拖了很久才更新
			<ul>
				<li>修好直接到非首頁導致的404錯誤</li>
				<li>將MLTD資訊整合到下拉式選單(不必點擊)，點擊可進到MLTD主頁(製作中)</li>
				<li>增加背景圖片動畫，順便偷換圖</li>
				<li>美化歌曲資訊頁面</li>
				<li>歌曲資料庫更新至台版2020/11/25實裝的所有曲目</li>
			</ul>
			<h3>0.2.1 ()</h3>
			<ul>
				<li>把關於頁面的網址移到/about</li>
			</ul>
			之後預計會隨時間陸續更新的內容：
			<ul>
				<li>使歌曲資訊頁面隨歌曲類型改變顏色</li>
				<li>完成活動資訊頁面</li>
				<li>調整手機版的版型(佛系製作，我太懶)</li>
				<li>增加歌曲頁面的檢視方式(清單、更多資訊...)</li>
				<li>增加更多歌曲資訊(作詞、作曲、MM難度補充...)</li>
			</ul>
		</Col>
		<Col xs={1} />
	</Row>
);

export default CreditPage;
