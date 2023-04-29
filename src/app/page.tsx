import Image from "next/image";

export default function Home() {
    return (
        <div className={"grid place-items-center md:bg-[url('/images/bg-main-tablet.png')] lg:bg-[url('/images/bg-main-desktop.png')] md:bg-[-300px_-250px] lg:bg-center"}>
            <Image className={"hidden md:inline lg:hidden absolute right-0 top-[-2rem]"} src={"/images/bg-pattern-1.svg"} width={266} height={400} alt={"Pattern 1"}/>
            <Image className={"hidden lg:inline absolute right-0 top-[-2rem]"} src={"/images/bg-pattern-1.svg"} width={312} height={468} alt={"Pattern 1"}/>

            <main className={"pt-10 pb-20 md:px-10 text-black overflow-hidden lg:max-w-[69.375rem]"}>
                <div className={"relative px-6 md:px-0"}>
                    <Image src={"/images/logo.svg"} width={146} height={32} alt={"logo"}/>
                    <div className={"absolute top-[-12rem] right-[-7.25rem] md:hidden"}>
                        <div className={"relative w-[17.563rem] h-[30rem]"}>
                            <Image className={"scale-[2.5]"} src={"/images/bg-main-mobile.png"} fill alt={"logo"}/>
                        </div>
                    </div>


                    <h1 className={`font-bold text-[2.5rem] md:text-[4rem]
                leading-[3rem] md:leading-[4rem] tracking-[-0.028rem] md:tracking-[-0.045rem] mt-16 md:mt-24 md:pr-[10.563rem] max-w-[51.563rem]`}>We make your music
                        sound extraordinary.</h1>

                    <p className={"leading-[1.625rem] md:leading-[1.75rem] md:text-lg mt-5 md:pr-[10.863rem] max-w-[51.563rem]"}>A system audio equalizer specifically designed for Android and
                        iOS. Freely tune the way your music sounds
                        with a professional grade parametric EQ & volume mixer. Control bass, mids, treble, gain control,
                        reverb, and more!</p>
                </div>

                <div className={"relative bg-black px-12 mt-[10.375rem] -z-10 md:h-[37.5rem]"}>
                    <div className="absolute top-[-6rem] left-0  right-0 flex justify-center md:justify-start md:ml-16">
                        <div className={"relative h-[26.875rem] w-[13.063rem] md:h-[34.75rem] md:w-[16.875rem]"}>
                            <Image src={"/images/illustration-app.png"} fill alt={"Illustration app"}/>
                        </div>
                    </div>
                    <Image className={"md:mx-auto"} src={"/images/bg-pattern-2.svg"} width={280} height={420} alt={"Pattern 2"}/>
                </div>

                <div className={"text-gray bg-orange px-10 py-12 md:px-12 lg:px-14 rounded-xl mt-[-2rem] md:mt-[-26rem] md:ml-[14.938rem] md:w-[24.938rem] lg:ml-[35.563rem] lg:mt-[-30rem]"}>
                    <h2 className={"text-3xl font-bold leading-[2.5rem]"}>Premium EQ</h2>

                    <p className={"text-lg leading-[1.75rem] mt-3"}>Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take your
                        listening experience to a whole new level and access all our incredible features!</p>

                    <div className={"flex gap-4 items-center mt-9"}>
                        <div className={"text-6xl font-bold"}>$4</div>
                        <div className={"tracking-[-0.013rem]"}>/ month</div>
                    </div>

                    <div className={"flex flex-col gap-4 text-lg tracking-[-0.011rem] mt-8"}>
                        <button className={"rounded-xl flex gap-2 justify-center items-center relative h-[3.813rem] w-full bg-black py-4 px-14"}>
                            <Image src={"/images/icon-apple.svg"} width={20} height={17} alt={"ios"}/>
                            <span>iOS Download</span>
                        </button>
                        <button className={"text-black rounded-xl flex gap-2 justify-center items-center relative h-[3.813rem] w-full bg-gray py-4 px-14"}>
                            <Image src={"/images/icon-android.svg"} width={20} height={17} alt={"android"}/>
                            <span>Android Download</span>
                        </button>
                    </div>
                </div>

                <div className={"relative px-6 mt-16 lg:mt-32 flex flex-col md:flex-row md:items-center md:justify-between"}>
                    <div className={"max-w-[22.875rem] lg:max-w-none flex flex-col lg:flex-row items-start lg:gap-32"}>
                        <Image src={"/images/logo.svg"} width={146} height={32} alt={"logo"}/>
                        <div className={"leading-[1.625rem] mt-8 lg:mt-0"}>
                            <div>
                                <div>
                                    All rights reserved © Equalizer 2021
                                </div>

                                <div>
                                    Have any problems? Contact us via social media or email us at
                                    <span className={"hidden md:inline font-bold"}>&nbsp;equalizer@example.com</span>
                                </div>
                            </div>
                            <div className={"font-bold md:hidden"}>equalizer@example.com</div>
                        </div>
                    </div>

                    <div className={"flex gap-5 mt-16 lg:mt-0"}>
                        <Image src={"/images/icon-facebook.svg"} width={20} height={20} alt={"Facebook"}/>
                        <Image src={"/images/icon-instagram.svg"} width={20} height={20} alt={"Instagram"}/>
                        <Image src={"/images/icon-twitter.svg"} width={20} height={20} alt={"Twitter"}/>
                    </div>
                </div>
            </main>
        </div>
    );
}
