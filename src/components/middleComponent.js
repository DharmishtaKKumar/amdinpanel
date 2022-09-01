import React from "react";
// import profileImg from '../../public/img1.jpg'
import '../components/middle.css'

const Middle = ()=>{
    return(
        <div class="container">
        <div class="leftSide">
            {/* Header */}
            <div class="header">
                <div class="userimg">
                    {/* <img src={profileImg} alt="" class="cover"/> */}
                </div>
                <ul class="nav_icons">
                    <li>
                        <ion-icon name="scan-circle-outline"></ion-icon>
                    </li>
                    <li>
                        <ion-icon name="chatbox"></ion-icon>
                    </li>
                    <li>
                        <ion-icon name="ellipsis-vertical"></ion-icon>
                    </li>
                </ul>
            </div>
            {/* <!-- Search Chat --> */}
            <div class="search_chat">
                <div>
                    <input type="text" placeholder="Search or start new chat"/>
                    <ion-icon name="search-outline"></ion-icon>
                </div>
            </div>
            {/* <!-- CHAT LIST --> */}
            <div class="chatlist">
                <div class="block active">
                    <div class="imgBox">
                        {/* <img src={profileImg} class="cover" alt=""/> */}
                    </div>
                    <div class="details">
                        <div class="listHead">
                            <h4>Jhon Doe</h4>
                            <p class="time">10:56</p>
                        </div>
                        <div class="message_p">
                            <p>How are you doing?</p>
                        </div>
                    </div>
                </div>

                <div class="block unread">
                    <div class="imgBox">
                        {/* <img src={profileImg} class="cover" alt=""/> */}
                    </div>
                    <div class="details">
                        <div class="listHead">
                            <h4>Andre</h4>
                            <p class="time">12:34</p>
                        </div>
                        <div class="message_p">
                            <p>I love your youtube videos!</p>
                            <b>1</b>
                        </div>
                    </div>
                </div>

                <div class="block unread">
                    <div class="imgBox">
                        {/* <img src={profileImg} class="cover" alt=""/> */}
                    </div>
                    <div class="details">
                        <div class="listHead">
                            <h4>Olivia</h4>
                            <p class="time">Yesterday</p>
                        </div>
                        <div class="message_p">
                            <p>I just subscribed to your channel</p>
                            <b>2</b>
                        </div>
                    </div>
                </div>
                <div class="block">
                    <div class="imgBox">
                        {/* <img src={profileImg} class="cover" alt=""/> */}
                    </div>
                    <div class="details">
                        <div class="listHead">
                            <h4>Parker</h4>
                            <p class="time">Yesterday</p>
                        </div>
                        <div class="message_p">
                            <p>Hey!</p>
                        </div>
                    </div>
                </div>
                <div class="block">
                    <div class="imgBox">
                        {/* <img src={profileImg} class="cover" alt=""/> */}
                    </div>
                    <div class="details">
                        <div class="listHead">
                            <h4>Zoey</h4>
                            <p class="time">18/01/2022</p>
                        </div>
                        <div class="message_p">
                            <p>I'll get back to you</p>
                        </div>
                    </div>
                </div>
                <div class="block">
                    <div class="imgBox">
                        {/* <img src={profileImg} class="cover" alt=""/> */}
                    </div>
                    <div class="details">
                        <div class="listHead">
                            <h4>Josh</h4>
                            <p class="time">17/01/2022</p>
                        </div>
                        <div class="message_p">
                            <p>Congratulations</p>
                        </div>
                    </div>
                </div>
                <div class="block">
                    <div class="imgBox">
                        {/* <img src={profileImg} class="cover" alt=""/> */}
                    </div>
                    <div class="details">
                        <div class="listHead">
                            <h4>Dian</h4>
                            <p class="time">15/01/2022</p>
                        </div>
                        <div class="message_p">
                            <p>Thanks alot</p>
                        </div>
                    </div>
                </div>
                <div class="block">
                    <div class="imgBox">
                        {/* <img src={profileImg} class="cover" alt=""/> */}
                    </div>
                    <div class="details">
                        <div class="listHead">
                            <h4>Sam</h4>
                            <p class="time">Yesterday</p>
                        </div>
                        <div class="message_p">
                            <p>Did you finish the project?</p>
                        </div>
                    </div>
                </div>
                <div class="block">
                    <div class="imgBox">
                        {/* <img src={profileImg} class="cover" alt=""/> */}
                    </div>
                    <div class="details">
                        <div class="listHead">
                            <h4>Junior</h4>
                            <p class="time">18/01/2022</p>
                        </div>
                        <div class="message_p">
                            <p>Nice course</p>
                        </div>
                    </div>
                </div>
                <div class="block">
                    <div class="imgBox">
                        {/* <img src={profileImg} class="cover" alt=""/> */}
                    </div>
                    <div class="details">
                        <div class="listHead">
                            <h4>Zoey</h4>
                            <p class="time">18/01/2022</p>
                        </div>
                        <div class="message_p">
                            <p>I'll get back to you</p>
                        </div>
                    </div>
                </div>
                <div class="block">
                    <div class="imgBox">
                        {/* <img src={profileImg} class="cover" alt=""/> */}
                    </div>
                    <div class="details">
                        <div class="listHead">
                            <h4>Josh</h4>
                            <p class="time">17/01/2022</p>
                        </div>
                        <div class="message_p">
                            <p>Congratulations</p>
                        </div>
                    </div>
                </div>
                <div class="block">
                    <div class="imgBox">
                        {/* <img src={profileImg} class="cover" alt=""/> */}
                    </div>
                    <div class="details">
                        <div class="listHead">
                            <h4>Dian</h4>
                            <p class="time">15/01/2022</p>
                        </div>
                        <div class="message_p">
                            <p>Thanks alot</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="rightSide">
            <div class="header">
                <div class="imgText">
                    <div class="userimg">
                        {/* <img src={profileImg} alt="" class="cover"/> */}
                    </div>
                    <h4>Qazi <br/><span>online</span></h4>
                </div>
                <ul class="nav_icons">
                    <li>
                        <ion-icon name="search-outline"></ion-icon>
                    </li>
                    <li>
                        <ion-icon name="ellipsis-vertical"></ion-icon>
                    </li>
                </ul>
            </div>

            {/* <!-- CHAT-BOX --> */}
            <div class="chatbox">
                <div class="message my_msg">
                    <p>Hi <br/><span>12:18</span></p>
                </div>
                <div class="message friend_msg">
                    <p>Hey <br/><span>12:18</span></p>
                </div>
                <div class="message my_msg">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/><span>12:15</span></p>
                </div>
                <div class="message friend_msg">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/><span>12:15</span></p>
                </div>
                <div class="message my_msg">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Eaque aliquid fugiat accusamus dolore qui vitae ratione optio sunt
                        <br/><span>12:15</span></p>
                </div>
                <div class="message friend_msg">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/><span>12:15</span></p>
                </div>
                <div class="message my_msg">
                    <p>Lorem ipsum dolor sit amet consectetur <br/><span>12:15</span></p>
                </div>
                <div class="message friend_msg">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/><span>12:15</span></p>
                </div>
                <div class="message my_msg">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/><span>12:15</span></p>
                </div>
                <div class="message friend_msg">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/><span>12:15</span></p>
                </div>
                <div class="message my_msg">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/><span>12:15</span></p>
                </div>
                <div class="message friend_msg">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/><span>12:15</span></p>
                </div>
                <div class="message my_msg">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/><span>12:15</span></p>
                </div>
                <div class="message friend_msg">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/><span>12:15</span></p>
                </div>
                <div class="message my_msg">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/><span>12:15</span></p>
                </div>
                <div class="message friend_msg">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/><span>12:15</span></p>
                </div>
            </div>

            {/* <!-- CHAT INPUT --> */}
            <div class="chat_input">
                <ion-icon name="happy-outline"></ion-icon>
                {/* <!-- <ion-icon name="happy-outline"></ion-icon> --> */}
                <input type="text" placeholder="Type a message"/>
                <ion-icon name="mic"></ion-icon>
            </div>
        </div>
    </div>
    )
} 

export default Middle