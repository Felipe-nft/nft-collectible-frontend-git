import './Footer.css';
import twitter_white from '../assets/twitter.png';
import discord_white from '../assets/discord.png';
import instagram_white from '../assets/instagram.png';

function Footer(props) {
    return (
        <footer className='footer'>
            <p>
                SMART CONTRACT ADDRESS:&nbsp;
                <br />
                <span>
                    <a className='contract-link' href={`https://mumbai.polygonscan.com/address/${props.address}`} target='_blank' rel='noreferrer'>
                        {props.address}
                    </a>
                </span>
            </p>
            <div className='footer-social-media-links'>
                <div>
                    <a href='https://discord.com/channels/936573458748432405/946739867298172939'>
                        <img src={discord_white} alt="Discord" />
                    </a>
                </div>
                <div>
                    <a href='https://www.instagram.com/azzurri/' target='_blank' rel='noreferrer'>
                        <img src={instagram_white} alt="Instagram" />
                    </a>
                </div>
                <div>
                    <a href='https://twitter.com/TJshonanbeach' target='_blank' rel='noreferrer'>
                        <img src={twitter_white} alt="Twitter" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
