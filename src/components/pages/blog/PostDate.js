const PostDate = ({ date }) => {
    const formattedDate = new Date(date).toLocaleDateString('hr-HR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return <span>{formattedDate}</span>;
}

export default PostDate;
