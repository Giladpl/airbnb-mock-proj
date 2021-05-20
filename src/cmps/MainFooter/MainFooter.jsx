import './MainFooter.scss'
import facebook from '../../assets/img/facebook.svg';
import instagram from '../../assets/img/instagram.svg';
import twitter from '../../assets/img/twitter.svg';

export const MainFooter = (props) => {

    return (
        <footer className="footer flex-between">
            <div>© 2021 </div>
            <div className="flex">
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={instagram} alt="" />
            </div>
        </footer>
    )
}

