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
import mus14 from '../music/Agrupacion Marilyn - Los Recuerdos.mp3'
import mus15 from '../music/BM - Ven Mami .mp3'
import mus16 from '../music/CALLEJERO FINO - DJ TAO Turreo.mp3'
import mus17 from '../music/CALLEJERO FINO - LE DOY PERREO.mp3'
import mus18 from '../music/CALLEJERO FINO, STANDLY -  CUANDO SE APAGA LA LUZ.mp3'
import mus19 from '../music/Frontea - Tirri La Roca, Brisa La Roca.mp3'
import mus20 from '../music/M.A (Mejores Amigos) - BM.mp3'
import mus21 from '../music/Madonna - Sorry.mp3'
import mus22 from '../music/MARAMA -  Todo Comenzo Bailando.mp3'
import mus23 from '../music/MARAMA - Bronceado (Video Oficial).mp3'
import mus24 from '../music/NAM DANG NAM SOM.mp3'
import mus25 from '../music/Nestor en bloque - Dejenla que llore sola │ Letra.mp3'
import mus26 from '../music/Paloma Faith - Only Love Can Hurt Like This.mp3'
import mus27 from '../music/Que locura fue enamorarme de ti.mp3'
import mus28 from '../music/Rombai Ft Marama - Noche Loca.mp3'
import mus29 from '../music/TIRRI LA ROCA - Session 1.mp3'
import mus30 from '../music/Una Calle Nos Separa.mp3'
import mus31 from '../music/Until I Found You.mp3'

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
        {
            id: 13,
            title: "Agrupacion Marilyn - Los Recuerdos",
            categoria: "Cumbia",
            music: mus14,
            img: "https://i.ytimg.com/vi/qwGEzue4yj4/maxresdefault.jpg",
            descripcion: "",
        },
        {
            id: 14,
            title: "BM - Ven Mami",
            categoria: "Trap",
            music: mus15,
            img: "https://source.boomplaymusic.com/group10/M00/03/02/d85b6edd1b7d47ac9dab797818d52d9e_464_464.jpg",
            descripcion: "",
        },
        {
            id: 15,
            title: "CALLEJERO FINO - DJ TAO Turreo",
            categoria: "Trap",
            music: mus16,
            img: "https://geo-media.beatsource.com/image_size/500x500/3/b/0/3b0dbd50-ace2-449c-9612-51d52aaf7346.jpg",
            descripcion: "",
        },
        {
            id: 16,
            title: "CALLEJERO FINO - LE DOY PERREO",
            categoria: "Trap",
            music: mus17,
            img: "https://i.ytimg.com/vi/Zk2qrW-GrTw/maxresdefault.jpg",
            descripcion: "",
        },
        {
            id: 17,
            title: "CALLEJERO FINO, STANDLY -  CUANDO SE APAGA LA LUZ",
            categoria: "Trap",
            music: mus18,
            img: "https://images.genius.com/c39ef058c438a06411a971efe16c3305.1000x1000x1.jpg",
            descripcion: "",
        },
        {
            id: 18,
            title: "mus19",
            categoria: "Trap",
            music: mus19,
            img: "https://i.ytimg.com/vi/mm37ttctQFU/maxresdefault.jpg",
            descripcion: "",
        },
        {
            id: 19,
            title: "M.A (Mejores Amigos) - BM",
            categoria: "Trap",
            music: mus20,
            img: "https://i.ytimg.com/vi/pOZvokjWbXM/maxresdefault.jpg",
            descripcion: "",
        },
        {
            id: 20,
            title: "Madonna - Sorry",
            categoria: "Pop",
            music: mus21,
            img: "https://i.ytimg.com/vi/pUCXfEPVoPk/hqdefault.jpg",
            descripcion: "",
        },
        {
            id: 21,
            title: "MARAMA -  Todo Comenzo Bailando",
            categoria: "Pop",
            music: mus22,
            img: "https://i1.sndcdn.com/artworks-000125278112-4e9wb7-t500x500.jpg",
            descripcion: "",
        },
        {
            id: 22,
            title: "MARAMA - Bronceado",
            categoria: "Pop",
            music: mus23,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB6r0e0JIffoiOna5ENs_OvIOmipBAUfApwj0vMvkooo8tBKvwcDD41R7uzR0GYZDWwAo&usqp=CAU",
            descripcion: "",
        }, {
            id: 23,
            title: "NAM DANG NAM SOM",
            categoria: "Hip Hop",
            music: mus24,
            img: "https://routenote-push.s3.eu-west-2.amazonaws.com/19428/68223b07-8f76-4aa7-985b-213341425342",
            descripcion: "",
        },

        {
            id: 24,
            title: "Nestor en bloque - Dejenla que llore sola",
            categoria: "Cumbia",
            music: mus25,
            img: "https://i.ytimg.com/vi/R_kQGxS1P8U/hqdefault.jpg",
            descripcion: "",
        },
        {
            id: 25,
            title: "Paloma Faith - Only Love Can Hurt Like This",
            categoria: "Pop",
            music: mus26,
            img: "https://i.ytimg.com/vi/PaKr9gWqwl4/maxresdefault.jpg",
            descripcion: "",
        },
        {
            id: 26,
            title: "Que locura fue enamorarme de ti",
            categoria: "Cumbia",
            music: mus27,
            img: "https://akamai.sscdn.co/uploadfile/letras/albuns/9/a/7/9/639321529589588.jpg",
            descripcion: "",
        },
        {
            id: 27,
            title: "Rombai Ft Marama - Noche Loca",
            categoria: "Pop",
            music: mus28,
            img: "https://www.cmtv.com.ar/tapas-cd/rombainochelocasingle.webp",
            descripcion: "",
        },
        {
            id: 28,
            title: "TIRRI LA ROCA - Session 1",
            categoria: "Trap",
            music: mus29,
            img: "https://m.media-amazon.com/images/I/51n2DyjOM3L._UXNaN_FMjpg_QL85_.jpg",
            descripcion: "",
        },
        {
            id: 29,
            title: "Una Calle Nos Separa",
            categoria: "Cumbia",
            music: mus30,
            img: "https://i.ytimg.com/vi/R_kQGxS1P8U/hqdefault.jpg",
            descripcion: "",
        },
        {
            id: 30,
            title: "Until I Found You",
            categoria: "Pop",
            music: mus31,
            img: "https://i.ytimg.com/vi/i4ZcO1EorLE/maxresdefault.jpg",
            descripcion: "",
        },




    ];
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };



    const filteredMusicas = selectedCategory ? musicas.filter((music) => music.categoria === selectedCategory) : musicas;



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



                <Swiper effect={'coverflow'} grabCursor={true} loop={true} slidesPerView={'auto'} coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5, }} pagination={{ el: '.swiper-pagination', clickable: true }} navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', clickable: true, }} onSwiper={(swiper) => console.log(swiper)} className="swiper_container2" id='swiper-id'>
                    <div className="hero-category">
                        <Swiper>
                            <div className='filtros-categoria'>
                                <SwiperSlide id='slideSwiper'>
                                    <label className='label'>
                                        <input type="radio" name="category" value="" checked={!selectedCategory} onChange={handleCategoryChange} />
                                        Todos
                                    </label>
                                </SwiperSlide>
                                <SwiperSlide id='slideSwiper'>
                                    <label className='label'>
                                        <input type="radio" name="category" value="Electro" checked={selectedCategory === 'Electro'} onChange={handleCategoryChange} />
                                        Electro
                                    </label>
                                </SwiperSlide>
                                <SwiperSlide id='slideSwiper'>
                                    <label className='label'>
                                        <input type="radio" name="category" value="Cuarteto" checked={selectedCategory === 'Cuarteto'} onChange={handleCategoryChange} />
                                        Cuarteto
                                    </label>
                                </SwiperSlide>

                                <SwiperSlide id='slideSwiper'>
                                    <label className='label'>
                                        <input type="radio" name="category" value="Trap" checked={selectedCategory === 'Trap'} onChange={handleCategoryChange} />
                                        Trap
                                    </label>
                                </SwiperSlide>
                                <SwiperSlide id='slideSwiper'>
                                    <label className='label'>
                                        <input type="radio" name="category" value="Pop" checked={selectedCategory === 'Pop'} onChange={handleCategoryChange} />
                                        Pop
                                    </label>

                                </SwiperSlide>
                                <SwiperSlide id='slideSwiper'>
                                    <label className='label'>
                                        <input type="radio" name="category" value="Cumbia" checked={selectedCategory === 'Cumbia'} onChange={handleCategoryChange} />
                                        Cumbia
                                    </label>

                                </SwiperSlide>
                                <SwiperSlide id='slideSwiper'>
                                    <label className='label'>
                                        <input type="radio" name="category" value="Hip Hop" checked={selectedCategory === 'Hip Hop'} onChange={handleCategoryChange} />
                                        Hip Hop
                                    </label>
                                </SwiperSlide>

                            </div>
                        </Swiper>
                    </div>
                </Swiper>

                <div className='contain-list-img'>
                    <div className='filtros-categoria-contain'>
                        <div className='filtros-categoria'>
                            <label className='label'>
                                <input type="radio" name="category" value="" checked={!selectedCategory} onChange={handleCategoryChange} />
                                Todos
                            </label>
                            <label className='label'>
                                <input type="radio" name="category" value="Electro" checked={selectedCategory === 'Electro'} onChange={handleCategoryChange} />
                                Electro
                            </label>
                            <label className='label'>
                                <input type="radio" name="category" value="Cuarteto" checked={selectedCategory === 'Cuarteto'} onChange={handleCategoryChange} />
                                Cuarteto
                            </label>
                            <label className='label'>
                                <input type="radio" name="category" value="Trap" checked={selectedCategory === 'Trap'} onChange={handleCategoryChange} />
                                Trap
                            </label>
                            <label className='label'>
                                <input type="radio" name="category" value="Pop" checked={selectedCategory === 'Pop'} onChange={handleCategoryChange} />
                                Pop
                            </label>
                            <label className='label'>
                                <input type="radio" name="category" value="Cumbia" checked={selectedCategory === 'Cumbia'} onChange={handleCategoryChange} />
                                Cumbia
                            </label>
                            <label className='label'>
                                <input type="radio" name="category" value="Hip Hop" checked={selectedCategory === 'Hip Hop'} onChange={handleCategoryChange} />
                                Hip Hop
                            </label>
                        </div>
                        <div className='music-img-fondo-contain'>
                            {musicas.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 24).reverse().map((music) => (
                                <div key={music.id} className='music-img-fondo'>
                                    <div className="music-img-fondo-image">
                                        <button onClick={() => handleButtonClick(music)}>
                                            <img src={music.img} alt={music.title} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>



                    </div>
                    <div className="music-list-contain">
                        <div className='espacio'></div>
                        {filteredMusicas.map((music) => (
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
                        {musicas.slice(0, 27).map((music) => (
                            <div key={music.id} className='music-img-fondo'>
                                <div className="music-img-fondo-image">
                                    <button onClick={() => handleButtonClick(music)}>
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
