import { useRouter } from "next/router";

export default function LinkToHash({ to, className, children }) {
    const router = useRouter()
    const { pathname } = router
    const path = to.slice(0, to.indexOf('#'));
    const hash = to.substring(to.indexOf("#"));

    const scrollTo = () => {
        if (pathname != path) {
            sessionStorage.setItem("to", hash);
            router.replace(path);
        } else {
            const element = document.querySelector(hash)

            console.log(element)

            if (element) {
                const rect = element.getBoundingClientRect();
                const padding = window.getComputedStyle(element, null).getPropertyValue('padding-top')
            
                window.scrollTo(0, rect.top + window.scrollY - parseInt(padding) * 2);
            }
        }
    }

    return (
        <button className={className} onClick={() => scrollTo()}>{ children }</button>
    )
}
