export default function Stack() {
    const imageStyle = {
        width:'75px',
        height: '75px',
        objectFit: 'cover',
        marginRight: '14px'
    };

    return (
        <div style={{
            display: "flex",
            marginTop: '40px',
            marginLeft: '24rem',
        }}>
            <img src="/images/nodejs.png" alt="nodejs" style={imageStyle} />
            <img src="/images/astro.png" alt="astro" style={imageStyle} />
            <img src="/images/tailwind.png" alt="tailwind" style={imageStyle} />
            <img src="/images/git.png" alt="git" style={imageStyle} />
            <img src="/images/github.png" alt="github" style={imageStyle} />
            <img src="/images/vercel.png" alt="vercel" style={imageStyle} />
        </div>
    );
}