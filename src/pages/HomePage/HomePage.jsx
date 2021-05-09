import './HomePage.scss';
import entire from '../../assets/img/entire.jpg';
import unique from '../../assets/img/unique.jpg';
import pets from '../../assets/img/pets.jpg';
import outdoor from '../../assets/img/outdoor.jpg';

export const HomePage = (props) => {

	return <main className="home-page main-layout">
		<div>
			<h1>Live anywhere</h1>
			<div className="live-anywhere flex">
				<div className="flex-column">
					<img src={outdoor} alt=""/>
					<h3>Outdoor getaways</h3>
				</div>
				<div className="flex-column">
					<img src={unique} alt=""/>
					<h3>Unique stays</h3>
				</div>
				<div className="flex-column">
					<img src={entire} alt=""/>
					<h3>Entire homes</h3>
				</div>
				<div className="flex-column">
					<img src={pets} alt=""/>
					<h3>Pets allowed</h3>
				</div>
			</div>
		</div>
		<div className="become-host flex-column">
			<h1>Become a Host</h1>
			<p>Earn extra income and unlock new opportunities by sharing your space.</p>
			<button>Learn more</button>
		</div>
	</main>;
};
