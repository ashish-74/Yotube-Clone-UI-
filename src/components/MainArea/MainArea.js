import React from 'react';
import './MainArea.css';
import {MdHistory, MdHome, MdPlaylistPlay, MdVideoLibrary, MdWatchLater,MdRssFeed} from 'react-icons/md';
import {FaFutbol, FaGripfire, FaMusic, FaNewspaper} from 'react-icons/fa';
import {BsFillCollectionPlayFill} from 'react-icons/bs';
import {GiGamepad} from 'react-icons/gi';
import ReactPlayer from 'react-player';
import pic from '../../reactube-client.jpg';

export default function MainArea() {
    return (
        <div className='MainArea'>


            <div className='Sidebar'>
                <div className='Home'>
                    <div className='Quick_Icon'>
                        <MdHome color='red' fontSize='3rem'/>
                        <div>Home</div>
                    </div><div className='Quick_Icon'>
                        <FaGripfire color='grey' fontSize='3rem'/>
                        <div>Trending</div>
                    </div>
                    <div className='Quick_Icon'>
                        <BsFillCollectionPlayFill color='grey' fontSize='3rem'/>
                        <div>Subscriptions</div>
                    </div>
                </div>

                <div className='Library'>    
                    <div className='Quick_Icon'>
                        <MdHome color='grey' fontSize='3rem'/>
                        <div>Home</div>
                    </div>
                    <div className='Quick_Icon'>
                        <MdVideoLibrary color='grey' fontSize='3rem'/>
                        <div>Video Library</div>
                    </div>
                    <div className='Quick_Icon'>
                        <MdHistory color='grey' fontSize='3rem'/>
                        <div>History</div>
                    </div>
                    <div className='Quick_Icon'>
                        <MdWatchLater color='grey' fontSize='3rem'/>
                        <div>Watch Later</div>
                    </div>
                    <div className='Quick_Icon'>
                        <MdPlaylistPlay color='grey' fontSize='3rem'/>
                        <div>Youtube Clone</div>
                    </div>
                </div>
                    
                <div className="More_From_Youtube">
                    <div className='Quick_Icon'>
                        <GiGamepad color='grey' fontSize='3rem'/>
                        <div>Gaming</div>
                    </div>
                    <div className='Quick_Icon'>
                        <MdRssFeed color='grey' fontSize='3rem'/>
                        <div>Live</div>
                    </div>
                    <div className='Quick_Icon'>
                        <FaFutbol color='grey' fontSize='3rem'/>
                        <div>Sports</div>
                    </div>
                    <div className='Quick_Icon'>
                        <FaMusic color='grey' fontSize='3rem'/>
                        <div>Musics</div>
                    </div>
                    <div className='Quick_Icon'>
                        <FaNewspaper color='grey' fontSize='3rem'/>
                        <div>News</div>
                    </div>
                </div>                
            </div>

            <div className='Main'>
               <div className='Videos'>
                    <div className='Video'>
                        <ReactPlayer 
                            url='https://www.youtube.com/watch?v=-w3H6WUN1mU&t=2118s'
                            height='170px'
                            width='280px'
                            controls
                        />
                        <br></br>
                        <div className='Logo'>
                            <img src={pic} alt='React' style={{'height':'35px','width':'35px','borderRadius':'50%'}}/>
                            <div>YouTube Clone (UI) with REACT JS for Beginners !</div>
                        </div>
                        <br></br>
                        <div className='view'>
                            52 views* Sep 22,2020
                        </div>
                    </div><div className='Video'>
                        <ReactPlayer 
                            url='https://www.youtube.com/watch?v=hoPb2VxYLgA'
                            height='170px'
                            width='280px'
                            controls
                        />
                        <br></br>
                        <div className='Logo'>
                            <img src={pic} alt='React' style={{height:'35px',width:'35px',borderRadius:'50%'}}/>
                            <div>Full-Stack AMAZON Clone with REACT JS for Beginners</div>
                        </div>
                        <br></br>
                        <div className='view'>
                            52 views* Sep 22,2020
                        </div>
                    </div>
                    <div className='Video'>
                        <ReactPlayer 
                            url='https://www.youtube.com/watch?v=VyWLOp4PgqM'
                            height='170px'
                            width='280px'
                            controls
                        />
                        <br></br>
                        <div className='Logo'>
                            <img src={pic} alt='React' style={{height:'35px',width:'35px',borderRadius:'50%'}}/>
                            <div>Twitter Clone (UI) with REACT JS for Beginners !</div>
                        </div>
                        <br></br>
                        <div className='view'>
                            52 views* Sep 22,2020
                        </div>
                    </div>
                    <div className='Video'>
                        <ReactPlayer 
                            url='https://www.youtube.com/watch?v=Q28W8SZzuOY'
                            height='170px'
                            width='280px'
                            controls
                        />
                        <br></br>
                        <div className='Logo'>
                            <img src={pic} alt='React' style={{height:'35px',width:'35px',borderRadius:'50%'}}/>
                            <div>Instagram Clone (UI) with REACT JS for Beginners !</div>
                        </div>
                        <br></br>
                        <div className='view'>
                            52 views* Sep 22,2020
                        </div>
                    </div>
               </div>  
               <div className='Videoss'>
                    <div className='Video'>
                        <ReactPlayer 
                            url='https://www.youtube.com/watch?v=-w3H6WUN1mU&t=2118s'
                            height='170px'
                            width='280px'
                            controls
                        />
                        <br></br>
                        <div className='Logo'>
                            <img src={pic} alt='React' style={{height:'35px',width:'35px',borderRadius:'50%'}}/>
                            <div>YouTube Clone (UI) with REACT JS for Beginners !</div>
                        </div>
                        <br></br>
                        <div className='view'>
                            52 views* Sep 22,2020
                        </div>
                    </div><div className='Video'>
                        <ReactPlayer 
                            url='https://www.youtube.com/watch?v=hoPb2VxYLgA'
                            height='170px'
                            width='280px'
                            controls
                        />
                        <br></br>
                        <div className='Logo'>
                            <img src={pic} alt='React' style={{height:'35px',width:'35px',borderRadius:'50%'}}/>
                            <div>Full-Stack AMAZON Clone with REACT JS for Beginners</div>
                        </div>
                        <br></br>
                        <div className='view'>
                            52 views* Sep 22,2020
                        </div>
                    </div>
                    <div className='Video'>
                        <ReactPlayer 
                            url='https://www.youtube.com/watch?v=VyWLOp4PgqM'
                            height='170px'
                            width='280px'
                            controls
                        />
                        <br></br>
                        <div className='Logo'>
                            <img src={pic} alt='React' style={{height:'35px',width:'35px',borderRadius:'50%'}}/>
                            <div>Twitter Clone (UI) with REACT JS for Beginners !</div>
                        </div>
                        <br></br>
                        <div className='view'>
                            52 views* Sep 22,2020
                        </div>
                    </div>
                    <div className='Video'>
                        <ReactPlayer 
                            url='https://www.youtube.com/watch?v=Q28W8SZzuOY'
                            height='170px'
                            width='280px'
                            controls
                        />
                        <br></br>
                        <div className='Logo'>
                            <img src={pic} alt='React' style={{height:'35px',width:'35px',borderRadius:'50%'}}/>
                            <div>Instagram Clone (UI) with REACT JS for Beginners !</div>
                        </div>
                        <br></br>
                        <div className='view'>
                            52 views* Sep 22,2020
                        </div>
                    </div>
               </div>
               <div className='Videosss'>
                    <div className='Video'>
                        <ReactPlayer 
                            url='https://www.youtube.com/watch?v=-w3H6WUN1mU&t=2118s'
                            height='170px'
                            width='280px'
                            controls
                        />
                        <br></br>
                        <div className='Logo'>
                            <img src={pic} alt='React' style={{height:'35px',width:'35px',borderRadius:'50%'}}/>
                            <div>YouTube Clone (UI) with REACT JS for Beginners !</div>
                        </div>
                        <br></br>
                        <div className='view'>
                            52 views* Sep 22,2020
                        </div>
                    </div><div className='Video'>
                        <ReactPlayer 
                            url='https://www.youtube.com/watch?v=hoPb2VxYLgA'
                            height='170px'
                            width='280px'
                            controls
                        />
                        <br></br>
                        <div className='Logo'>
                            <img src={pic} alt='React' style={{height:'35px',width:'35px',borderRadius:'50%'}}/>
                            <div>Full-Stack AMAZON Clone with REACT JS for Beginners</div>
                        </div>
                        <br></br>
                        <div className='view'>
                            52 views* Sep 22,2020
                        </div>
                    </div>
                    <div className='Video'>
                        <ReactPlayer 
                            url='https://www.youtube.com/watch?v=VyWLOp4PgqM'
                            height='170px'
                            width='280px'
                            controls
                        />
                        <br></br>
                        <div className='Logo'>
                            <img src={pic} alt='React' style={{height:'35px',width:'35px',borderRadius:'50%'}}/>
                            <div>Twitter Clone (UI) with REACT JS for Beginners !</div>
                        </div>
                        <br></br>
                        <div className='view'>
                            52 views* Sep 22,2020
                        </div>
                    </div>
                    <div className='Video'>
                        <ReactPlayer 
                            url='https://www.youtube.com/watch?v=Q28W8SZzuOY'
                            height='170px'
                            width='280px'
                            controls
                        />
                        <br></br>
                        <div className='Logo'>
                            <img src={pic} alt='React' style={{height:'35px',width:'35px',borderRadius:'50%'}}/>
                            <div>Instagram Clone (UI) with REACT JS for Beginners !</div>
                        </div>
                        <br></br>
                        <div className='view'>
                            52 views* Sep 22,2020
                        </div>
                    </div>
               </div>                
            </div>            
        </div>
    )
}
