function WideCategory({ category }) {
    return (
        <div style={{'background': category.color}} className="relative rounded-lg flex-shrink-0 overflow-hidden h-55 w-109,5">
            <div className="absolute inset-0">
                <h3 className="p-4 text-4xl tracking-tighter font-semibold">
                {category.title}
                </h3>
                <img className="absolute bottom-0 right-0 h-32 w-32 rounded rotate-25 shadow-spotify translate-x-18/100 translate-y-1/20" src={category.cover} alt="" />
            </div>
        </div>
    )
}

export default WideCategory