import './MainFooter.scss'
import facebook from '../../assets/img/facebook.svg';
import instagram from '../../assets/img/instagram.svg';
import twitter from '../../assets/img/twitter.svg';

export const MainFooter = () => {

    return (
        <footer className="footer">
            <div className="main-layout flex-between">
                <div>© 2021 </div>
                <div className="flex">
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                    <img src={instagram} alt="" />
                </div>
            </div>
        </footer>
    )
}

