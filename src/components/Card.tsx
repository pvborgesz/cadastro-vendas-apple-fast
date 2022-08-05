import Card from 'react-bootstrap/Card';
import '../css/Card.scss'

interface Props {
    imagem: string,
    descricao: string,
}

export default function BgColorExample() {
    return (
        <>
            {/* <Card
                bg={'Light'.toLowerCase()}
                key={'Light'}
                text={'Light'.toLowerCase() === 'light' ? 'dark' : 'white'}
                style={{ width: '50rem', margin: "2rem" }}
                classNameNameName="mb-2"
            >
                <Card.Header>Header</Card.Header>
                <Card.Body>
                    <Card.Title>{'Light'} Card Title </Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card> */}
            <section className="dark">
                <div className="container py-4">
                    <h2 className="h1 text-center" id="pageHeaderTitle" style={{ color: "white" }}>Paulo Victor Borges</h2>
                    <p className="h5 text-center" id="pageHeaderTitle" style={{ color: "white", fontSize: "12" }}>Experiência Profissional</p>
                    <article className="postcard dark blue">
                        <a className="postcard__img_link" href="#">
                            <img className="postcard__img" src={"https://lh3.googleusercontent.com/a-/AFdZucoyq8WyiBUjYjrDKiyy41YUoynLZRTzaZkpRcV_nW8=s192-c-mo"} alt=" Image Title" />
                        </a>
                        <div className="postcard__text">
                            <h1 className="postcard__title blue"><a href="#">Desenvolvedor React</a></h1>
                            <div className="postcard__subtitle small">
                                <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2022
                            </div>
                            <div className="postcard__bar"></div>
                            <div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
                            <ul className="postcard__tagbox">
                                <li className="tag__item"><i className="fas fa-tag mr-2"></i>Github</li>
                                <li className="tag__item"><i className="fas fa-clock mr-2"></i>Currículo</li>
                                <li className="tag__item play blue">
                                    <a href="#"><i className="fas fa-play mr-2"></i>Linkedin</a>
                                </li>
                            </ul>
                        </div>
                    </article>
                    <article className="postcard dark red">
                        <a className="postcard__img_link" href="#">
                            <img className="postcard__img" src="https://picsum.photos/501/500" alt="Image Title" />
                        </a>
                        <div className="postcard__text">
                            <h1 className="postcard__title red"><a href="#">Podcast Title</a></h1>
                            <div className="postcard__subtitle small">

                            </div>
                            <div className="postcard__bar"></div>
                            <div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
                            <ul className="postcard__tagbox">
                                <li className="tag__item"><i className="fas fa-tag mr-2"></i>Podcast</li>
                                <li className="tag__item"><i className="fas fa-clock mr-2"></i>55 mins.</li>
                                <li className="tag__item play red">
                                    <a href="#"><i className="fas fa-play mr-2"></i>Play Episode</a>
                                </li>
                            </ul>
                        </div>
                    </article>
                    <article className="postcard dark green">
                        <a className="postcard__img_link" href="#">
                            <img className="postcard__img" src="https://picsum.photos/500/501" alt="Image Title" />
                        </a>
                        <div className="postcard__text">
                            <h1 className="postcard__title green"><a href="#">Podcast Title</a></h1>
                            <div className="postcard__subtitle small">
                                <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                            </div>
                            <div className="postcard__bar"></div>
                            <div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
                            <ul className="postcard__tagbox">
                                <li className="tag__item"><i className="fas fa-tag mr-2"></i>Podcast</li>
                                <li className="tag__item"><i className="fas fa-clock mr-2"></i>55 mins.</li>
                                <li className="tag__item play green">
                                    <a href="#"><i className="fas fa-play mr-2"></i>Play Episode</a>
                                </li>
                            </ul>
                        </div>
                    </article>
                    <article className="postcard dark yellow">
                        <a className="postcard__img_link" href="#">
                            <img className="postcard__img" src="https://picsum.photos/501/501" alt="Image Title" />
                        </a>
                        <div className="postcard__text">
                            <h1 className="postcard__title yellow"><a href="#">Podcast Title</a></h1>
                            <div className="postcard__subtitle small">
                                <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                            </div>
                            <div className="postcard__bar"></div>
                            <div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
                            <ul className="postcard__tagbox">
                                <li className="tag__item"><i className="fas fa-tag mr-2"></i>Podcast</li>
                                <li className="tag__item"><i className="fas fa-clock mr-2"></i>55 mins.</li>
                                <li className="tag__item play yellow">
                                    <a href="#"><i className="fas fa-play mr-2"></i>Play Episode</a>
                                </li>
                            </ul>
                        </div>
                    </article>
                </div>
            </section>
        </>
    );
}

