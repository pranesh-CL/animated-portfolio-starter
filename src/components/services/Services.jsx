import "./services.scss";
import {motion} from "framer-motion";

const Services = () => {
  return (
    <motion.div className="services">
        <motion.div className="textContainer">
            <p>I focus on helping your brand grow
                <br/>and move forward
            </p>
            <hr/>
        </motion.div>
        <motion.div className="titleContainer">
            <div className="title">
                <img src="/people.webp" alt=""/>
                <h1>
                    <b>Unique</b> Ideas
                </h1>
            </div>
            <div className="title">
                <h1>
                    <b>For Yours</b> Business.
                </h1>
                <button>WHAT WE DO?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer">
            <div className="box">
                <h2>Branding</h2>
                <p>Working with passion pays a ways for success
                   than simply working in need money! Be a 
                   knowledge seeker by Learning latest trend 
                   in technology and society . Provide quality
                   software for users. 
                </p>
                <button>Go</button>
            </div>
            <div className="box">
                <h2>Branding</h2>
                <p>Working with passion pays a ways for success
                   than simply working in need money! Be a 
                   knowledge seeker by Learning latest trend 
                   in technology and society . Provide quality
                   software for users. 
                </p>
                <button>Go</button>
            </div>
            <div className="box">
                <h2>Branding</h2>
                <p>Working with passion pays a ways for success
                   than simply working in need money! Be a 
                   knowledge seeker by Learning latest trend 
                   in technology and society . Provide quality
                   software for users. 
                </p>
                <button>Go</button>
            </div>
            <div className="box">
                <h2>Branding</h2>
                <p>Working with passion pays a ways for success
                   than simply working in need money! Be a 
                   knowledge seeker by Learning latest trend 
                   in technology and society . Provide quality
                   software for users. 
                </p>
                <button>Go</button>
            </div>
        </motion.div>
    </motion.div>
  )
}

export default Services