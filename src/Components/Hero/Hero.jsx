import React, { useState } from 'react';
import './Hero.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaPlay } from 'react-icons/fa';
import 'swiper/css';
import mus2 from '../music/AlanWalker-Faded.mp3'
import mus3 from '../music/Alan Walker - The Spectre.mp3'
import mus4 from '../music/Alan Walker & Ava Max - Alone, Pt. II.mp3'
import mus5 from '../music/Fue lo mejor del amor - Rodrigo -- con letra.mp3'
import mus6 from '../music/L-Gante -- BZRP Music Sessions.mp3'
import mus7 from '../music/L-GANTE RKT - L-GANTE FT  PAPU DJ.mp3'
import mus8 from '../music/L-Gante X DT.Bilardo - MALIANTEO 420.mp3'
import mus9 from '../music/L-GANTE X NEGRO DUB X DT BILARDO - EL ÚLTIMO ROMÁNTICO.mp3'
import mus10 from '../music/Rei, Callejero Fino - Tu Turrito.mp3'
import mus11 from '../music/Rodrigo Bueno - Amor clasificado.mp3'
import mus12 from '../music/Soy Cordobes.mp3'
import mus13 from '../music/TINI L-Gante - Bar.mp3'

function Footer({ selectedMusic }) {
    return selectedMusic ? (
        <footer className="footerContain">
            <div className='img-p'>
                <img src={selectedMusic.img} alt="" />
                <p>{selectedMusic.title}</p>
            </div>
            <audio className="audio-player" id="audio-player" controls autoPlay src={selectedMusic.music}></audio>
        </footer>

    ) : null;
}

export default function Hero() {
    const [selectedMusic, setSelectedMusic] = useState(null);
    const handleButtonClick = (music) => {
        setSelectedMusic(music);
        console.log(music)
    };

    const musicas = [

        {
            id: 1,
            title: "Alan Walker - Faded",
            categoria: "Electro",
            music: mus2,
            img: "https://slm-assets.secondlife.com/assets/21562313/lightbox/alam-walker-faded-song-lyrics-750750.jpg?1536637778",
            descripcion: "",
        },
        {
            id: 2,
            title: "Alan Walker - The Spectre",
            categoria: "Electro",
            music: mus3,
            img: "https://i1.sndcdn.com/artworks-000658736269-jsh8cq-t500x500.jpg",
            descripcion: "",
        },
        {
            id: 3,
            title: "Alan Walker & Ava Max - Alone, Pt. II",
            categoria: "Electro",
            music: mus4,
            img: "https://i1.sndcdn.com/artworks-000669197464-a020vt-t500x500.jpg",
            descripcion: "",
        },
        {
            id: 4,
            title: "Fue lo mejor del amor - Rodrigo",
            categoria: "Cuarteto",
            music: mus5,
            img: "https://m.media-amazon.com/images/M/MV5BMTBlMjg5YzMtMWMwNi00ZDgyLTg3NTEtOWE5YTE2OTBhOTdmXkEyXkFqcGdeQXVyNjY5MDg5MjQ@._V1_FMjpg_UX1000_.jpg",
            descripcion: "",
        },
        {
            id: 5,
            title: "L-Gante -- BZRP Music Sessions",
            categoria: "Trap",
            music: mus6,
            img: "https://www.cmtv.com.ar/tapas-cd/0679805001615479500.jpg",
            descripcion: "",
        },
        {
            id: 6,
            title: "L-GANTE RKT - L-GANTE FT  PAPU DJ",
            categoria: "Trap",
            music: mus7,
            img: "https://i1.sndcdn.com/artworks-Hjj7FFIPwf9m-0-t500x500.jpg",
            descripcion: "",
        },
        {
            id: 7,
            title: "L-Gante X DT.Bilardo - MALIANTEO 420",
            categoria: "Trap",
            music: mus8,
            img: "https://i.ytimg.com/vi/k3W6kIRnX5c/maxresdefault.jpg",
            descripcion: "",
        },
        {
            id: 8,
            title: "L-GANTE X NEGRO DUB X DT BILARDO - EL ÚLTIMO ROMÁNTICO",
            categoria: "Trap",
            music: mus9,
            img: "https://i.ytimg.com/vi/xD1KcZt2MoY/maxresdefault.jpg",
            descripcion: "",
        },
        {
            id: 9,
            title: "Rei, Callejero Fino - Tu Turrito",
            categoria: "Trap",
            music: mus10,
            img: "https://i.ytimg.com/vi/AtalMwsn7fs/maxresdefault.jpg",
            descripcion: "",
        }, {
            id: 10,
            title: "Rodrigo Bueno - Amor clasificado ",
            categoria: "Cuarteto",
            music: mus11,
            img: "https://i.ytimg.com/vi/Wp75WKhWT48/maxresdefault.jpg",
            descripcion: "",
        },
        {
            id: 11,
            title: "Soy Cordobes",
            categoria: "Cuarteto",
            music: mus12,
            img: "https://akamai.sscdn.co/uploadfile/letras/fotos/8/8/1/3/8813775304b42f299e99a34ba0ba37fd.jpg",
            descripcion: "",
        },
        {
            id: 12,
            title: "TINI L-Gante - Bar",
            categoria: "Trap",
            music: mus13,
            img: "https://i.scdn.co/image/ab67616d0000b2737b1a8b1a92561bb5d16d6b4c",
            descripcion: "",
        },


    ];



    return (
        <div className='heroContain'>
            <div className="contain" >
                <Swiper effect={'coverflow'} grabCursor={true} loop={true} slidesPerView={'auto'} coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5, }} pagination={{ el: '.swiper-pagination', clickable: true }} navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', clickable: true, }} onSwiper={(swiper) => console.log(swiper)} className="swiper_container"  >
                    <div className="hero">
                        <Swiper>
                            {musicas.map((music) => (
                                <SwiperSlide key={music.id}>
                                    <div className="card-contain">
                                        <div className="hero-image">
                                            <img src={music.img} alt={music.title} />
                                        </div>
                                        <div className='card-text'>
                                            <button className="hero-button" onClick={() => handleButtonClick(music)}  >
                                                <FaPlay className="play-icon" />
                                            </button>
                                            <p>{music.title.slice(0, 10)}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </Swiper>

                <div className='contain-list-img'>
                    <div className='music-list-contain'>
                        {musicas.map((music) => (
                            <div key={music.id} className='fondo-list'>
                                <div className="music-list">
                                    <div className="music-list-img">
                                        <img src={music.img} alt={music.title} />
                                        <div>
                                            <p>{music.title.slice(0, 20)}</p>
                                            <p>{music.categoria}</p>
                                        </div>
                                    </div>
                                    <button onClick={() => handleButtonClick(music)}  >
                                        <FaPlay className="play-icon" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='music-img-fondo-contain'>
                        {musicas.map((music) => (
                            <div key={music.id} className='music-img-fondo'>
                                <div className="music-img-fondo-image" >
                                    <button onClick={() => handleButtonClick(music)}  >
                                        <img src={music.img} alt={music.title} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>



            </div >
            <Footer selectedMusic={selectedMusic} />
        </div >
    )
}
