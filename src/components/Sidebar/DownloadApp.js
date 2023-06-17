import { Icon } from "Icons"

function DownloadApp() {
    return (
        <a href="/" className="flex flex-shrink-0 gap-x-4 h-10 items-center px-6 text-sm font-semibold text-link hover:text-white">
            <Icon name="download" size={20} />
            Uygulamayı Yükle
        </a>
    )
}

export default DownloadApp