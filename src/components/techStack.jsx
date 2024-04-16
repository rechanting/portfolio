export default function Stack() {
    const imageStyle = {
        width:'75px',
        height: '75px',
        marginRight: '14px'
    };

    return (
        <div className="flex">
            <img src="/images/nodejs.png" alt="nodejs" style={imageStyle}  className="object-scale-down"/>
            <img src="/images/astro.png" alt="astro" style={imageStyle} className="object-scale-down"/>
            <img src="/images/tailwind.png" alt="tailwind" style={imageStyle} className="object-scale-down"/>
            <img src="/images/git.png" alt="git" style={imageStyle} className="object-scale-down"/>
            <img src="/images/github.png" alt="github" style={imageStyle} className="object-scale-down"/>
            <img src="/images/vercel.png" alt="vercel" style={imageStyle} className="object-scale-down"/>
        </div>
    );
}
