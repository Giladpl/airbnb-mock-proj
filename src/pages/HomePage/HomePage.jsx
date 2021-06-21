import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter } from '../../cmps/Filter';
import { loadStays } from '../../store/actions/stayActions';
import { loadUsers } from '../../store/actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import OutsideClickHandler from 'react-outside-click-handler';
import './HomePage.scss';
import entire from '../../assets/img/entire.jpg';
import unique from '../../assets/img/unique.jpg';
import pets from '../../assets/img/pets.jpg';
import outdoor from '../../assets/img/outdoor.jpg';
import experiences from '../../assets/img/Experiences.jpg';
import featuredCollection from '../../assets/img/FeaturedCollection.jpg';
import onlineExperiences from '../../assets/img/OnlineExperiences.jpg';

export const HomePage = ({ isFilter }) => {
	const dispatch = useDispatch();
	const stays = useSelector((state) => state.stayReducer.stays);
	const users = useSelector((state) => state.userReducer.users);
	const loggedinUser = useSelector((state) => state.userReducer.loggedinUser);
	const [isMenu, setIsMenu] = useState(false);

	useEffect(() => {
		dispatch(loadStays());
		dispatch(loadUsers());
	}, [dispatch]);

	const toggleMenu = () => {
		setIsMenu(!isMenu);
	};

	return (
		<main className='home-page'>
			<div className='hero'>
				<div className='logo-content main-layout'>
					<div className='flex-between'>
						<div>Logo.</div>
<<<<<<< HEAD
						<div className='flex'>
							<Link to='/user'>
								<img
									className='user-img'
									src={
										loggedinUser
											? loggedinUser.imgUrl
											: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'
									}
									alt=''
								/>
							</Link>
							<div className='menu flex-center' onClick={toggleMenu}>
								☰
							</div>
						</div>
					</div>
					<OutsideClickHandler onOutsideClick={() => setIsMenu(false)}>
						{isMenu && (
							<ul className='login-modal clean-list'>
								<Link to='/signup'>
									<li>Sign up</li>
								</Link>
								<Link to='login'>
									<li>Log in</li>
								</Link>
							</ul>
						)}
=======
						<div className='menu flex-between'>
							<div className='flex-center' onClick={toggleMenu}>☰</div>
							<img className='user-img' src={loggedinUser ? loggedinUser.imgUrl : 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'} alt="" />
						</div>
					</div>
					<OutsideClickHandler
						onOutsideClick={() => setIsMenu(false)}
					>
						{isMenu && <ul className='login-modal clean-list'>
							<Link to='/signup'><li>Sign up</li></Link>
							<Link to='login'><li>Log in</li></Link>
							<Link to='/user'><li>User page</li></Link>
						</ul>}
>>>>>>> 3a1fdd46e91133d2b4a3eb9091ee7d4c39301b72
					</OutsideClickHandler>
				</div>
				<Filter
					stays={stays}
					className='filter'
					style={{ opacity: !isFilter ? 100 : 0 }}
				/>
				<div className='hero-content main-layout'>
					<h1>The Greatest Outdoors</h1>
					<p>Wishlists curated by Airbnb.</p>
					<button>Get inspired</button>
				</div>
			</div>
			<div className='main-layout'>
				<div>
					<h1>Live anywhere</h1>
					<div className='live-anywhere flex'>
						<Link to='/stay'>
							<div className='flex-column'>
								<img src={outdoor} alt='' />
								<h3>Outdoor getaways</h3>
							</div>
						</Link>
						<Link to='/stay'>
							<div className='flex-column'>
								<img src={unique} alt='' />
								<h3>Unique stays</h3>
							</div>
						</Link>
						<Link to='/stay'>
							<div className='flex-column'>
								<img src={entire} alt='' />
								<h3>Entire homes</h3>
							</div>
						</Link>
						<Link to='/stay'>
							<div className='flex-column'>
								<img src={pets} alt='' />
								<h3>Pets allowed</h3>
							</div>
						</Link>
					</div>
				</div>
				<div className='become-host flex-column'>
					<h1>Become a Host</h1>
					<p>
						Earn extra income and unlock new opportunities by sharing your
						space.
					</p>
					<button>Learn more</button>
				</div>
				<div className='discover-container'>
					<h1>Discover Experience</h1>
					<p>Unique activities with local experts—in person or online.</p>
					<div className='discover-content flex'>
						<div className='flex-column'>
							<img src={featuredCollection} alt='' />
							<h3>Featured collection: Wanderlust</h3>
							<p>Travel from home with Online Experiences</p>
						</div>
						<div className='flex-column'>
							<img src={onlineExperiences} alt='' />
							<h3>Online Experiences</h3>
							<p>Live, interactive activities led by Hosts.</p>
						</div>
						<div className='flex-column'>
							<img src={experiences} alt='' />
							<h3>Experiences</h3>
							<p>Local things to do, wherever you are.</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};
