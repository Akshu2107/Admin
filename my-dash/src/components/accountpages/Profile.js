// UserProfile.js
import React from 'react';


const Profile = () => {
    return (
        <div>
            <div className="profile-header">
                <img src="https://via.placeholder.com/80" alt="Profile" />
                <div className="info">
                    <h2>Mathew Anderson</h2>
                    <p>Designer</p>
                </div>
                <div className="actions">
                    <button>Add To Story</button>
                    <button>Follow</button>
                </div>
            </div>
            <div className="profile-stats">
                <div>
                    <h3>938</h3>
                    <p>Posts</p>
                </div>
                <div>
                    <h3>3,586</h3>
                    <p>Followers</p>
                </div>
                <div>
                    <h3>2,659</h3>
                    <p>Following</p>
                </div>
            </div>
            <div className="profile-introduction">
                <h3>Introduction</h3>
                <p>Hello, I am Mathew Anderson. I love making websites and graphics. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p><b>Sir, P P Institute Of Science</b></p>
                <p>xyzjonathan@gmail.com</p>
                <p>www.xyz.com</p>
                <p>Newyork, USA - 100001</p>
            </div>
            <div className="profile-posts">
                <div className="profile-post">
                    <div className="post-header">
                        <img src="https://via.placeholder.com/40" alt="Profile" />
                        <div className="info">
                            <h4>Mathew Anderson <span>• 15 min ago</span></h4>
                        </div>
                    </div>
                    <div className="post-content">
                        <p>Lipeif los utlejku jaczew laflim gon nuccav uwi odo vi luwiz du ej tivduija. Wo esbu mahefaw nu az sabecuh zaz gomomle nemu hiwel holjuj de jidam jippoka wilsutnu.</p>
                        <img src="https://via.placeholder.com/200x100" alt="Post" />
                    </div>
                </div>
                <div className="profile-comments">
                    <div className="comment">
                        <img src="https://via.placeholder.com/30" alt="Profile" />
                        <div className="info">
                            <h4>Jonathan Bg <span>• 5 min ago</span></h4>
                            <p>Jel eho zajuttin su moho tadobif kadfa moc nuvu pen caczil fa hi vam biki kolunut huj deruw.</p>
                        </div>
                    </div>
                    <div className="comment">
                        <img src="https://via.placeholder.com/30" alt="Profile" />
                        <div className="info">
                            <h4>Carry minati <span>• just now</span></h4>
                            <p>Wehif vovutaz ita ga buzpe hipod dud bih ponat hujtivlo zeacmip ne ni.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
