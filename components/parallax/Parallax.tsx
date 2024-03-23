import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";
import './parallax.scss'
import Button from "../utils/button/button.tsx";
import {AnimatedText} from "../utils/animatedText/animatedText.tsx";

const Parallax = () => {
    const refHome = useRef(null)
    const {scrollYProgress} = useScroll({
        target: refHome,
        offset: ["start start", "end start"]
    })


    const refDown = useRef(null)
    const {scrollYProgress: scrollYProgressDown} = useScroll({
        target: refDown,
        offset: ["start start", "start end"]
    })


    const banner = useTransform(scrollYProgress, [0, 1], ["0%", "150%"])
    const planetsY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])
    const moonY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const background = useTransform(scrollYProgressDown, [0, 1], ["0%", "200%"])
    const astro = useTransform(scrollYProgressDown, [0, 1], ["0%", "300%"])

    // const levitationRef = useRef(null)
    // const levitation = useAnimation()
    return (
        <div>
            <div ref={refHome} className="parallax-wrapper">
                <motion.div className="images-parallax__stars">
                </motion.div>
                <div className="home__container _container">
                    <header className="header">
                        <div className="_container">
                            <div className="header__logo">AITUVERSE</div>
                            <div className="header__links">
                                <a href="#" className="header__link">PRICES</a>
                                <a href="#" className="header__link">DOWNLOAD AITUVERSE</a>
                                <a href="#" className="header__link">ABOUT US</a>
                            </div>
                            <a className="header__profile">PROFILE</a>
                        </div>
                    </header>
                    <motion.div
                        style={{y: banner}}
                        variants={{
                            hidden: {
                                scale: 0.5
                            },
                            visible: {
                                scale: 1,
                                transition: {
                                    duration: 0.5,
                                }
                            }
                        }}
                        initial={"hidden"}
                        animate={"visible"}
                        className="home__banner">
                        <h1 className="home__title">AITUVERSE</h1>
                        <h2 className="home__subtitle">The main goal of AITUVERSE is to make the learning process at
                            the university more comfortable, interesting and productive for all students and
                            teachers.</h2>
                        <div className="home__button">
                            <Button mode={false} text={"Get started"}/>
                        </div>
                    </motion.div>
                </div>
                <motion.div style={{y: planetsY}} initial={{opacity: 0}}
                            animate={{opacity: 1, transition: {delay: 0.3, duration: 0.5, ease: "easeIn"}}}
                            className="images-parallax__planets-earth"></motion.div>
                <motion.div style={{y: planetsY}} initial={{opacity: 0}}
                            animate={{opacity: 1, transition: {delay: 0.6, duration: 0.5, ease: "easeIn"}}}
                            className="images-parallax__planets-merk"></motion.div>
                <motion.div style={{y: planetsY}} initial={{opacity: 0}}
                            animate={{opacity: 1, transition: {delay: 0.9, duration: 0.5, ease: "easeIn"}}}
                            className="images-parallax__planets-diamond"></motion.div>
                <motion.div style={{y: moonY}} className="images-parallax__moon"></motion.div>


            </div>
            <main className="content">
                <section className="info">
                    <div className="_container">
                        <div className="info__body">
                            <AnimatedText text={"WHAT IS AITUVERSE?"} el={"h2"}
                                          className={"info__title"}
                                          once={true}
                            />
                            <AnimatedText text={"AITUVERSE is a revolutionary tool designed to significantly\n" +
                                "increase the level of engagement and interaction between\n" +
                                "students and instructors within\n" +
                                "the educational landscape."} el={"p"}
                                          className={"info__text"}
                                          once={true}

                            />
                            <AnimatedText text={"VALUE"} el={"h2"}
                                          className={"info__title"}
                                          once={true}
                            />
                            <AnimatedText text={"It serves as a digital gateway for dynamic and engaging\n" +
                                "learning. With this innovative application,\n" +
                                " which can be accessed through a website, the\n" +
                                "education sector is striving to enter\n" +
                                " a new era of online education."} el={"p"}
                                          className={"info__text"}
                                          once={true}

                            />
                        </div>
                        <div className="info__image"/>
                    </div>
                    <div className="ads">
                        <div className="_container">
                            <div className="ads__title">The Advantages of AITUVERSE</div>
                            <div className="ads__cards cards">
                                <motion.div
                                    variants={{
                                        hidden: {
                                            opacity: 0
                                        },
                                        visible: {
                                            opacity: 1,
                                            transition: {delay: 0, ease: "easeIn"}
                                        }
                                    }}
                                    initial={"hidden"}
                                    whileInView={"visible"}
                                    viewport={{once: true, amount: 0.7}}

                                    className="card">
                                    <img src="../../src/assets/Main%20page/cards/Vector-3.svg" alt=""
                                         className="card__image"/>
                                    <div className="card__title">UNIQUENESS</div>
                                </motion.div>
                                <motion.div variants={{
                                    hidden: {
                                        opacity: 0
                                    },
                                    visible: {
                                        opacity: 1,
                                        transition: {delay: 0.25, ease: "easeIn"}
                                    }
                                }}
                                            initial={"hidden"}
                                            whileInView={"visible"}
                                            viewport={{once: true, amount: 0.7}}
                                            className="card">
                                    <img src="../../src/assets/Main%20page/cards/Vector-2.svg" alt=""
                                         className="card__image"/>
                                    <div className="card__title">INTERACTIVITY</div>
                                </motion.div>
                                <motion.div variants={{
                                    hidden: {
                                        opacity: 0
                                    },
                                    visible: {
                                        opacity: 1,
                                        transition: {delay: 0.5, ease: "easeIn"}
                                    }
                                }}
                                            initial={"hidden"}
                                            whileInView={"visible"}
                                            viewport={{once: true, amount: 0.7}}
                                            className="card">
                                    <img src="../../src/assets/Main%20page/cards/Vector-1.svg" alt=""
                                         className="card__image"/>
                                    <div className="card__title">INNOVATION</div>
                                </motion.div>
                                <motion.div variants={{
                                    hidden: {
                                        opacity: 0
                                    },
                                    visible: {
                                        opacity: 1,
                                        transition: {delay: 0.75, ease: "easeIn"}
                                    }
                                }}
                                            initial={"hidden"}
                                            whileInView={"visible"}
                                            viewport={{once: true, amount: 0.7}}
                                            className="card">
                                    <img src="../../src/assets/Main%20page/cards/Vector.svg" alt=""
                                         className="card__image"/>
                                    <div className="card__title">ENGAGEMENT</div>
                                </motion.div>
                            </div>
                        </div>

                    </div>
                </section>
                <section ref={refDown} className="cta">
                    <div className="_container">
                        <motion.div style={{y: background}} className="cta__body">
                            <AnimatedText text={"LEARNING HAS BECOME EASIER!"}
                                          once={true}
                                          className={"cta__text"}
                                          el={"h3"}
                            />
                            <div className="cta__button">
                                <Button mode={true} text={"Download"}/>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{
                                transform: "translateZ(8px) translateY(-2px)",
                            }}
                            animate={{
                                transform: "translateZ(32px) translateY(-40px)",
                            }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "mirror",
                                duration: 2,
                                ease: "easeOut"
                            }}
                            style={{y: astro}} className="cta__image"/>

                    </div>
                </section>
            </main>
        </div>

    );
};

export default Parallax;