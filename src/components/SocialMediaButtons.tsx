import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";
import '../App.css'

const SocialMediaButtons = () => {

    const handleClickFb = () => {
        window.open ("https://www.instagram.com/north.trade/", "_blank")
    }
    const handleClickIg = () => {
        window.open ("https://www.facebook.com/p/North-Trade-100075584095016/", "_blank")
    }

    return (
      <div>
        <button className="insta-button" onClick={handleClickFb}>
          <Instagram />
          <p>Instagram</p>
        </button>
        <button className="facebook-button" onClick={handleClickIg}>
          <Facebook />
          <p>Facebook</p>
        </button>
      </div>
    );
}

export default SocialMediaButtons


