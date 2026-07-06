import m from "mithril";
import "tachyons";

import { Font } from "astro:assets";

// import Negative_0_4 from "../assets/NEGATIVE-0-4.JPG";
// import uptwLogo from '../assets/uptw.png';

import "../assets/css/intro.css"


const IntroMithril_orig = {
    view: (vnode) => {
        return m("div.absolute.[id=container]", {  // container
        }, m("main", [
            m("section[id=hero]", {  // hero
            }, [
                // m("img[width=115]", {
                //     src: uptwLogo.src,
                // }),
                m("h1",
                  m("code-ig",
                    m("pre.section", m("a.button", {
                        target: "_",
                        href: "https://www.instagram.com/carman.lei/",
                    }, "Carcarman's site in progress\ncoming soon"))
                   )
                 ),


                m("h1",
                  m("code-ig",
                    m("pre.section", m("a.button", {
                        target: "_",
                        href: "https://www.instagram.com/carman.lei/",
                    }, "www.instagram.com/carman.lei/"))
                   )
                 ),


            ]),
        ]));
    },
};

const IntroMithril = {
    view: (vnode) => {
        return m("div.absolute.w-100.[id=container]", {  // container
        }, m("main", [
            m("section[id=hero]", {  // hero
            }, [
                // m("img[width=115]", {
                //     src: uptwLogo.src,
                // }),
                // m("h1",
                //   m("code-ig",
                //     m("pre.section", m("a.button", {
                //         target: "_",
                //         href: "https://www.instagram.com/carman.lei/",
                //     }, "Carcarman's site in progress\ncoming soon"))
                //    )
                //  ),


                // m("h1",
                //   m("code-ig",
                //     m("pre.section", m("a.button", {
                //         target: "_",
                //         href: "https://www.instagram.com/carman.lei/",
                //     }, "www.instagram.com/carman.lei/"))
                //    )
                //  ),


                m("div.h-100.flex-column.flex.items-center.justify-between", [
                      m("code-ig",
                        m("div.flex-column", [
                            m("pre.section.dancingscript", [
                                m("span.f2", "Carcarman's site"),
                                // m("span.f3", " in progress\ncoming soon"),
                                m("span.f3", " in progress"),
                            ]),
                            m("pre.section.dancingscript.tc", [
                                m("span.f3", "coming soon")
                            ])
                        ])
                       ),

                    m("h1",
                      m("code-ig",
                        m("pre.section.dancingscript", m("a.button", {
                            target: "_",
                            href: "https://www.instagram.com/carman.lei/",
                        }, "www.instagram.com/carman.lei/"))
                       )
                     ),
                ]),

            ]),
        ]));
    },
};

const IntroMithrilTop = {
    view: (vnode) => {
        return m("div.absolute.[id=container]", {  // container
        }, m("main", [
            m("section[id=hero]", {  // hero
            }, [
                // m("img[width=115]", {
                //     src: uptwLogo.src,
                // }),
                m("h1",
                  m("code-ig",
                    m("pre.section", m("a.button", {
                        target: "_",
                        href: "https://www.instagram.com/carman.lei/",
                    }, "Carcarman's site in progress\ncoming soon"))
                   )
                 ),

            ]),
        ]));
    },
};


const FullPageImage = {
    view: (vnode) => {
        return [
            m("img.db.vh-100.w-100.bg-center.cover", {
                src: vnode.attrs.image.src,
                style: "object-fit: contain;",
            }),
        ];
    },
};


const HeyNav = {
    view: (vnode) => {
        return m("div.absolute.z-1.w-100.tr.pa3", [
            m("nav", vnode.attrs.settings.nav.map((item) => (
                m("a.bs-btn", {
                    class: "bs-btn !bg-transparent before:translate-y-full hover:before:translate-y-0",
                    href: item.link,
                }, item.title)
            ))),
        ]);
    },
};


export default IntroMithril;
export {FullPageImage, HeyNav, IntroMithril, IntroMithrilTop};
