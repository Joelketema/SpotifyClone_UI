import Head from "next/head";


const Metatags = ({ title, description, image }) => {
    
    title = 'Spotfy - HOUSE OF MUSIC',
    description = 'Listen to songs, make playlists,share your music taste',
    image = "data:image/png;base64,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"
        
    return (
        <Head>
            <title>{title}</title>
            <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@fireship_dev" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
             <link rel="icon" href={image} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
        </Head>
    )
    
}

export default Metatags