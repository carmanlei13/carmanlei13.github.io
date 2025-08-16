import m from "mithril";
import "tachyons";


const FullPageImage = {
    view: (vnode) => {
        return [
            m("img.db.vh-100.w-100.bg-center.cover", {
                src: vnode.attrs.image.src,
                // style: "background-attachment: fixed;",
                style: "object-fit: contain;",
            }),
        ];
    },
};


export default FullPageImage;
export {FullPageImage};
