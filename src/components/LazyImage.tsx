const LazyImage = ({ src, alt }) => {
    return <img src={src} alt={alt} className="pointer-events-none w-full h-full object-cover rounded-md" />;
}

export default LazyImage;
