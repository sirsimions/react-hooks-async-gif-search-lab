function GifList({ gifs }) {
    return (
        <div>
            <ul>
                {gifs.map(gif => (<li key={gif}><img src={gif}/></li>))}
            </ul>
        </div>
    )
}

export default GifList;